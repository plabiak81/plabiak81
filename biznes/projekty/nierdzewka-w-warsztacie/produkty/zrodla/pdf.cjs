// Renderuje HTML do PDF A4 (Chromium/Playwright). Użycie: node pdf.cjs wej.html wyj.pdf [--numery]
let pw; try { pw = require('playwright'); } catch (e) { pw = require('/opt/node-tools/node_modules/playwright'); }
const path = require('path');
(async () => {
  const [wej, wyj, opcja] = process.argv.slice(2);
  const b = await pw.chromium.launch();
  const p = await b.newPage();
  await p.goto('file://' + path.resolve(wej), { waitUntil: 'networkidle' });
  const numery = opcja === '--numery';
  await p.pdf({ path: wyj, format: 'A4', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: numery,
    headerTemplate: '<span></span>',
    footerTemplate: numery ? '<div style="font-size:7pt;color:#5b6776;width:100%;text-align:center">Nierdzewka bez przebarwień · strona <span class="pageNumber"></span> z <span class="totalPages"></span></div>' : '<span></span>' });
  await b.close();
  console.log(wyj);
})();
