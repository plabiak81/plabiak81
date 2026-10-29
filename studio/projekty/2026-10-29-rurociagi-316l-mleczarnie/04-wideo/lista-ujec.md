# Lista ujęć - rolka 25 s (wersja A)

> Nagrywasz telefonem, w pionie (9:16), 4K lub 1080p, 30 kl/s. Ok. 30 minut na warsztacie lub na budowie.
> Każde ujęcie nagraj 2-3 razy po 6-8 sekund (skrypt tnie sam). Zapisz jako `surowe/01.mp4` ... `surowe/06.mp4` i uruchom `bash montaz.sh`.
> Światło: dzienne z boku albo lampa warsztatowa z boku - stal ma błyszczeć, nie świecić na wprost w obiektyw.
> Plansza końcowa (ujęcie 07) jest gotowa: `03-grafiki/png/wideo-07-plansza-koncowa.png`.

| Nr | Plik | Czas w filmie | Co w kadrze | Plan | Ruch kamery | Tekst na ekranie (napisy) | Dźwięk |
|---|---|---|---|---|---|---|---|
| 01 | `01.mp4` | 3,0 s | Spoina na rurze z rdzawymi / kolorowymi przebarwieniami (stary odcinek z demontażu) | Detal, 10-15 cm od rury | Powolny najazd | „Rdza na spoinie po dwóch latach? To nie wina stali 316L." | Głos z offu, ewent. stuknięcie w rurę |
| 02 | `02.mp4` | 3,5 s | Wnętrze rury: przecięta próbka z utlenioną granią albo obraz z endoskopu | Detal | Statyczny, latarka z boku | „Problem jest w środku rury. Grań bez gazu formującego utlenia się." | Głos |
| 03 | `03.mp4` | 3,5 s | Dwie rury obok siebie na stole, widać cechowanie 316L / 1.4404 i 304 / 1.4301 | Średni -> detal na cechowanie | Przesunięcie w bok (slajd) | „Krok 1: 316L tam, gdzie produkt i chemia. 304 na konstrukcje." | Głos |
| 04 | `04.mp4` | 3,5 s | Poziomica na zamontowanym rurociągu, potem spust w najniższym punkcie | Średni | Panorama wzdłuż rury w dół | „Krok 2: spadki i krótkie odgałęzienia. CIP dociera wszędzie." | Głos |
| 05 | `05.mp4` | 3,5 s | Spawanie TIG rury; widać wężyk gazu formującego / korek formujący w rurze. Filtr na obiektyw albo nagranie przez szybkę przyłbicy | Detal | Statyczny (statyw / oparcie) | „Krok 3: TIG z formowaniem grani. Grań gładka jak rura." | Dźwięk łuku + głos |
| 06 | `06.mp4` | 3,5 s | Nakładanie pasty trawiącej pędzelkiem na spoinę, potem spłukiwanie | Detal | Statyczny | „Krok 4: trawienie i pasywacja. Stal znów chroni się sama." | Głos |
| 07 | (grafika) | 5,0 s | Plansza końcowa: logo, telefon, kalkulator | - | - | „Rurociągi 316L dla mleczarni. Zadzwoń: 667 466 431." | Głos + muzyka |

**Bezpieczeństwo przy ujęciu 05:** nie patrz na łuk bez ochrony; telefon na statywie, nagrywaj przez szkło spawalnicze albo poproś drugą osobę.

**Ustawienia czasów** (start w pliku i długość) są na górze `montaz.sh` (`START_01=...`). Jeśli najlepszy moment jest np. od 2. sekundy klipu - zmień tylko tę liczbę.
