# Studio kreatywne AI

AI robi całą robotę, a Ty na końcu dopinasz wszystko do swojego stylu.

**Co robi:** opakowanie oferty, teksty reklamowe i opisy, grafiki i miniatury, scenariusz i montaż wideo, pierwsza wersja landing page / strony sprzedażowej.

## Jak używać (Claude Code)

1. Raz: uzupełnij `studio/STYL.md` (wszystko oznaczone `[[...]]`).
2. Zlecenie: `/studio Spawanie orbitalne rurociągów 316L dla mleczarni, chcę wszystko: reklamy FB, miniatury, rolkę i landing`
3. Wynik trafia do `studio/projekty/<data>-<nazwa>/`. Zacznij od pliku `DO-DOPIECIA.md`.
4. Poprawiasz pliki ręcznie (szukaj `[[`).
5. `/studio-ucz` – agent porównuje Twoje poprawki z wersją AI i zapisuje reguły w `STYL.md`. Z każdym projektem poprawiasz mniej.

Możesz też napisać zwyczajnie: „użyj agenta studio-kreatywne i zrób ...”.

## Pliki

| Ścieżka | Co to jest |
|---|---|
| `.claude/agents/studio-kreatywne.md` | agent (cała wiedza i proces) |
| `.claude/commands/studio.md`, `studio-ucz.md` | polecenia `/studio` i `/studio-ucz` |
| `studio/STYL.md` | Twój styl: głos, kolory, słowa zakazane, wnioski z poprawek |
| `studio/szablony/` | brief i szablon grafik (miniatura YT, post, story, OG) |
| `studio/narzedzia/render.cjs` | HTML → PNG oraz zrzuty landing page (desktop/mobile) |

Wideo: wrzuć surowe klipy do `04-wideo/surowe/` (`01.mp4`, `02.mp4`…) zgodnie z listą ujęć i uruchom `bash montaz.sh`. Bez klipów agent robi animatik ze slajdów grafik.
