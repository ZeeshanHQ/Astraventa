import fs from 'fs';
import path from 'path';

function processDirectory(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.isDirectory()) {
      processDirectory(fullPath);
    } else if (entry.isFile() && (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css'))) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let originalContent = content;

      // Remove button-specific scaling animations
      // We only want to remove scaling on actual buttons/CTAs, but the user said "any button... like os py mouse cursor jany py animate nh ho na pop up na hily"
      // Let's remove hover:scale-105, hover:scale-110, active:scale-95, group-hover:scale-105, group-hover:scale-110, hover:-translate-y-1, hover:-translate-y-2
      content = content.replace(/hover:scale-\[?\d+\.?\d*\]?/g, '');
      content = content.replace(/active:scale-\d+/g, '');
      content = content.replace(/group-hover:scale-\[?\d+\.?\d*\]?/g, '');
      content = content.replace(/hover:-translate-y-\d+/g, '');
      content = content.replace(/group-hover:-translate-y-\d+/g, '');
      content = content.replace(/group-hover:translate-x-\d+/g, '');
      
      // Clean up multiple spaces left behind
      content = content.replace(/  +/g, ' ');

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(path.join(process.cwd(), 'src'));
