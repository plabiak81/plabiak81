# Nierdzewka w warsztacie

**Etap:** 7 zamknięty → przygotowanie produktów przed etapem 8 (start) · **Ostatnia aktualizacja:** 2026-10-29

## W jednym zdaniu
Pakiet 8 edytowalnych szablonów dokumentacji spawalniczej dla małych warsztatów (179 zł, główny produkt) i poradnik PDF ze ściągami TIG do stali nierdzewnej (49 zł, wejście), komplet 199 zł. Sprzedaż online w ramach JDG Instal-tig, bez twarzy i bez wysyłek.

## Decyzje
- 2026-10-29: wybrany wariant A z etapu 1 - poradnik PDF + pakiet szablonów (#2 + #3). Dlaczego: najtańszy test, luka na rynku, praktyka właściciela, sprzedaż automatyczna.
- 2026-10-29: folder projektu: `biznes/projekty/nierdzewka-w-warsztacie/` (wcześniej `stal-online`).
- 2026-10-29: werdykt etapu 2 - IDZIEMY: szablony = główny produkt, poradnik = wejście i lista e-mail; nisza mała.
- 2026-10-29: **cennik wariant B** - poradnik 49 zł, szablony 179 zł, komplet 199 zł (decyzja właściciela; niższy próg zakupu). Konsekwencja: cel 3 000 zł/mies. = ok. 30 zamówień/mies., reklama nie spina się na pierwszym zakupie.
- 2026-10-29: forma - sprzedaż w ramach **JDG Instal-tig zwolnionej podmiotowo z VAT**, z księgową → ceny są kwotami końcowymi (bez VAT).
- 2026-10-29: studio kreatywne niedostępne w tej sesji (brak narzędzia do uruchomienia subagenta) → minimum oferty zrobione przez AI (`04-oferta/README.md`), zlecenie dla `/studio` przygotowane.
- 2026-10-29: na start przedsprzedaż: zamówienie e-mailem + przelew; bramka płatności później.

- 2026-10-29: etap 7 - reklama **R0 (0 zł)**; kanały: właściciel napisał „Szukaj też” → **potwierdzone przez właściciela („OK”, 2026-10-29):** K-min (grupy FB + wiadomości do 5-15 warsztatów + SEO) + dodatkowe darmowe kanały z `07-plan-klienci.md` sekcja 1a (artykuł w magazynie STAL/dlaProdukcji.pl, ośrodki szkolenia spawaczy, hurtownie z QR, SEO z wymagań przetargów; później Shorts i targi Kielce 03.2027).
- 2026-10-29: studio kreatywne równolegle robi grafiki i poprawki tekstów w `05-strona/*.html` - AI nie edytuje tych plików w tej turze.
- 2026-10-29: powstały pełne wersje robocze produktów (`produkty/gotowe/`): poradnik 17 s. + 6 ściąg (PDF), 8 szablonów w wersji pustej i przykładowej (DOCX/XLSX) + instrukcja PDF + 3 paczki ZIP.

## Odpowiedzi właściciela (2026-10-29)
- Grupy spawaczy na FB/forach: 1-2 → plan dołączenia do 6-8 grup + elektroda.pl (07-plan-klienci.md).
- Warsztaty/znajomi do wiadomości: 5-15.
- Własne wzory dokumentów: brak → szablony od zera; właściciel sprawdza merytorykę.
- JDG zwolniona z VAT, ma księgową.

## Czeka na właściciela
- Sprawdzenie merytoryki produktów (wszystkie `[[DO SPRAWDZENIA]]`), zdjęcia `[[ZDJĘCIE]]`.
- **Decyzja: gdzie trzymać pliki produktów** - repo `plabiak81/plabiak81` publikuje się na GitHub Pages; `produkty/` (PDF, DOCX, XLSX, ZIP, źródła HTML) jest już w commicie `e45e491` na gałęzi roboczej - nie scalać z główną przed przeniesieniem do prywatnego repo.

## Kluczowe liczby (03-model.py, VAT = 0, cennik B)
- Średnie zamówienie 104,00 zł, marża po prowizji 101,34 zł.
- Koszty stałe ok. 10 zł/mies.; z reklamą 150 zł/mies. próg = ok. 1,6 zamówienia/mies.; budżet 0 zł - każde zamówienie to zysk (minus ewentualna prowizja płatności).
- Cel 3 000 zł/mies. = ok. 30 zamówień/mies. = ok. 1 650 odwiedzin przy konwersji 1,8%.
- 12 mies.: ostrożny ok. 3,5 tys. zł, bazowy ok. 14,4 tys. zł, dobry ok. 37,4 tys. zł przychodu.
- Marża/CAC z reklamy 0,84 → reklama tylko jako test magnesu.

## Co powstało
- `04-oferta/README.md` - obietnica, pakiety, obiekcje, 3 reklamy, lista zdjęć, zlecenie dla studia.
- `produkty/poradnik-spis-tresci.md`, `produkty/szablony-uklad-pol.md` - plan poradnika i układ pól 8 szablonów.
- `05-strona/` - landing, oferta z 3 pakietami i zgodami, darmowa ściąga „Kolory nalotu”, regulamin i polityka prywatności (wzory do sprawdzenia przez prawnika), dziękujemy; `app.js` z konfiguracją (e-mail, formularz, linki płatności). Podgląd: `podglad/<strona>/desktop.png|mobile.png`. Linki wewnętrzne sprawdzone, brak poziomego scrolla, test przycisków zamówienia w przeglądarce OK.
- `06-formalnosci.md` - checklista + 10 pytań do księgowej.
- `produkty/gotowe/` - poradnik PDF (17 s.), 6 ściąg PDF, 8 szablonów puste + przykłady (DOCX/XLSX), instrukcja PDF, paczki `PAKIET-Poradnik.zip`, `PAKIET-Szablony-warsztatu.zip`, `PAKIET-Komplet.zip`; źródła i generatory w `produkty/zrodla/` (`poradnik.html`, `sciagi/`, `instrukcja.html`, `build_szablony.py`, `pdf.cjs`). Podgląd stron: `podglad/produkty/`.
- `07-plan-klienci.md` - kanały, warianty, plan 30/60/90, kalendarz, SEO, wiadomości B2B, cele.

## Założenia (do potwierdzenia)
- **Budżet: 0 zł - nic nie kupujemy** (decyzja właściciela 2026-10-29). Bez domeny (strona na darmowym adresie GitHub Pages), bez płatnych narzędzi, bez reklam. Nie proponować zakupów; szukać darmowych zamienników.
- Zapas do limitu zwolnienia z VAT (240 000 zł, cała JDG) wystarcza - obrót Instal-tig nieznany (pytanie 1 do księgowej).
- Sprzedaż PDF/szablonów nie jest wyłączona ze zwolnienia (art. 113 ust. 13); konsultacji/doradztwa NIE sprzedajemy.
- Zwolnienie z kasy fiskalnej dla treści cyfrowych płatnych przelewem/bramką (§ 2 rozporządzenia) - do potwierdzenia.
- Reklama Meta = import usług - możliwy VAT 23% mimo zwolnienia (pytanie 9).
- Adres e-mail do zamówień: **NIE slawek_21@op.pl** (decyzja właściciela 2026-10-29). Nowy adres - do podania przez właściciela; w plikach `[[E-MAIL DO ZAMÓWIEŃ]]`.
- Liczba stron poradnika: na stronie (index/oferta) jest „ok. 40-60 stron”, a wersja robocza ma 17 s. (po zdjęciach ok. 20-25) - do poprawy w HTML po pracy studia.
- Wartości ppm i strefy akceptacji na ściądze (wg literatury do AWS D18.2) - do sprawdzenia przez właściciela.
- Udział zamówień 60/25/15%, konwersje 1,0/1,8/2,4%, CPC 1,20 zł, prowizja ok. 1,5% + 1,10 zł - szacunki.
- Liczba spawaczy 60-120 tys. i firm metalowych 25-40 tys. - szacunki bez danych GUS.
- Ceny konkurencji (naukaspawania.com, jakspawacodlewy.pl), cytaty z forów - do ręcznego sprawdzenia.

## Następne kroki
- [ ] Właściciel: prywatne repo na produkty; nie scalać gałęzi z `produkty/` do gałęzi głównej przed przeniesieniem
- [ ] Właściciel: sprawdzenie poradnika, ściąg i szablonów; zdjęcia; pytania do księgowej; dane do regulaminu
- [ ] AI: po uwagach właściciela - poprawki treści i ponowne generowanie (`python3 produkty/zrodla/build_szablony.py`, `node produkty/zrodla/pdf.cjs ...`); 3 artykuły SEO, posty do grup, maile do redakcji STAL i ośrodków szkolenia, e-mail potwierdzający zamówienie; poprawka liczby stron poradnika na stronie (po zakończeniu pracy studia); potem etap 8 (`08-start.md`, `metryki.md`)
