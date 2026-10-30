# Biznes online z agentem AI

Agent `biznes-online` buduje biznes internetowy etapami: Ty podejmujesz kluczowe decyzje i robisz to, czego AI nie może (konta, płatności, podpisy, rozmowy), resztę robi agent.

**Etapy:** 1. pomysły → 2. badanie rynku → 3. model i liczby → 4. oferta i materiały (przez studio kreatywne) → 5. strona/MVP → 6. formalności → 7. plan pozyskania klientów → 8. start → 9. cotygodniowy rozwój.

## Jak używać (Claude Code)

1. Raz: uzupełnij `biznes/PROFIL.md` (wszystko oznaczone `[[...]]`) - szczególnie czas, budżet i cel.
2. Start: `/biznes` (agent sam zaproponuje pomysły) albo `/biznes Kurs online spawania TIG stali nierdzewnej dla początkujących`.
3. Agent zatrzymuje się na decyzjach (wybór pomysłu, cennik, kanały) - wybierasz wariant, a on jedzie dalej.
4. Kontynuacja w kolejnych sesjach: `/biznes kontynuuj` - stan projektu jest w `STAN.md`.
5. Co tydzień po starcie: `/biznes-tydzien 120 odwiedzin, 4 zapytania, 1 sprzedaż 490 zł`.

Twoja lista zadań jest zawsze w `biznes/projekty/<nazwa>/ZADANIA-WLASCICIELA.md`.

## Bezpieczniki

Agent nie wydaje pieniędzy, nie zakłada kont, nie publikuje i nie wysyła wiadomości bez Twojej zgody - przygotowuje to jako zadanie z instrukcją i kosztem. Nie obiecuje zarobków i nie zmyśla opinii ani liczb; dane z rynku podaje ze źródłami. Dokumenty prawne to wzory do sprawdzenia przez prawnika/księgowego.

## Pliki

| Ścieżka | Co to jest |
|---|---|
| `.claude/agents/biznes-online.md` | agent (proces, zasady, etapy) |
| `.claude/commands/biznes.md`, `biznes-tydzien.md` | polecenia `/biznes` i `/biznes-tydzien` |
| `biznes/PROFIL.md` | Twój profil: umiejętności, czas, budżet, cele |
| `biznes/projekty/<nazwa>/` | dokumenty, kalkulator, strona i metryki danego biznesu |
