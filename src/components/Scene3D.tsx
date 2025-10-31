import { Canvas } from "@react-three/fiber";
import { Robot } from "./Robot";

interface Scene3DProps {
  mousePosition: { x: number; y: number };
}

export const Scene3D = ({ mousePosition }: Scene3DProps) => {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: "100%", height: "100%" }}
    >
      {/* Basic Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      
      {/* Robot */}
      <Robot mousePosition={mousePosition} />
    </Canvas>
  );
};
