# 02 - Badanie rynku: Nierdzewka w warsztacie

**Data:** 2026-10-29 · **Produkt:** poradnik PDF „Nierdzewka bez przebarwień” + ściągi TIG oraz pakiet szablonów dokumentacji dla małego warsztatu (wariant A z etapu 1)

**Jak to zbadano:** WebSearch (wyszukiwarka z wynikami głównie z USA, słabo indeksuje polskie fora i Facebooka). WebFetch nie działa dla części polskich domen w tej sesji - one są oznaczone **[RĘCZNIE]** i trzeba je sprawdzić w przeglądarce albo dopuścić w ustawieniach sieci sesji: `naukaspawania.com`, `jakspawacodlewy.pl`, `kb.pl`, `elektroda.pl`. Liczby bez źródła są oznaczone **(S) = szacunek** z opisaną metodą.

---

## 1. Popyt

### 1.1 Sygnały, że problem istnieje i ktoś za niego płaci

| Sygnał | Co pokazuje | Źródło (data dostępu 2026-10-29) |
|---|---|---|
| Stacjonarne kursy TIG kosztują 2 500-8 490 zł | ludzie i firmy płacą za umiejętność TIG; nasz produkt jest o 1-2 rzędy tańszy | [PARP BUR 3739182](https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/drukuj-pdf?id=3739182), [PARP BUR 3162888](https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/drukuj-pdf?id=3162888) |
| Spawacze w pierwszej piątce zawodów deficytowych; wyjazdy dobrych spawaczy za granicę | do zawodu wchodzą nowi ludzie, którzy muszą szybko się douczyć; firmy przyjmują mniej doświadczonych | [money.pl](https://www.money.pl/gospodarka/w-tej-branzy-brakuje-pracownikow-szkoly-przywracaja-kierunek-7103849281952512a.html), [money.pl - exodus](https://www.money.pl/gospodarka/kryzys-w-branzy-spawalniczej-exodus-pracownikow-trwa-7040930319383296a.html), [Barometr zawodów podlaskie 2025](https://belchatow.praca.gov.pl/documents/102984/25539338/RAPORT_wojewodztwo_podlaskie_2025.pdf/a0d3625d-6823-496b-8376-a8c90610378a) |
| Kiwa zamknęła szkolenia spawaczy w Warszawie (05.2025) | mniej miejsc do nauki stacjonarnej | [Kiwa](https://www.kiwa.com/pl/pl/aktualnosci/kursy-i-uprawnienia-spawacza-w-kiwa/) |
| Przebarwienia spoin TIG są „niepożądane” w spożywce i farmacji - producent sprzedaje na to osobne urządzenie | problem z przebarwieniami jest na tyle powszechny, że powstały produkty do jego usuwania | [Fronius - Magic Cleaner](https://www.fronius.com/pl-pl/poland/spawalnictwo/centrum-informacyjne/prasa/22-04-magic-cleaner), [Fronius broszura PL](https://schweissen-schneiden.fronius.com/~/downloads/Perfect%20Welding/Brochures/PW_BRO_MagicCleaner_PL.pdf) |
| Zamawiający w przetargach wymagają: dziennika spawania z WPS, protokołu VT wg PN-EN ISO 17637 z kryteriami PN-EN ISO 5817, planu spawania i badań przed rozpoczęciem prac | **twardy dowód popytu na szablony** - mała firma bez tych dokumentów nie wejdzie w takie zlecenie | [Enea - wymagania jakościowe (zał. 1)](https://www.enea.pl/zamowienia/2200005890___zalacznik%20nr%201.%20wymagania%20jakosciowe%20i%20zabezpieczenia%20antykorozyjne.pdf), [platformazakupowa.pl - SWZ](https://platformazakupowa.pl/file/get_new/b2c1cd454a94f1165a55f37c18a7c5a9.pdf) |
| Zapytania ofertowe na instalacje ze stali nierdzewnej wymagają materiałów „z certyfikatami i atestami” | rejestr atestów i protokół odbioru mają realne zastosowanie | [KPT Kraków - zapytanie 08.2025](https://kpt.krakow.bip-e.pl/download/191/52717/zapytanieofertowedaii06082025signed.pdf) |
| Kemppi sprzedaje „uniwersalne pakiety WPS” (21 WPS dla stali austenitycznej - **tylko MMA i MIG/MAG**, bez TIG), przez dystrybutorów | rynek płaci za gotowe WPS; luka dla TIG i dla dokumentów „wokół” WPS | [Kemppi Universal WPS - stal nierdzewna (PL)](https://fastmigx.kemppi.com/pl-PL/oferta/family/universal-wps-for-stainless-steel/pdf), [Kemppi Universal WPS](https://www.kemppi.com/en/family/universal-wps) |
| Na forum elektroda.pl są wątki o TIG do rur nierdzewnych i doborze gazu | pytania o nierdzewkę padają, ale treści wątków nie udało się pobrać | [elektroda.pl t361900](https://www.elektroda.pl/rtvforum/topic361900.html), [elektroda.pl t1283585](https://www.elektroda.pl/rtvforum/topic1283585.html) **[RĘCZNIE]** |

### 1.2 Prawdziwe pytania ludzi (cytaty)

**Luka badania:** wyszukiwarka nie zwraca treści polskich forów ani grup na Facebooku, a elektroda.pl jest zablokowana w tej sesji. Nie mam więc dosłownych cytatów z linkami - **nie wymyślam ich**. Zamiast tego:
- zadanie dla właściciela (15 min): w 1-2 grupach, w których już jest, wyszukać „nierdzewka”, „przebarwienia”, „grań”, „WPS”, „protokół” i skopiować 5-10 pytań z linkami do `02-rynek.md` (sekcja 1.2) - to też powie, czy temat żyje,
- test z etapu 5 (darmowa ściąga za e-mail) jest właściwym pomiarem popytu.

Tematy, o które w branży typowo się pyta (z doświadczenia właściciela opisanego w blogu Instal-tig, do potwierdzenia cytatami): „dlaczego spoina na nierdzewce rdzewieje”, „czym formować grań i jak długo”, „304 czy 316L”, „jak usunąć nalot”, „klient chce WPS - skąd go wziąć”.

### 1.3 Frazy wyszukiwania

Nie mam dostępu do narzędzi z wolumenami (Google Keyword Planner wymaga konta Google Ads - zadanie opcjonalne). Frazy do sprawdzenia i do SEO (intencja):

| Fraza | Intencja | Produkt |
|---|---|---|
| spawanie stali nierdzewnej TIG | nauka | poradnik |
| przebarwienia na spoinie nierdzewka / jak usunąć nalot po spawaniu | problem | poradnik |
| formowanie grani argon | nauka/problem | poradnik |
| 304 czy 316L | decyzja | poradnik (artykuł już jest na blogu) |
| wzór WPS / WPS przykład | dokument | szablony |
| dziennik spawania wzór | dokument | szablony |
| protokół kontroli wizualnej spoin wzór | dokument | szablony |
| protokół próby szczelności instalacji wzór | dokument | szablony |

Wyszukiwanie „wzór dziennik spawania protokół kontroli wizualnej do pobrania” nie zwróciło żadnego polskiego gotowego wzoru do pobrania - tylko wymagania z przetargów i angielskie raporty na Scribd ([wyniki: Scribd VT report](https://www.scribd.com/document/322637678/Weld-Visual-Inspection-Report)). To luka w treściach, którą można zająć artykułami SEO.

---

## 2. Konkurencja

| # | Kto / co | Oferta | Cena | Mocne strony | Słabe strony | Luka dla nas |
|---|---|---|---|---|---|---|
| 1 | naukaspawania.com | kurs online MIG/MAG, TIG, MMA, rury; platforma 24/7, wideo, testy, konsultacje, certyfikat ukończenia | **[RĘCZNIE]** nie udało się pobrać | szeroki zakres, dużo podstron SEO pod miasta | szablonowe strony (część z placeholderem „XXX” - wg opisu wyszukiwarki), ogólny, nie o nierdzewce i dokumentacji | specjalizacja: nierdzewka + papiery dla przemysłu |
| 2 | jakspawacodlewy.pl | kurs wideo TIG odlewów, 54 lekcje | **[RĘCZNIE]** | wąska nisza, dowód, że wąskie tematy się sprzedają | inny materiał (odlewy) | ten sam model, inna nisza |
| 3 | jakspawacmma.pl | kurs online MMA dla początkujących | **[RĘCZNIE]** | - | MMA, nie TIG | - |
| 4 | Stacjonarne kursy TIG (TÜV, ośrodki z BUR) | szkolenie + egzamin + uprawnienia | 2 500-8 490 zł | dają uprawnienia | drogie, trzeba jechać, nie uczą dokumentacji warsztatu | nasz produkt jako tania „powtórka” po kursie |
| 5 | Kemppi Universal WPS | 21 gotowych WPS dla stali austenitycznej (MMA, MIG/MAG) z WPQR | u dystrybutora, **brak ceny w sieci** | poparte WPQR - formalnie mocne | brak TIG, tylko WPS (bez dziennika, VT, odbiorów), kupowane przez dealera | TIG + komplet dokumentów „dookoła” |
| 6 | Jednostki: TÜV SÜD, Kiwa itp. | kwalifikowanie technologii (WPQR), certyfikacja ISO 3834 / EN 1090 | indywidualnie; szkolenie EN 1090 + ISO 3834 2 200 zł netto/os. | formalna moc | drogie, dla większych firm | szablony dla firm, które jeszcze nie certyfikują |
| 7 | Darmowe materiały: Euro Inox „Spawanie stali nierdzewnych” (PL, 2002), plakat TIG Fronius (PL), darmowe PDF po angielsku | wiedza ogólna | 0 zł | darmowe, rzetelne | stare (2002), ogólne, nie praktyczne „krok po kroku”, brak ściąg do warsztatu | **główny konkurent poradnika** - musimy być praktyczniejsi i aktualni |
| 8 | Literatura: „Spawalnictwo. Poradnik inżyniera” t. 1-2 (PWN, 2025, 2 012 s.) | kompendium | **[RĘCZNIE]** w księgarni | autorytet | 2 000 stron dla inżyniera, nie dla spawacza | krótko, praktycznie, do kieszeni |
| 9 | Kanały YouTube (np. TIG MASTERS - „największy polski kanał o spawaniu”) | darmowe wideo | 0 zł | zasięg, wideo | rozproszone, brak dokumentacji, brak ściąg | współpraca/afiliacja zamiast walki (pomysł na później) |

Źródła: [naukaspawania.com](https://naukaspawania.com/bytom/), [jakspawacodlewy.pl](https://jakspawacodlewy.pl/), [YouTube jakspawacmma](https://www.youtube.com/watch?v=TrTecbG4Gsw), [PARP BUR](https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/drukuj-pdf?id=3162888), [Kemppi PL](https://fastmigx.kemppi.com/pl-PL/oferta/family/universal-wps-for-stainless-steel/pdf), [TÜV SÜD WPQR](https://www.tuvsud.com/pl-pl/branze/produkcja-przemyslowa/spawalnictwo/kwalifikowanie-technologii-spawania-wpqr), [PARP BUR 3504984](https://uslugirozwojowe.parp.gov.pl/wyszukiwarka/uslugi/drukuj-pdf?id=3504984), [Euro Inox PL](https://extranet.worldstainless.org/Files/issf/non-image-files/PDF/Euro_Inox/BrochureWeldability_PL.pdf), [Fronius plakat TIG PL](https://www.fronius.com/~/downloads/Perfect%20Welding/Posters/PW_POS_trainings_poster_TIG_PL.pdf), [taniaksiazka.pl - PWN](https://www.taniaksiazka.pl/poradnik-inzyniera-t-1-2-spawalnictwo-p-2223736.html?gap=1), [ThoughtLeaders - TIG MASTERS](https://app.thoughtleaders.io/youtube/tig-masters).

**Wniosek:** dla poradnika konkurencją jest „darmowe i wystarczająco dobre” (Euro Inox, YouTube) - wygrać można tylko praktyką (zdjęcia błędów, tabele do wydruku, język warsztatu). Dla szablonów **nie znalazłem polskiego, płatnego konkurenta** - Kemppi daje WPS (bez TIG), jednostki dają certyfikację, nikt nie sprzedaje kompletu „papierów warsztatu” po polsku. Tu jest prawdziwa luka i wyższa cena.

---

## 3. Klient idealny

### Segment B (ważniejszy dla przychodu): właściciel małego warsztatu / podwykonawca
- **Kto płaci:** firma (JDG lub spółka 1-20 osób), faktura VAT, koszt uzyskania przychodu.
- **Kto decyduje:** właściciel, często sam spawa. Decyzja do 300-400 zł netto bez pytania nikogo.
- **Sytuacja zakupu:** dostał zapytanie lub zlecenie od zakładu spożywczego, chemicznego, energetyki, albo przetarg, w którym wymagany jest dziennik spawania, WPS, protokół VT, rejestr atestów (por. wymagania Enei wyżej). Ma termin - potrzebuje dokumentów „na wczoraj”.
- **Ile dziś wydaje:** albo nic (robi w Wordzie sam, godzinami), albo płaci inżynierowi spawalnikowi / doradcy (ceny indywidualne; szkolenie z norm 2 200 zł netto/os.), albo traci zlecenie. (S) Godzina pracy właściciela przy dokumentach to 100-150 zł - pakiet za 179 zł (cennik B) zwraca się, jeśli oszczędzi 1-2 godziny.
- **Obiekcje:** „czy to przejdzie u klienta / audytora”, „czy to zgodne z normą”, „mam swoje wzory”. Odpowiedź: przykład wypełniony, jasna informacja, co szablon daje, a czego nie (nie zastępuje WPQR ani uprawnień), prawo do zwrotu tylko jeśli prawo na to pozwala (treści cyfrowe - etap 6).

### Segment A (wejście, lista e-mail): spawacz, który zaczyna z nierdzewką
- **Kto:** spawacz MIG/MAG przechodzący na TIG, absolwent kursu, hobbysta z własną spawarką TIG, pracownik, któremu szef dał „kwasówkę”.
- **Kto płaci:** on sam, BLIK, brutto. Kwota impulsowa 49-89 zł.
- **Ile dziś wydaje:** 0 zł (YouTube, fora), albo 2 500+ zł na kurs stacjonarny.
- **Obiekcje:** „wszystko jest na YouTube”. Odpowiedź: ściągi do wydruku, zdjęcia błędów i przyczyn, wszystko w jednym miejscu, od praktyka z przemysłu spożywczego.

---

## 4. Wielkość rynku (bottom-up)

Brak oficjalnej liczby spawaczy w Polsce w wynikach wyszukiwania (GUS/BAEL - do sprawdzenia w [BDL GUS](https://bdl.stat.gov.pl) **[RĘCZNIE]**; kod zawodu spawacza 721204). Bizraport podaje 8 060 organizacji w dziale PKD 25 (produkcja metalowych wyrobów gotowych), bez roku i metodologii - to głównie podmioty z danymi finansowymi, bez większości JDG ([Bizraport PKD 25](https://www.bizraport.pl/pkd/25/produkcja-metalowych-wyrobow-gotowych-z-wylaczeniem-maszyn-i-urzadzen)).

| Segment | Liczba (S) | Metoda szacunku | Cena | Częstotliwość | Wartość rynku (S) | 1% w roku 1 |
|---|---|---|---|---|---|---|
| A - spawacze TIG na nierdzewce + hobbyści | 17 000-51 000 osób | 60-120 tys. spawaczy (S, brak danych GUS) × 20-30% pracujących z nierdzewką TIG + 5-15 tys. hobbystów | 69 zł brutto | raz | 1,17-3,52 mln zł brutto | 170-510 zakupów |
| B - warsztaty pracujące dla przemysłu / w przetargach | 2 500-8 000 firm | 25-40 tys. firm metalowych z JDG (S: ok. 3-5× liczba z Bizraport) × 10-20% robiących zlecenia z wymaganą dokumentacją | 249 zł netto (cennik B: 179 zł) | raz (+ aktualizacje) | 0,62-1,99 mln zł (przy 179 zł: 0,45-1,43 mln zł) | 25-80 zakupów |

Policzone skryptem (2026-10-29). **Wniosek:** to mała nisza. Jednorazowy rynek A+B to rząd 2-5 mln zł, a realnie osiągalne w roku 1 (1%) to ok. 200-600 zamówień, czyli ok. 25-80 tys. zł przychodu w najlepszym razie. Cel 3-5 tys. zł/mies. jest na granicy możliwości tej niszy - trzeba będzie dołożyć drugi produkt (kurs wideo, aktualizacje szablonów w abonamencie, aplikacja wyceny).

---

## 5. Dotarcie do klientów (ważne przy 1-2 grupach właściciela)

Właściciel jest w 1-2 grupach spawaczy na FB/forach i może napisać do 5-15 warsztatów. To za mało na sam start postem - potrzebny jest plan dołączania do kolejnych miejsc (szczegóły i harmonogram w etapie 7, zadanie startowe w `ZADANIA-WLASCICIELA.md`):

1. **Facebook - dołączyć do 6-8 dodatkowych grup** (wyszukiwanie na Facebooku, zakładka Grupy): „spawacze”, „spawanie TIG”, „spawalnictwo”, „stal nierdzewna”, „ślusarstwo / warsztat ślusarski”, „konstrukcje stalowe”, „spawacze za granicą”, „utrzymanie ruchu”. Wybierać grupy aktywne (posty codziennie), z ponad 1 000 członków i regulaminem, który pozwala dzielić się materiałami. Wyszukiwarka tej sesji nie indeksuje Facebooka - **nazw i liczby członków nie da się tu potwierdzić [RĘCZNIE]**.
2. **Forum elektroda.pl** (dział o spawaniu) - konto, odpowiedzi na pytania o nierdzewkę z linkiem do darmowej ściągi, tylko gdy regulamin pozwala.
3. **LinkedIn** - profil Instal-tig, posty o dokumentacji dla podwykonawców; segment B (właściciele firm, kierownicy UR) tam jest.
4. **SEO** - artykuły pod frazy z sekcji 1.3 (wzory dokumentów nie mają polskiej konkurencji w wynikach).
5. **Zasada grup:** 3-4 wartościowe odpowiedzi/posty na jedno wspomnienie o produkcie; bez spamu, bez kont-widmo, bez fałszywych poleceń.

---

## 6. Werdykt: **IDZIEMY, ze zmianą akcentu**

1. **Szablony dokumentacji (B) są głównym produktem** - twardy dowód popytu (wymagania przetargów: dziennik spawania, WPS, VT wg ISO 17637/5817, plan spawania i badań), brak polskiego konkurenta, wyższa cena, kupuje firma.
2. **Poradnik (A) jest produktem wejściowym i źródłem listy e-mail** - ma silną darmową konkurencję, więc nie liczymy, że sam zarobi; ma ściągać ludzi i sprzedawać szablony.
3. **Nisza jest mała** - realnie 200-600 zamówień w roku 1 w dobrym wariancie. Bez kolejnego produktu cel 3-5 tys. zł/mies. będzie trudny. Mówię to wprost przed decyzją o cenniku.
4. **Ryzyka:** odpowiedzialność merytoryczna szablonów (właściciel sprawdza, jasne zastrzeżenia, nie kopiujemy treści norm ISO), mały zasięg właściciela (plan dołączania do grup), brak twardych danych o wolumenie wyszukiwań (mierzymy testem).
5. **Do ręcznego sprawdzenia przed etapem 4:** ceny naukaspawania.com i jakspawacodlewy.pl, cytaty z 1-2 grup właściciela i elektroda.pl, nazwy i liczebność grup FB.
