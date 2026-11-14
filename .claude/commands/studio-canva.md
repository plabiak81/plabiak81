---
description: Zaimportuj grafiki projektu do Canvy jako edytowalny projekt (po publikacji na GitHub Pages)
argument-hint: [folder projektu w studio/projekty/ - domyślnie najnowszy]
---

Projekt: $ARGUMENTS (jeśli pusty - weź najnowszy folder w `studio/projekty/`).

1. Adres grafik: `https://plabiak81.github.io/plabiak81/studio/projekty/<projekt>/03-grafiki/grafiki.html`. Sprawdź go przez `curl -sI`. Jeśli nie zwraca 200, napisz, że grafiki nie są jeszcze opublikowane (trzeba scalić zmiany do `main` i poczekać na GitHub Pages), i zakończ.
2. Załaduj `mcp__Canva__import-design-from-url` przez ToolSearch i zaimportuj ten adres z nazwą „Studio - <projekt>”. Nie wysyłaj plików na żadne inne hostingi.
3. Dopisz link do edycji i `design_id` w `<projekt>/03-grafiki/CANVA.md` (sekcja „Import”), a także do kopii w `_wersja-ai/03-grafiki/CANVA.md`, żeby `/studio-ucz` mógł później porównać poprawki.
4. Obejrzyj import (`mcp__Canva__read-design` z miniaturami) i napisz użytkownikowi, czy coś się rozjechało względem PNG.
5. Podaj link do edycji w Canvie.
