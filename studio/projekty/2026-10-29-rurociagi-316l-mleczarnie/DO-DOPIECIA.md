# Do dopięcia - Rurociągi 316L dla mleczarni

> Wszystkie miejsca do uzupełnienia są w plikach oznaczone `[[...]]` - szukaj `[[` w edytorze.

## 5 minut (musisz)

- [ ] **Ceny pakietów** - `[[CENA]]` w `05-landing/index.html` (sekcja `#pakiety`, 3 miejsca) i `01-opakowanie.md` (sekcja 6). Jeśli nie chcesz pokazywać cen, wpisz np. „Wycena po oględzinach".
- [ ] **Dowody w hero i w sekcji realizacji** - `05-landing/index.html`: linia pod przyciskami w hero (`[[DOWÓD: np. X lat / X realizacji w spożywce]]`) i 3 liczby w `#realizacje` (lata, liczba instalacji, metry). Jeśli nie chcesz podawać liczb, usuń blok `.stats`.
- [ ] **Gwarancja** - wpisz liczbę miesięcy `[[X]]` i potwierdź albo usuń 2 pozostałe obietnice (ponowne spawanie utlenionej grani, oględziny bez zobowiązań) - `05-landing/index.html` `#gwarancja` oraz `01-opakowanie.md` sekcja 9.
- [ ] **Potwierdź fakty o firmie** (landing, FAQ i `02-teksty.md`): czy prefabrykujecie we własnym warsztacie, czy robicie projekt wykonawczy sami, zasięg działania, czas reakcji serwisu, jak pokazujecie grań od środka (endoskop / próbka / zdjęcia).
- [ ] **Ra ≤ 0,8 µm** - zdecyduj, czy deklarujecie taką chropowatość (pojawia się w `02-teksty.md` specyfikacja, w poście `post-1080-6-detali.png` jako wymóg branżowy). Jeśli nie - zostaw tylko jako „wymóg, który się przyjmuje", bez obietnicy.
- [ ] **Opinie i certyfikaty** - `05-landing/index.html` `#realizacje`: wpisz 1-3 prawdziwe opinie (za zgodą) i certyfikaty albo usuń te karty. Nic nie zostało zmyślone.
- [ ] **Adres strony** - po publikacji wpisz pełny URL w `<link rel="canonical">` i pełny adres grafiki w `og:image` (`05-landing/index.html`, na górze pliku).

## Warto (podnosi jakość)

- [ ] **Canva**: generowanie projektów jest wyłączone w zespole (błąd: „Design generation is not enabled in your team"). Włącz je w ustawieniach Canvy - przy następnym zleceniu grafiki powstaną od razu z Brand Kitem. Teraz folder projektu w Canvie jest pusty: https://www.canva.com/folder/FAHZY2aTs_I. Szczegóły: `03-grafiki/CANVA.md`.
- [ ] Podmień rysunek rury na prawdziwe zdjęcia w grafikach (`03-grafiki/grafiki.html` - odkomentuj `<img>` w `.tlo`) i na landingu, potem przerenderuj (polecenie w `CANVA.md`).
- [ ] Wybierz 1 z 3 miniatur YT (moja rekomendacja: `miniatura-yt-1-rdza.png` - najmocniejszy ból) i 1 z 3 haków w `04-wideo/scenariusz.md`.
- [ ] Post realizacyjny na LinkedIn (`02-teksty.md`, sekcja 4) - uzupełnij po pierwszej realizacji w mleczarni, którą możesz pokazać.
- [ ] E-mail do zimnych leadów - wpisz swoje imię i nazwisko w podpisie i nazwę zakładu w temacie.
- [ ] Muzyka do rolki: wrzuć `04-wideo/muzyka.mp3` (licencja!) - skrypt sam ją ściszy pod głos.
- [ ] Uzupełnij w `studio/STYL.md`: „Co nas wyróżnia", „Czego NIE robimy", „Zwroty, które lubię", „Dowody" - następne projekty będą wymagały mniej poprawek.
- [ ] Landing nie jest jeszcze podlinkowany ze strony głównej ani z bloga - dodaj link z artykułów o 316L i higienicznych instalacjach.

## Moje założenia (sprawdź, czy się zgadzają)

- Główna obietnica: „Rurociągi 316L, które myją się w CIP do czysta i nie rdzewieją na spoinach". Mechanizm nazwałem „Metoda czystej grani" (4 kroki z Waszego bloga).
- Forma: „Państwo" na landingu, w e-mailach, Google Ads i opisie usługi; „Ty" w rolkach, postach i reklamach social - zgodnie ze `STYL.md`. Post ekspercki na LinkedIn też jest w formie „Ty" - jeśli wolisz „Państwo" w B2B, zmień.
- Zakres działania: cała Polska nie jest obiecana; podałem tylko bazę w Sułowie.
- Spawanie orbitalne, endoskop i certyfikaty NIE są obiecane (nie wiem, czy je macie) - są tylko na liście dowodów do zebrania.
- Pakiety: „Przegląd i modernizacja" / „Rurociąg pod klucz" (wyróżniony) / „Inwestycja z serwisem".
- Wymagania techniczne (EHEDG, (WE) 1935/2004, DIN 11851, PREN, N2/H2) wziąłem z Waszych artykułów na blogu.
- Formularz na landingu otwiera program pocztowy (mailto) - działa na GitHub Pages bez serwera. Jeśli chcesz zbierać zgłoszenia inaczej (Formspree, Google Forms), podmień `<form>`.
- Rolka: wersja A 25,5 s. Animatik jest gotowy; prawdziwy film złoży się sam po wrzuceniu klipów.

## Do zebrania / nagrania

- [ ] **Zdjęcie: grań od środka** - przetnij próbną spoinę z formowaniem wzdłuż osi rury; zdjęcie telefonem z 10 cm, światło z boku (lampa lub okno), tło szare. Obok druga próbka bez formowania - do porównania „przed/po".
- [ ] **Zdjęcie: rurociąg 316L na zakładzie** - plan ogólny, wzdłuż trasy rur, widać spadek i spust; bez ludzi, bez logo klienta (chyba że jest zgoda).
- [ ] **Zdjęcie: spoina po trawieniu i pasywacji** - zbliżenie, równe światło bez odblasku (ustaw telefon lekko pod kątem).
- [ ] **Zdjęcie: cechowanie rury 316L / 1.4404** - detal napisu na rurze.
- [ ] **Klipy do rolki** `04-wideo/surowe/01.mp4` - `06.mp4` - według `04-wideo/lista-ujec.md` (ok. 30 minut nagrywania), potem `bash 04-wideo/montaz.sh`.
- [ ] Liczby: lata na rynku, liczba instalacji, metry rurociągów, realizacje w mleczarniach (za zgodą).
- [ ] 1-3 opinie klientów z imieniem, stanowiskiem i zgodą.
- [ ] Certyfikaty spawaczy / WPS / ISO 3834 - jeśli są (skan lub numer).
