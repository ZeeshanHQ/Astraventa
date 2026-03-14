import fs from 'fs';
let content = fs.readFileSync('src/pages/Index.tsx', 'utf8');

content = content.replace(
  '<Button className="h-14 px-8 bg-slate-900 hover:bg-slate-800 text-white rounded-full font-bold shadow-lg transition-all ">',
  '<Button asChild className="h-14 px-8 bg-slate-900 hover:bg-[#2910E5] text-white rounded-full font-bold shadow-lg transition-colors border border-transparent hover:border-white/20" >\n            <a href="/astraventa-playbook.pdf" download="Astraventa_Playbook_2026.pdf">'
);

content = content.replace(
  'Download PDF <ArrowRight className="w-4 h-4 ml-2" />\n        </Button>',
  'Download PDF <ArrowRight className="w-4 h-4 ml-2" />\n          </a>\n        </Button>'
);

fs.writeFileSync('src/pages/Index.tsx', content);
console.log('Fixed Index.tsx');
