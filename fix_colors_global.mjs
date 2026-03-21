import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, 'src');

function walk(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(walk(full));
    else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts') || entry.name.endsWith('.css')) results.push(full);
  }
  return results;
}

const files = walk(srcDir);
let totalChanges = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // --- Replace accent (cyan) → primary (indigo) ---
  content = content.replaceAll('text-accent', 'text-primary');
  content = content.replaceAll('bg-accent', 'bg-primary');
  content = content.replaceAll('border-accent', 'border-primary');
  content = content.replaceAll('ring-accent', 'ring-primary');
  content = content.replaceAll('hover:text-accent', 'hover:text-primary');
  content = content.replaceAll('group-hover:text-accent', 'group-hover:text-primary');
  content = content.replaceAll('focus:ring-accent', 'focus:ring-primary');
  content = content.replaceAll('shadow-accent', 'shadow-primary');

  // --- Replace any cyan Tailwind utility classes ---
  const cyanReplacements = [
    ['text-cyan-', 'text-primary '],
    ['bg-cyan-', 'bg-primary/'],
    ['border-cyan-', 'border-primary/'],
    ['ring-cyan-', 'ring-primary/'],
    ['hover:bg-cyan-', 'hover:bg-primary/'],
    ['hover:text-cyan-', 'hover:text-primary'],
    ['focus:ring-cyan-', 'focus:ring-primary/'],
    ['focus:border-cyan-', 'focus:border-primary'],
    ['from-cyan-', 'from-primary/'],
    ['via-cyan-', 'via-primary/'],
    ['to-cyan-', 'to-primary/'],
  ];
  // Use regex to handle numbers after cyan-
  content = content.replace(/text-cyan-\d{2,3}/g, 'text-primary');
  content = content.replace(/bg-cyan-\d{2,3}(?:\/\d+)?/g, 'bg-primary/10');
  content = content.replace(/border-cyan-\d{2,3}(?:\/\d+)?/g, 'border-primary/20');
  content = content.replace(/ring-cyan-\d{2,3}(?:\/\d+)?/g, 'ring-primary/30');
  content = content.replace(/hover:bg-cyan-\d{2,3}/g, 'hover:bg-primary/20');
  content = content.replace(/hover:text-cyan-\d{2,3}/g, 'hover:text-primary');
  content = content.replace(/focus:ring-cyan-\d{2,3}(?:\/\d+)?/g, 'focus:ring-primary/20');
  content = content.replace(/focus:border-cyan-\d{2,3}/g, 'focus:border-primary');
  content = content.replace(/from-cyan-\d{2,3}(?:\/\d+)?/g, 'from-primary/10');
  content = content.replace(/to-cyan-\d{2,3}(?:\/\d+)?/g, 'to-primary/5');
  content = content.replace(/shadow-cyan-\d{2,3}(?:\/\d+)?/g, 'shadow-primary/20');

  // -- Any leftover surgical orange --
  content = content.replaceAll('hsl(var(--surgical-orange))', 'hsl(var(--primary))');
  content = content.replaceAll('[hsl(var(--surgical-orange))]', '[hsl(var(--primary))]');
  content = content.replaceAll('var(--surgical-orange)', 'var(--primary)');

  if (content !== original) {
    fs.writeFileSync(file, content);
    totalChanges++;
    console.log('Updated: ' + path.relative(srcDir, file));
  }
}

console.log(`\nDone. ${totalChanges} files updated.`);
