"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export const Sneak = () => {
 const containerRef = useRef<HTMLDivElement | null>(null);

 useEffect(() => {
 if (!containerRef.current) return;
 const container = containerRef.current;

 // SCENE SETUP
 const scene = new THREE.Scene();
 scene.background = null; // Transparent to show parent gradient

 // CAMERA
 const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
 camera.position.z = 10;

 // RENDERER
 const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
 renderer.setPixelRatio(window.devicePixelRatio);
 renderer.setSize(container.clientWidth, container.clientHeight);
 container.appendChild(renderer.domElement);

 // 3D PERSPECTIVE GRID (Faint, warping)
 const gridHelper = new THREE.GridHelper(40, 40, 0x2910E5, 0x222222);
 gridHelper.position.y = -3;
 gridHelper.position.z = -5;
 gridHelper.material.opacity = 0.15;
 gridHelper.material.transparent = true;
 (gridHelper.material as THREE.Material).blending = THREE.AdditiveBlending;
 scene.add(gridHelper);

 // TEXT TEXTURE GENERATION
 function createTextTexture(text: string): THREE.Texture {
 const canvas = document.createElement("canvas");
 canvas.width = 2048;
 canvas.height = 512;
 const ctx = canvas.getContext("2d")!;
 
 ctx.clearRect(0, 0, canvas.width, canvas.height);
 ctx.font = "900 240px 'Satoshi', 'Inter', sans-serif";
 ctx.textAlign = "center";
 ctx.textBaseline = "middle";
 ctx.fillStyle = "#ffffff";
 ctx.fillText(text, canvas.width / 2, canvas.height / 2);

 const texture = new THREE.CanvasTexture(canvas);
 texture.minFilter = THREE.LinearFilter;
 texture.magFilter = THREE.LinearFilter;
 return texture;
 }

 const textTexture = createTextTexture("LET'S BUILD");

 // LIQUID CHROME SHADER MATERIAL
 const uniforms = {
 uTexture: { value: textTexture },
 uTime: { value: 0 },
 uMouse: { value: new THREE.Vector2(0.5, 0.5) },
 uResolution: { value: new THREE.Vector2(container.clientWidth, container.clientHeight) }
 };

 const shaderMaterial = new THREE.ShaderMaterial({
 uniforms,
 vertexShader: `
 varying vec2 vUv;
 varying vec3 vNormal;
 varying vec3 vViewPosition;
 uniform float uTime;
 uniform vec2 uMouse;

 void main() {
 vUv = uv;
 vec3 pos = position;
 
 // Liquid warp effect driven by mouse and time
 float dist = distance(vUv, uMouse);
 float wave = sin(dist * 15.0 - uTime * 4.0) * 0.15 * exp(-dist * 4.0);
 pos.z += wave;

 // Compute raw normal
 vNormal = normalize(normalMatrix * normal);
 
 vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
 vViewPosition = -mvPosition.xyz;
 gl_Position = projectionMatrix * mvPosition;
 }
 `,
 fragmentShader: `
 varying vec2 vUv;
 varying vec3 vNormal;
 varying vec3 vViewPosition;
 uniform sampler2D uTexture;
 uniform float uTime;

 void main() {
 vec4 texColor = texture2D(uTexture, vUv);
 if (texColor.a < 0.05) discard; // Only render the text body

 // Perturb normal for liquid metallic micro-facet look
 vec3 n = normalize(vNormal + vec3(
 sin(vUv.y * 30.0 + uTime * 2.0) * 0.15,
 cos(vUv.x * 30.0 + uTime * 2.0) * 0.15,
 1.0
 ));

 vec3 viewDir = normalize(vViewPosition);

 // Fresnel for edge highlights
 float fresnel = pow(1.0 - max(dot(n, viewDir), 0.0), 3.0);
 
 // Spherical Environment Mapping (Matcap simulation for Chrome)
 vec3 reflection = reflect(-viewDir, n);
 float m = 2.0 * sqrt(
 pow(reflection.x, 2.0) +
 pow(reflection.y, 2.0) +
 pow(reflection.z + 1.0, 2.0)
 );
 vec2 matcapUV = reflection.xy / m + 0.5;

 // Base Chrome: High contrast silver/black
 vec3 chromeBase = mix(vec3(0.05), vec3(1.0), smoothstep(0.3, 0.7, matcapUV.y + sin(matcapUV.x * 10.0)*0.1));
 
 // #2910E5 Edge Highlights (rgb: 41, 16, 229 -> 0.16, 0.06, 0.90)
 vec3 blueGlow = vec3(0.16, 0.06, 0.90) * fresnel * 2.5;
 
 // Center core hotspot
 vec3 hotspot = vec3(1.0) * pow(max(dot(reflection, vec3(0.0, 1.0, 0.0)), 0.0), 10.0);

 vec3 finalColor = chromeBase + blueGlow + hotspot;

 // Smooth alpha edges
 gl_FragColor = vec4(finalColor, texColor.a * 0.9);
 }
 `,
 transparent: true,
 side: THREE.DoubleSide
 });

 // MESH
 const geometry = new THREE.PlaneGeometry(16, 4, 128, 64);
 const plane = new THREE.Mesh(geometry, shaderMaterial);
 scene.add(plane);

 // MOUSE INTERACTION STATE
 let targetRotationX = 0;
 let targetRotationY = 0;
 const windowHalfX = window.innerWidth / 2;
 const windowHalfY = window.innerHeight / 2;

 const onMouseMove = (event: MouseEvent) => {
 // For shader
 const rect = container.getBoundingClientRect();
 uniforms.uMouse.value.x = (event.clientX - rect.left) / rect.width;
 uniforms.uMouse.value.y = 1.0 - ((event.clientY - rect.top) / rect.height);

 // For object tilt
 targetRotationX = (event.clientY - windowHalfY) * 0.0005;
 targetRotationY = (event.clientX - windowHalfX) * 0.0005;
 };

 window.addEventListener("mousemove", onMouseMove);

 // RESIZE HANDLER
 const onResize = () => {
 camera.aspect = container.clientWidth / container.clientHeight;
 camera.updateProjectionMatrix();
 renderer.setSize(container.clientWidth, container.clientHeight);
 uniforms.uResolution.value.set(container.clientWidth, container.clientHeight);
 };
 window.addEventListener("resize", onResize);

 // RENDER LOOP
 const clock = new THREE.Clock();
 let animationId: number;

 const animate = () => {
 animationId = requestAnimationFrame(animate);
 uniforms.uTime.value = clock.getElapsedTime();

 // Smooth tilt
 plane.rotation.y += (targetRotationY - plane.rotation.y) * 0.05;
 plane.rotation.x += (targetRotationX - plane.rotation.x) * 0.05;
 
 // Grid warping (infinite scroll effect)
 gridHelper.position.z = (gridHelper.position.z + 0.02) % 1;
 gridHelper.rotation.z = Math.sin(clock.getElapsedTime() * 0.5) * 0.02;

 renderer.render(scene, camera);
 };
 animate();

 // CLEANUP
 return () => {
 cancelAnimationFrame(animationId);
 window.removeEventListener("mousemove", onMouseMove);
 window.removeEventListener("resize", onResize);
 if (container.contains(renderer.domElement)) {
 container.removeChild(renderer.domElement);
 }
 geometry.dispose();
 shaderMaterial.dispose();
 textTexture.dispose();
 renderer.dispose();
 };
 }, []);

 return (
 <div 
 ref={containerRef} 
 className="w-full h-[400px] md:h-[600px] cursor-pointer touch-none"
 onClick={() => {
 const element = document.getElementById('contact');
 if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
 }}
 />
 );
};
