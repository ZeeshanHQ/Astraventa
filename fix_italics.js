import fs from 'fs';

const files = ['AIService.tsx', 'SecurityService.tsx', 'BrandingService.tsx', 'BackendEngineering.tsx', 'AutomationService.tsx', 'AIChatbots.tsx', 'MobileEngineering.tsx', 'UIUXService.tsx', 'WebEngineering.tsx', 'WebAutomation.tsx'];

files.forEach(f => {
    const p = 'src/pages/services/' + f;
    if (!fs.existsSync(p)) return;
    let content = fs.readFileSync(p, 'utf8');

    // Remove italic class
    content = content.replaceAll(' italic', ''); // space before to match class name properly
    content = content.replaceAll('italic ', ''); 
    
    // Fix SVG strokes
    content = content.replaceAll('stroke="hsl(var(--surgical-orange))"', 'stroke="hsl(var(--primary))"');

    fs.writeFileSync(p, content);
    console.log('Updated ' + p);
});
