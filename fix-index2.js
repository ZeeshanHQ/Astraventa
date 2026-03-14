import fs from 'fs';
let content = fs.readFileSync('src/pages/Index.tsx', 'utf8');

content = content.replace(/Download PDF <ArrowRight className="w-4 h-4 ml-2" \/>\s*<\/Button>/g, 'Download PDF <ArrowRight className="w-4 h-4 ml-2" />\n            </a>\n        </Button>');

fs.writeFileSync('src/pages/Index.tsx', content);
console.log('Fixed missing anchor tag in Index.tsx');
