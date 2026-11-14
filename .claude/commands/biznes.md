---
description: Zbuduj biznes online z agentem - pomysł, rynek, liczby, oferta, strona, formalności, klienci, start
argument-hint: [pomysł lub „kontynuuj” - puste = agent zaproponuje pomysły]
---

Przekaż to zlecenie agentowi `biznes-online` (narzędzie Agent, subagent_type: biznes-online) i poczekaj na wynik:

$ARGUMENTS

Jeśli zlecenie jest puste: gdy w `biznes/projekty/` jest aktywny projekt - każ agentowi kontynuować go od bieżącego etapu; gdy nie ma - każ mu zacząć od etapu 1 (pomysły) na podstawie `biznes/PROFIL.md`.

Po zakończeniu pracy agenta pokaż użytkownikowi: etap biznesu, co powstało, najważniejszą rekomendację, decyzję, na którą agent czeka (z wariantami - użyj AskUserQuestion, jeśli masz to narzędzie), i zadania „Teraz” z `ZADANIA-WLASCICIELA.md`. Gdy użytkownik podejmie decyzję, przekaż ją agentowi (SendMessage, jeśli działa, albo nowe wywołanie z prośbą o kontynuację projektu).
