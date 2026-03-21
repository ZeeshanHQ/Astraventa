import fs from 'fs';

const files = ['MobileEngineering.tsx', 'AIChatbots.tsx', 'AutomationService.tsx', 'UIUXService.tsx', 'WebEngineering.tsx', 'WebAutomation.tsx'];

files.forEach(f => {
    const p = 'src/pages/services/' + f;
    if (!fs.existsSync(p)) return;
    let content = fs.readFileSync(p, 'utf8');

    // Utility classes exact match replacements
    content = content.replaceAll('text-[#FF4400]', 'text-primary');
    content = content.replaceAll('bg-[#FF4400]', 'bg-primary');
    content = content.replaceAll('border-[#FF4400]', 'border-primary');
    content = content.replaceAll('from-[#FF4400]', 'from-primary');
    content = content.replaceAll('via-[#FF4400]', 'via-primary');
    content = content.replaceAll('to-[#FF4400]', 'to-primary');

    content = content.replaceAll('text-[hsl(var(--surgical-orange))]', 'text-primary');
    content = content.replaceAll('bg-[hsl(var(--surgical-orange))]', 'bg-primary');
    content = content.replaceAll('border-[hsl(var(--surgical-orange))]', 'border-primary');
    content = content.replaceAll('from-[hsl(var(--surgical-orange))]', 'from-primary');
    content = content.replaceAll('via-[hsl(var(--surgical-orange))]', 'via-primary');
    content = content.replaceAll('to-[hsl(var(--surgical-orange))]', 'to-primary');
    content = content.replaceAll('[hsl(var(--surgical-orange))]', 'primary');

    // Arbitrary value replacements inline
    content = content.replaceAll('rgba(255,68,0', 'rgba(var(--primary-rgb)');
    content = content.replaceAll('#FF4400', 'hsl(var(--primary))');
    
    // Remove italic class
    content = content.replaceAll(' italic', ''); // space before to match class name properly
    content = content.replaceAll('italic ', ''); 

    fs.writeFileSync(p, content);
    console.log('Updated ' + p);
});
