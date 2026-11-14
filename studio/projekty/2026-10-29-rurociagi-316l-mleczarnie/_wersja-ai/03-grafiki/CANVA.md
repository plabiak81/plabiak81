# Canva - status grafik (2026-10-29)

## Co się stało

- Brand Kit `kAHP7xeBpvQ` (z `STYL.md`) - znaleziony na koncie, OK.
- Folder projektu w Canvie - **utworzony**: „2026-10-29 Rurociągi 316L dla mleczarni"
  https://www.canva.com/folder/FAHZY2aTs_I
- Generowanie projektów z Brand Kitem (`generate-design`) - **błąd** dla wszystkich 6 prób (3 miniatury YT, post IG 4:5, story, post FB):
  `Design generation is not enabled in your team` (np. Request ID: a521d0319c5d13bc-IAD).
  Narzędzie nie dopuszcza grafiki z Brand Kitem inną drogą, więc nie powstał żaden projekt w Canvie, nie było czego eksportować do PNG.
- **Folder w Canvie jest pusty.**

## Plan B - wykonany

Wszystkie grafiki zrobione jako HTML/CSS i wyrenderowane do PNG:
- źródło: `grafiki.html` (kolory i logo z `STYL.md`, te same co w Brand Kicie),
- wynik: `png/*.png`.

Przerenderowanie po zmianie tekstu (z katalogu repozytorium):

```
node studio/narzedzia/render.cjs studio/projekty/2026-10-29-rurociagi-316l-mleczarnie/03-grafiki/grafiki.html studio/projekty/2026-10-29-rurociagi-316l-mleczarnie/03-grafiki/png
```

## Jak przenieść do Canvy (jeśli chcesz edytować tam)

Generowanie AI w Canvie zablokował administrator zespołu, ale **import z HTML działa** (sprawdzone 2026-11-14). Każdy kadr w `grafiki.html` jest oznaczony jako osobna strona Canvy.

1. Scal PR, żeby `grafiki.html` pojawił się na GitHub Pages:
   https://plabiak81.github.io/plabiak81/studio/projekty/2026-10-29-rurociagi-316l-mleczarnie/03-grafiki/grafiki.html
2. Wpisz `/studio-canva` - agent zaimportuje grafiki jako edytowalny projekt i dopisze tu link.

## Import do Canvy (2026-11-14)

- Projekt: **Studio - 2026-10-29-rurociagi-316l-mleczarnie** (15 stron, jedna na kadr, rozmiary zgodne z PNG)
- Edycja: https://www.canva.com/d/JeclcH2v2oFOCbc
- design_id: `DAHa6_0drIQ`
- Teksty są edytowalne, polskie znaki poprawne.
- **Logo się nie zaimportowało** (na miniaturach puste białe pole, na grafice OG brak). Wstaw je w Canvie z Brand Kitu.
- Font może się różnić od PNG - Canva podstawia własny. Jeśli chcesz, ustaw font z Brand Kitu na wszystkich stronach.

## Lista kadrów

| Plik | Format | Do czego |
|---|---|---|
| `miniatura-yt-1-rdza.png` | 1280×720 | YT - kąt: ból (rdza na spoinie) |
| `miniatura-yt-2-304-czy-316l.png` | 1280×720 | YT - kąt: ciekawość (304 czy 316L) |
| `miniatura-yt-3-zajrzyj.png` | 1280×720 | YT - kąt: dowód (grań od środka) |
| `post-1080x1350-oferta.png` | 1080×1350 | FB/IG/LinkedIn - reklama oferty |
| `post-1080-6-detali.png` | 1080×1080 | FB/LinkedIn - post edukacyjny |
| `story-1080x1920-kalkulator.png` | 1080×1920 | Story - CTA do kalkulatora |
| `og-1200x630.png` | 1200×630 | Grafika OG landingu |
| `baner-linkedin-1584x396.png` | 1584×396 | Tło profilu LinkedIn (lewa część celowo pusta - zasłania ją logo) |
| `wideo-01..07-*.png` | 1080×1920 | Slajdy animatiku + plansza końcowa (04-wideo) |

Rura na grafikach jest rysunkiem CSS (przekrój z granią: czystą / utlenioną). Docelowo podmień na prawdziwe zdjęcia - opis kadrów w `DO-DOPIECIA.md`.
