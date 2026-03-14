import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  console.log('Starting puppeteer to generate playbook using Edge...');
  
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    headless: 'new'
  });
  
  const page = await browser.newPage();
  
  const fileUrl = `file://${path.join(__dirname, 'public/playbook.html').replace(/\\/g, '/')}`;
  console.log(`Loading URL: ${fileUrl}`);

  await page.goto(fileUrl, { waitUntil: 'networkidle0' });

  const pdfPath = path.join(__dirname, 'public/astraventa-playbook.pdf');
  await page.pdf({
    path: pdfPath,
    format: 'Letter',
    printBackground: true,
    margin: { top: '0', right: '0', bottom: '0', left: '0' }
  });

  console.log(`PDF generated perfectly at ${pdfPath}`);
  await browser.close();
})();
