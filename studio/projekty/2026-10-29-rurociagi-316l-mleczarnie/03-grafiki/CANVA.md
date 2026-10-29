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

1. Włącz generowanie projektów (AI / Magic Design) dla zespołu w ustawieniach Canvy - wtedy agent zrobi wersje z Brand Kitem przy następnym zleceniu.
2. Albo: wrzuć pliki z `png/` do folderu https://www.canva.com/folder/FAHZY2aTs_I i użyj ich jako tła / podkładu.

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
