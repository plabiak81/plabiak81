# Studio kreatywne AI

AI robi całą robotę, a Ty na końcu dopinasz wszystko do swojego stylu.

**Co robi:** opakowanie oferty, teksty reklamowe i opisy, grafiki i miniatury w Canvie (z Twoim Brand Kitem), scenariusz i montaż wideo, pierwsza wersja landing page / strony sprzedażowej.

## Jak używać (Claude Code)

1. Raz: uzupełnij `studio/STYL.md` (wszystko oznaczone `[[...]]`).
2. Zlecenie: `/studio Spawanie orbitalne rurociągów 316L dla mleczarni, chcę wszystko: reklamy FB, miniatury, rolkę i landing`
3. Wynik trafia do `studio/projekty/<data>-<nazwa>/`, a grafiki - do folderu projektu w Twojej Canvie (linki w `03-grafiki/CANVA.md`). Zacznij od pliku `DO-DOPIECIA.md`.
4. Poprawiasz teksty w plikach (szukaj `[[`), a grafiki bezpośrednio w Canvie.
5. `/studio-ucz` – agent porównuje Twoje poprawki z wersją AI i zapisuje reguły w `STYL.md`. Z każdym projektem poprawiasz mniej.

Możesz też napisać zwyczajnie: „użyj agenta studio-kreatywne i zrób ...”.

## Pliki

| Ścieżka | Co to jest |
|---|---|
| `.claude/agents/studio-kreatywne.md` | agent (cała wiedza i proces) |
| `.claude/commands/studio.md`, `studio-ucz.md` | polecenia `/studio` i `/studio-ucz` |
| `studio/STYL.md` | Twój styl: głos, kolory, słowa zakazane, wnioski z poprawek |
| `studio/szablony/` | brief i zapasowy szablon grafik HTML (gdy Canva jest niedostępna) |
| `studio/narzedzia/render.cjs` | zrzuty landing page (desktop/mobile) oraz HTML → PNG w planie B |

Wideo: wrzuć surowe klipy do `04-wideo/surowe/` (`01.mp4`, `02.mp4`…) zgodnie z listą ujęć i uruchom `bash montaz.sh`. Bez klipów agent robi animatik ze slajdów grafik.
