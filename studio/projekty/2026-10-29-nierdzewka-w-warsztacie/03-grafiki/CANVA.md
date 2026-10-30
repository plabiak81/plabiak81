# Canva - status grafik (2026-10-29)

## Co się stało

- Folder projektu w Canvie: **utworzony**. Nazwa: „Studio - 2026-10-29 nierdzewka-w-warsztacie”
  https://www.canva.com/folder/FAHZbCuwoAk
- `generate-design` z Brand Kitem `kAHP7xeBpvQ` (ze `STYL.md`) **nie zadziałał**. Błąd: `Design generation is not enabled in your team` (Request ID: a524d4051f5b8227-IAD). To ten sam błąd co w projekcie `2026-10-29-rurociagi-316l-mleczarnie`.
- Generowania bez Brand Kitu nie użyłem. Zlecenie wymagało Brand Kitu, a projekt bez niego trzeba by i tak przerabiać na kolory marki.
- **Folder w Canvie jest pusty.** Nie ma linków do edycji ani `design_id`.

## Plan B - wykonany

Grafiki zrobiłem w HTML/CSS (kolory ze `STYL.md`, font Inter) i wyrenderowałem do PNG:
- źródło: `grafiki.html`
- wynik: `png/*.png`

Przerenderowanie po zmianie tekstu (z katalogu repozytorium):
```
node studio/narzedzia/render.cjs studio/projekty/2026-10-29-nierdzewka-w-warsztacie/03-grafiki/grafiki.html studio/projekty/2026-10-29-nierdzewka-w-warsztacie/03-grafiki/png
```

Na grafikach nie ma zdjęć ani obrazów z AI. Spoina na okładce i dokumenty na postach to rysunki (SVG/CSS). Nie udają zdjęć realizacji.

## Lista grafik

| Plik | Format | Link Canva | design_id | Tekst na grafice (dokładny) | Do czego |
|---|---|---|---|---|---|
| `png/post-1-kolory-nalotu.png` | 1080×1080 | - | - | „TIG 141 · stal 304 / 316L” / „Kolor spoiny mówi, ile tlenu było w gazie.” / skala 1-10 / „← srebrny: formowanie działa” / „szary: wycinasz →” / „Darmowa ściąga A4 →” / „MEGA-SPAW · od Instal-tig” | post FB nr 1 (magnes) |
| `png/post-2-papiery.png` | 1080×1080 | - | - | „Dla warsztatów pracujących dla przemysłu” / „Klient prosi o WPS i dziennik spawania?” / dokumenty: „WPS · TIG 141”, „Protokół VT”, „Dziennik spawania”, „PRZYKŁAD” / „8 dokumentów · Word i Excel z przykładami wypełnienia” / znak | posty FB nr 3 i 5, LinkedIn |
| `png/post-3-zelazo.png` | 1080×1080 | - | - | „Stal 304 / 316L w warsztacie” / „Nierdzewka rdzewieje od czarnej stali.” / „3 źródła żelaza, które widzę najczęściej:” / „1 Szczotka ze stali węglowej - jedna „do wszystkiego” wystarczy” / „2 Tarcza po czarnej stali - to samo z pilnikiem i szlifierką” / „3 Stół, stojak, widły, zawiesie - plus opiłki z cięcia czarnej obok” / „Osobne narzędzia tylko do nierdzewki.” / znak | post FB nr 2 (czysta wartość) |
| `png/okladka-poradnika-a4.png` | 1240×1754 (A4, 150 dpi) | - | - | „MEGA-SPAW · od Instal-tig” / „Poradnik PDF” / „Nierdzewka bez przebarwień” / „Spawanie TIG stali 304 i 316L: przygotowanie, formowanie grani, kolory nalotu, czyszczenie i pasywacja.” / „Poradnik + 6 ściąg A4 do warsztatu” / „TIG 141 · stal austenityczna 304 / 316L” / logo Instal-tig | 1. strona PDF, strona oferty |
| `png/mockup-sciaga-kolory-nalotu.png` | 1080×1080 | - | - | „ZA DARMO” / arkusz: 10 poziomów z ppm jak na `sciaga-kolory-nalotu.html` / „Kolory nalotu na spoinie” / „Ściąga A4 do wydruku · 10 odcieni · co poprawić” / znak | sekcja #sciaga, posty, e-mail |
| `png/og-1200x630.png` | 1200×630 | - | - | „MEGA-SPAW · od Instal-tig” / „Papiery do spawania nierdzewki, o które pyta klient z przemysłu.” / „8 szablonów w Wordzie i Excelu · 179 zł” / „+ poradnik TIG do stali 304 / 316L · 49 zł” | og:image `index.html`, `oferta.html` |
| `png/og-sciaga-1200x630.png` | 1200×630 | - | - | „Kolory nalotu na spoinie: co znaczą i co poprawić.” / skala 10 kolorów / „Darmowa ściąga A4 dla spawacza TIG” / „10 odcieni · przyczyny · co poprawić” | og:image `sciaga-kolory-nalotu.html` |

Kopie na stronie: `biznes/projekty/nierdzewka-w-warsztacie/05-strona/img/` (`og-1200x630.png`, `og-sciaga-1200x630.png`, `okladka-poradnika-a4.jpg` 620 px, `mockup-sciaga-kolory-nalotu.jpg` 800 px).

## Jak przenieść do Canvy

1. **Najlepiej:** włącz generowanie projektów (Magic Design / AI) dla zespołu w ustawieniach Canvy. Wtedy przy następnym zleceniu agent zrobi te grafiki z Brand Kitem i da linki do edycji.
2. **Od razu:** wrzuć PNG z `png/` do folderu https://www.canva.com/folder/FAHZbCuwoAk i użyj ich jako podkładu. Teksty dopisujesz w Canvie fontem z Brand Kitu.
