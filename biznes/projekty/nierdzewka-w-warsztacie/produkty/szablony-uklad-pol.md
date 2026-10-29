# Pakiet „Szablony warsztatu” - lista dokumentów i układ pól

**Status:** pliki gotowe (2026-10-29): `gotowe/szablony/puste/`, `gotowe/szablony/przyklady/`, instrukcja `gotowe/szablony/00-Instrukcja-szablony-warsztatu.pdf`. Generator: `zrodla/build_szablony.py`.
**Cena:** 179 zł (8 dokumentów) · **Format:** Word (.docx) + Excel (.xlsx) + PDF instrukcji · **Każdy dokument:** wersja pusta + przykład wypełniony (fikcyjne dane, wyraźnie oznaczone „PRZYKŁAD”).

**Zasady (widoczne też na stronie oferty):**
- Układ i pola są nasze - **nie kopiujemy treści norm** (PN-EN ISO są chronione prawem autorskim i płatne). W dokumentach są tylko odwołania do numerów norm.
- **WPS bez WPQR nie jest kwalifikowaną technologią.** Szablon WPS ma pole „Podstawa kwalifikacji (nr WPQR / inne)” i ostrzeżenie w instrukcji.
- Wymagania konkretnego zamawiającego mają pierwszeństwo - instrukcja mówi, jak dopasować dokument.
- Właściciel sprawdza merytorykę każdego dokumentu przed sprzedażą `[[SPRAWDZA WŁAŚCICIEL]]`.

---

## 1. WPS - instrukcja technologiczna spawania (TIG 141) - .docx
Odwołanie: układ zgodny z zakresem informacji wymaganym przez PN-EN ISO 15609-1 (bez treści normy).
- **Nagłówek:** nr WPS, rewizja, data, wytwórca (nazwa, adres), podstawa kwalifikacji (nr WPQR / inne), miejsce spawania (warsztat / montaż)
- **Złącze:** rodzaj złącza i spoiny, szkic złącza (pole na rysunek: ukosowanie, szczelina, grubości), kolejność ściegów (szkic)
- **Materiał podstawowy:** gatunek (np. 1.4307 / 304L, 1.4404 / 316L), grupa materiałowa, grubość ścianki - zakres, średnica zewnętrzna - zakres
- **Proces i pozycje:** proces (141), pozycje spawania (PA, PC, PH, PF...), technika (prosta / zakosowa)
- **Spoiwo:** oznaczenie, średnica, producent (opcjonalnie)
- **Gazy:** osłonowy (oznaczenie, przepływ l/min), formujący (oznaczenie, przepływ, czas przedmuchu), dopuszczalny tlen resztkowy (ppm) - jeśli wymaga klient
- **Elektroda wolframowa:** rodzaj, średnica, kąt zaostrzenia
- **Parametry (tabela na ścieg):** ścieg nr | średnica spoiwa | prąd [A] | napięcie [V] | rodzaj prądu/biegunowość | prędkość spawania [cm/min] | energia liniowa [kJ/mm]
- **Ciepło:** temperatura podgrzania wstępnego, maks. temperatura międzyściegowa
- **Obróbka po spawaniu:** czyszczenie, trawienie, pasywacja (metoda)
- **Podpisy:** sporządził, zatwierdził (koordynator spawania), data

## 2. Dziennik spawania - .xlsx
- **Nagłówek:** zlecenie / obiekt, zamawiający, nr rysunku, okres prowadzenia
- **Wiersz = złącze:** lp. | data | nr złącza (wg rysunku/izometrii) | średnica × grubość | materiał | nr WPS | spawacz (imię i nazwisko / znak) | nr uprawnień spawacza i ważność | nr wytopu / atestu materiału | nr partii spoiwa | gaz formujący (tak/nie) | wynik VT (OK / nOK, nr protokołu) | inne badania (PT, RT...) | uwagi
- Zakładka 2: lista spawaczy (nazwisko, znak, nr świadectwa, zakres, data ważności - z automatycznym kolorem, gdy kończy się ważność)

## 3. Protokół badań wizualnych spoin (VT) - .docx
Odwołanie: badanie wg PN-EN ISO 17637, kryteria akceptacji wg PN-EN ISO 5817 (poziom wpisuje się z wymagań klienta).
- **Nagłówek:** nr protokołu, data, zlecenie, obiekt, zamawiający, nr rysunku
- **Warunki badania:** oświetlenie [lx], dostęp (bezpośredni / pośredni), narzędzia (lupa, spoinomierz, endoskop), stan powierzchni
- **Kryteria:** norma kryteriów, poziom jakości (B / C / D), wymagania dodatkowe klienta (np. kolor nalotu w grani)
- **Tabela:** nr złącza | wymiar | WPS | spawacz | lico: wynik | grań: wynik (jeśli dostępna) | niezgodności (opis / kod) | ocena (OK / nOK)
- **Podpisy:** badający (imię, nazwisko, kwalifikacje), przedstawiciel zamawiającego (opcjonalnie)

## 4. Protokół próby szczelności / ciśnieniowej - .docx
- **Nagłówek:** nr protokołu, data, obiekt, odcinek / nr linii, zamawiający
- **Parametry:** medium próby (woda / powietrze / azot), ciśnienie robocze, ciśnienie próby, czas utrzymania, temperatura medium
- **Aparatura:** manometr (nr, zakres, klasa, data legalizacji/wzorcowania)
- **Przebieg (tabela):** godzina | ciśnienie | uwagi
- **Wynik:** spadek ciśnienia, nieszczelności (tak/nie, miejsce), ocena: pozytywna / negatywna
- **Ostrzeżenie w instrukcji:** próby ciśnieniowe medium ściśliwym niosą ryzyko - stosuj procedury BHP i wymagania zamawiającego/UDT, jeśli dotyczy
- **Podpisy:** wykonawca, przedstawiciel zamawiającego

## 5. Protokół odbioru i przekazania instalacji - .docx
- Strony (wykonawca, zamawiający), przedmiot odbioru, zakres, nr umowy/zamówienia, data
- Lista przekazanej dokumentacji (checkboxy): WPS, dziennik spawania, protokoły VT, protokoły prób, atesty, rysunki powykonawcze, instrukcje
- Stwierdzone usterki i termin usunięcia
- Decyzja: odbiór bez uwag / z uwagami / odmowa
- Podpisy obu stron

## 6. Rejestr atestów materiałowych (świadectwa 3.1) - .xlsx
- lp. | materiał (rura / kształtka / blacha / spoiwo) | gatunek | wymiar | producent / dostawca | nr wytopu | nr świadectwa | typ (2.2 / 3.1 / 3.2) | data | gdzie użyto (nr złączy / odcinek) | link do skanu
- Filtr po nr wytopu - szybkie wskazanie, z którego wytopu jest dane złącze

## 7. Checklista instalacji higienicznej (przemysł spożywczy) - .docx
Odwołania ogólne: zasady higienicznego projektowania (np. wytyczne EHEDG), materiały do kontaktu z żywnością (rozporządzenie (WE) 1935/2004) - bez kopiowania treści.
- Materiał i atesty, spadki i opróżnialność, martwe strefy (długość odgałęzień), wnętrze spoin (grań, kolor nalotu), chropowatość powierzchni (jeśli wymagana), złącza i uszczelki, podpory i mocowania (czyszczalność), mycie CIP (dostęp, prędkość), oznakowanie
- Każdy punkt: spełnione / nie / nie dotyczy + uwagi

## 8. Plan spawania i badań - .xlsx
(zamawiający w przetargach wymagają go przed rozpoczęciem prac - `02-rynek.md`)
- Zlecenie, normy i wymagania klienta, poziom jakości
- Tabela: grupa złączy | liczba | WPS | kwalifikacje spawaczy | badania (VT 100% / PT x% / RT x%) | kryteria | kto bada | termin
- Lista dokumentów do przekazania przy odbiorze

## Instrukcja (PDF, 4-6 s.)
- Jak wypełnić każdy dokument (z odniesieniem do przykładu), co sprawdzić w wymaganiach klienta, czego szablony nie zastępują (WPQR, uprawnienia, badania jednostki), jak dopasować logo i dane firmy.
