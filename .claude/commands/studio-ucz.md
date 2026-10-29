---
description: Naucz studio Twojego stylu - porównaj Twoje poprawki z wersją AI i zaktualizuj studio/STYL.md
argument-hint: [folder projektu w studio/projekty/ - domyślnie najnowszy]
---

Projekt: $ARGUMENTS (jeśli pusty - weź najnowszy folder w `studio/projekty/`).

1. Dla każdego pliku w `<projekt>/_wersja-ai/` porównaj go z odpowiadającym plikiem w `<projekt>/` (np. `diff -u` lub `git diff --no-index --word-diff`).
   Grafiki z Canvy: dla każdego projektu z `<projekt>/_wersja-ai/03-grafiki/CANVA.md` odczytaj aktualną wersję przez `mcp__Canva__read-design` (tekst i miniatury; załaduj narzędzie przez ToolSearch, jeśli trzeba). Porównaj tekst z kolumną „tekst na grafice” i obejrzyj miniaturę - co właściciel zmienił w treści, kolorach, układzie, zdjęciach.
2. Wyciągnij wzorce z poprawek właściciela, a nie pojedyncze zmiany. Szukaj m.in.: słów, które usuwa lub zamienia; długości zdań i akapitów; formy zwracania się; poziomu technicznego; tego, co dodaje (dowody, liczby, konkrety); zmian w kolorach, fontach, układzie grafik i strony; kolejności sekcji; CTA.
3. Pokaż użytkownikowi listę 3-10 proponowanych reguł w formie „Zamiast X → Y, bo ..." i zapytaj, które zapisać.
4. Zatwierdzone reguły:
   - jeśli dotyczą stałych cech (kolory, słowa zakazane, forma zwracania się) - wpisz je w odpowiednią sekcję `studio/STYL.md`,
   - pozostałe dopisz w sekcji „Wnioski z poprawek" jako `- RRRR-MM-DD (<projekt>): <reguła>`.
5. Nie usuwaj istniejących reguł bez zgody. Jeśli nowa reguła przeczy starej - zapytaj, która obowiązuje.
