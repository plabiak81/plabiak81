---
description: Zaimportuj grafiki projektu do Canvy jako edytowalny projekt (po publikacji na GitHub Pages)
argument-hint: [folder projektu w studio/projekty/ - domyślnie najnowszy]
---

Projekt: $ARGUMENTS (jeśli pusty - weź najnowszy folder w `studio/projekty/`).

1. Adres grafik: `https://plabiak81.github.io/plabiak81/studio/projekty/<projekt>/03-grafiki/grafiki.html`. Sprawdź go przez `curl -sI`. Jeśli nie zwraca 200, napisz, że grafiki nie są jeszcze opublikowane (trzeba scalić zmiany do `main` i poczekać na GitHub Pages), i zakończ.
2. Załaduj `mcp__Canva__import-design-from-url` przez ToolSearch i zaimportuj ten adres z nazwą „Studio - <projekt>”. Nie wysyłaj plików na żadne inne hostingi.
3. Dopisz link do edycji i `design_id` w `<projekt>/03-grafiki/CANVA.md` (sekcja „Import”), a także do kopii w `_wersja-ai/03-grafiki/CANVA.md`, żeby `/studio-ucz` mógł później porównać poprawki.
4. Obejrzyj import (`mcp__Canva__read-design` z miniaturami; jeśli miniatur jeszcze nie ma, spróbuj ponownie po chwili) i porównaj z PNG. Obrazki z HTML (logo, zdjęcia) często się nie importują, a font bywa podmieniony. Każdą taką różnicę zapisz w `CANVA.md` i dopisz do `DO-DOPIECIA.md` w sekcji „Warto” (np. „wstaw logo z Brand Kitu”). Nie pobieraj eksportów przez curl - host eksportu Canvy jest zablokowany w tym środowisku.
5. Podaj link do edycji w Canvie.
