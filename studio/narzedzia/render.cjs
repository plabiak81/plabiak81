#!/usr/bin/env node
// Renderuje grafiki i podglądy stron do PNG (Playwright + Chromium).
//
//   node render.cjs plik.html katalog_wyj           -> każdy element [data-kadr="nazwa"] zapisuje jako nazwa.png
//   node render.cjs plik.html katalog_wyj --strona  -> zrzuty całej strony: desktop.png (1440) i mobile.png (390)

const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

async function main() {
  const [plik, katalog, tryb] = process.argv.slice(2);
  if (!plik || !katalog) {
    console.error('Użycie: node render.cjs plik.html katalog_wyj [--strona]');
    process.exit(1);
  }
  fs.mkdirSync(katalog, { recursive: true });
  const url = 'file://' + path.resolve(plik);
  const browser = await chromium.launch();

  if (tryb === '--strona') {
    for (const [nazwa, width, height] of [['desktop', 1440, 900], ['mobile', 390, 844]]) {
      const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
      await page.goto(url, { waitUntil: 'networkidle' });
      const scroll = await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth);
      if (scroll) console.warn(`UWAGA: poziomy scroll na ${nazwa} (${width}px)`);
      const out = path.join(katalog, nazwa + '.png');
      await page.screenshot({ path: out, fullPage: true });
      console.log(out);
      await page.close();
    }
  } else {
    const page = await browser.newPage({ viewport: { width: 2000, height: 2000 }, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const kadry = await page.$$('[data-kadr]');
    if (kadry.length === 0) {
      const out = path.join(katalog, path.basename(plik, '.html') + '.png');
      await page.screenshot({ path: out, fullPage: true });
      console.log(out);
    }
    for (const kadr of kadry) {
      const nazwa = await kadr.getAttribute('data-kadr');
      const out = path.join(katalog, nazwa + '.png');
      await kadr.screenshot({ path: out });
      console.log(out);
    }
  }
  await browser.close();
}

main().catch((e) => { console.error(e); process.exit(1); });
