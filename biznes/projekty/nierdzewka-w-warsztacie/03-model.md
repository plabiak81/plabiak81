# 03 - Model biznesowy i liczby: Nierdzewka w warsztacie

**Data:** 2026-10-29 · **Etap:** 3 [DECYZJA: cennik i budżet startowy] · Liczby policzone przez `03-model.py` (wynik wklejony niżej). Parametry oznaczone (S) to szacunki - poprawiamy je po teście.

> Ceny i koszty w PLN. Konsument widzi ceny **brutto**, firma **netto + 23% VAT**. Model liczy VAT 23% dla wszystkiego (ostrożnie). Poradnik PDF może podlegać 5% VAT jako publikacja elektroniczna - źródła są niezgodne co do wymogu ISBN ([Podatnik.info](https://www.podatnik.info/publikacje/opodatkowanie-e-bookow-i-audiobookow,659181), [Solidna Księgowa](https://solidnaksiegowa.com/jaka-stawka-vat-przy-sprzedazy-e-booka/)) - do potwierdzenia z księgową na etapie 6. Przy 5% VAT z poradnika za 69 zł brutto zostaje 65,71 zł netto zamiast 56,10 zł.

## 1. Lean Canvas

| Pole | Treść |
|---|---|
| **Problem** | 1) Mały warsztat dostaje zlecenie lub przetarg z wymogiem dziennika spawania, WPS, protokołu VT, atestów - i nie ma wzorów. 2) Spawacz zaczynający z nierdzewką: przebarwienia, spalona grań, rdza przy spoinie. 3) Wiedza rozproszona (YouTube, fora, stare broszury). |
| **Klient** | B: właściciele warsztatów 1-20 osób pracujących dla przemysłu (główny przychód). A: spawacze TIG i hobbyści (wejście, lista e-mail). |
| **Unikalna wartość** | „Papiery i praktyka nierdzewki od firmy, która robi instalacje dla przemysłu spożywczego - gotowe do wypełnienia dziś”. |
| **Rozwiązanie** | Pakiet edytowalnych szablonów (Word/Excel) z przykładami wypełnienia + poradnik PDF ze ściągami do wydruku. |
| **Kanały** | Grupy FB (1-2 obecne + 6-8 nowych), elektroda.pl, LinkedIn, SEO (wzory dokumentów), wiadomości do 5-15 znajomych warsztatów, opcjonalnie mała reklama Meta na darmową ściągę. |
| **Przychody** | Sprzedaż jednorazowa: poradnik, szablony, komplet. Później: aktualizacje szablonów, kurs wideo TIG, ewentualnie aplikacja wyceny. |
| **Koszty** | Domena, prowizje płatności, opcjonalnie reklama i sprawdzenie regulaminu. Czas właściciela: ok. 6-8 h na start (sprawdzenie merytoryki, zdjęcia), potem ok. 1 h/tydz. |
| **Kluczowe metryki** | Odwiedziny, zapisy po darmową ściągę, konwersja zapis → zakup, liczba zamówień i udział szablonów w sprzedaży. |
| **Przewaga** | Praktyka z przemysłem spożywczym (316L, higiena, odbiory), istniejący blog i materiały studia, brak polskiego płatnego konkurenta dla szablonów. |

## 2. Cennik - 3 pakiety (wariant A, rekomendowany)

| Pakiet | Co zawiera | Cena | Dla kogo |
|---|---|---|---|
| **Poradnik** | PDF „Nierdzewka bez przebarwień” (ok. 40-60 s.) + 4-6 ściąg A4 (parametry TIG wg grubości, wolfram, gaz i formowanie grani, kolory nalotu, 304 vs 316L, czyszczenie i pasywacja) | **69 zł brutto** (56,10 zł netto) | spawacz, hobbysta |
| **Szablony warsztatu** | 7 edytowalnych dokumentów: wzór WPS (TIG 141, własny układ), dziennik spawania, protokół VT, protokół próby szczelności/ciśnieniowej, protokół odbioru i przekazania, rejestr atestów 3.1, checklista instalacji higienicznej + instrukcja i przykłady wypełnione | **249 zł netto** (306,27 zł brutto) | warsztat, podwykonawca |
| **Komplet** | Szablony + poradnik + aktualizacje plików przez 12 mies. | **279 zł netto** (343,17 zł brutto) | warsztat, który szkoli ludzi |

Darmowy magnes na e-mail: ściąga „Kolory nalotu na spoinie - co znaczą” i jeden szablon (protokół próby szczelności).

Uczciwie: bez sztucznych „przekreślonych cen” i liczników czasu. Promocje tylko zgodnie z Omnibusem (najniższa cena z 30 dni) - etap 6.

## 3. Koszty

| Koszt | Typ | Kwota | Uwagi |
|---|---|---|---|
| Domena .pl | jednorazowo / rok | ok. 60 zł pierwszy rok, ok. 100 zł/rok później (S) | opcjonalnie - można zacząć na `plabiak81.github.io` za 0 zł |
| Hosting | stały | 0 zł | GitHub Pages |
| E-mail marketing | stały | 0 zł (S: darmowy plan do ok. 1 000 adresów) | narzędzie do wyboru na etapie 5 |
| Fakturowanie | stały | 0 zł (założenie: w ramach Instal-tig) | do potwierdzenia |
| Bramka płatności | zmienny | ok. 1,5% + 1,10 zł za transakcję (S) | Stripe: karty 1,4% + 0,25 EUR, BLIK ok. 1,4%; Przelewy24: karty od 1,4% + 0,30 zł, BLIK 0,79% przy abonamencie 50 zł/mies. - dane z porównań, nie z cennika operatora ([freenance.io](https://freenance.io/przedsiebiorczosc/bramki-platnosci-2026-ranking-stripe-payu-przelewy24-tpay-bluemedia-porownanie/)) **[RĘCZNIE: sprawdzić stripe.com/pl/pricing]** |
| Alternatywa: Lemon Squeezy (pośrednik sprzedaży, rozlicza VAT UE) | zmienny | 5% + 0,50 USD (wg recenzji) | droższe, za to bez obsługi VAT OSS; minus: słaby BLIK ([wearefounders.uk](https://www.wearefounders.uk/best-platforms-for-selling-digital-products-in-2026/)) |
| Reklama Meta (opcjonalnie) | stały | 0 / 150 / 300 zł/mies. | tylko na darmową ściągę |
| Sprawdzenie regulaminu przez prawnika | jednorazowo | ok. 500 zł (S) | opcjonalne w wariancie „Pełny” |

## 4. Wyniki z `03-model.py` (uruchomiony 2026-10-29)

```
======================================================================
1. EKONOMIA JEDNOSTKOWA (wariant A)
======================================================================
          Produkt |  Netto | Brutto | Prowizja | Marża netto | Udział (S) 
------------------+--------+--------+----------+-------------+------------
     Poradnik PDF |  56.10 |  69.00 |     2.14 |       53.96 |        60% 
 Pakiet szablonów | 249.00 | 306.27 |     5.69 |      243.31 |        25% 
          Komplet | 279.00 | 343.17 |     6.25 |      272.75 |        15% 

Średnie zamówienie: 137.76 zł netto, marża po prowizji: 134.12 zł

======================================================================
2. PRÓG RENTOWNOŚCI
======================================================================
 Reklama/mies. | Koszty stałe/mies. | Zamówień/mies. do zera 
---------------+--------------------+------------------------
          0 zł |               8 zł |                    0.1 
        150 zł |             158 zł |                    1.2 
        300 zł |             308 zł |                    2.3 

Zwrot budżetu startowego 'Minimum' (160 zł): 1 zamówień łącznie
Zwrot budżetu startowego 'Bazowy' (560 zł): 4 zamówień łącznie
Zwrot budżetu startowego 'Pełny' (1460 zł): 11 zamówień łącznie

Cel 3 000 zł/mies. netto (bez reklam) = 22 zamówień/mies.
Przy konwersji 1,5% to ok. 1 495 odwiedzin/mies.

======================================================================
3. KOSZT POZYSKANIA KLIENTA Z REKLAMY (lejek: reklama -> ściąga -> e-mail -> zakup)
======================================================================
Koszt zapisu: 4.80 zł, koszt klienta (CAC): 120.00 zł
Marża średniego zamówienia: 134.12 zł -> marża/CAC = 1.12
Wniosek: reklama opłaca się tylko, gdy marża/CAC > 1 (lub doliczymy kolejne zakupy).

======================================================================
4. WARIANTY CENNIKA - średnia marża i zamówienia potrzebne do celu
======================================================================
    Wariant |     Poradnik |     Szablony |      Komplet | Śr. marża | Zam./mies. do celu 
------------+--------------+--------------+--------------+-----------+--------------------
  B - niski | 49 zł brutto | 179 zł netto | 199 zł netto |     95.59 |                 31 
 A - bazowy | 69 zł brutto | 249 zł netto | 279 zł netto |    134.12 |                 22 
 C - wysoki | 89 zł brutto | 349 zł netto | 389 zł netto |    184.43 |                 16 

======================================================================
5. SCENARIUSZE NA 12 MIESIĘCY (wariant A, budżet startowy 'Bazowy')
======================================================================
 Scenariusz | Ruch m12 | Zam. m12 | Przych. m12 | Zysk m12 | Zam. 12m | Przych. 12m | Wynik 12m | Zwrot (mies.) 
------------+----------+----------+-------------+----------+----------+-------------+-----------+---------------
   ostrożny |      400 |      3.5 |         482 |      461 |       28 |       3 802 |     3 046 |             4 
     bazowy |     1000 |     15.7 |       2 163 |    1 948 |      116 |      16 035 |    13 155 |             2 
      dobry |     2000 |     41.2 |       5 676 |    5 218 |      302 |      41 659 |    36 301 |             1 

Budżet startowy 'Bazowy': 560 zł. Cel właściciela: 3 000 zł/mies.
```

## 5. Co z tego wynika

1. **Próg rentowności jest bardzo niski** - koszty stałe to ok. 8 zł/mies. Bez reklam zarabia już pierwsze zamówienie. Z reklamą 150 zł/mies. trzeba ok. 1-2 zamówień miesięcznie, żeby wyjść na zero. Budżet startowy „Bazowy” (560 zł) zwraca się po ok. 4 zamówieniach.
2. **Problemem nie są koszty, tylko ruch.** Cel 3 000 zł/mies. netto to ok. 22 zamówienia miesięcznie, czyli ok. 1 500 odwiedzin z grupy docelowej przy konwersji 1,5% (S).
3. **Reklama ledwo się spina:** koszt klienta ok. 120 zł przy średniej marży ok. 134 zł (marża/CAC 1,12). Reklama ma sens tylko jako test lub gdy zwiększymy udział szablonów (droższy produkt) albo dołożymy kolejne produkty dla tych samych ludzi.
4. **Scenariusze 12 mies.** (wariant A, start 560 zł):
   - ostrożny: ok. 28 zamówień w roku, ok. 3,8 tys. zł przychodu, w 12. mies. ok. 480 zł/mies.,
   - bazowy: ok. 116 zamówień, ok. 16 tys. zł przychodu, w 12. mies. ok. 2,2 tys. zł/mies.,
   - dobry: ok. 302 zamówienia, ok. 41,7 tys. zł przychodu, w 12. mies. ok. 5,7 tys. zł/mies.
   Cel 3-5 tys. zł/mies. osiąga dopiero scenariusz dobry - albo bazowy plus drugi produkt (kurs wideo) w drugim półroczu.
5. **Cena:** wariant C (wyższy) wymaga tylko 16 zamówień/mies. do celu zamiast 22, ale przy nieznanej marce i braku opinii może obniżyć konwersję. Wariant B (niższy) wymaga 31 zamówień - w małej niszy to zła droga.
6. **Czas właściciela:** ok. 6-8 h jednorazowo (sprawdzenie poradnika i szablonów, 15-20 zdjęć spoin, decyzje), potem ok. 1 h/tydz. (odpowiedzi w grupach, wiadomości). Mieści się w 2-5 h/tydz.

## 6. Decyzja właściciela

### Cennik
| Wariant | Poradnik | Szablony | Komplet | Zamówień/mies. do 3 000 zł |
|---|---|---|---|---|
| B - niski | 49 zł brutto | 179 zł netto | 199 zł netto | 31 |
| **A - bazowy (rekomendacja)** | **69 zł brutto** | **249 zł netto** | **279 zł netto** | **22** |
| C - wysoki | 89 zł brutto | 349 zł netto | 389 zł netto | 16 |

Rekomendacja A: cena szablonów to równowartość 2-3 godzin pracy właściciela warsztatu przy dokumentach, a poradnik pozostaje zakupem impulsowym. Po 20-30 sprzedażach można przetestować C dla szablonów (zmiana ceny bez sztucznych promocji).

### Budżet startowy
| Wariant | Co | Kwota |
|---|---|---|
| Minimum | domena 60 zł + zapas 100 zł, bez reklam, regulamin z wzoru | 160 zł |
| **Bazowy (rekomendacja)** | domena + 1 miesiąc testu reklam 300 zł + zapas 200 zł | **560 zł** |
| Pełny | domena + 2 mies. reklam 600 zł + sprawdzenie regulaminu przez prawnika ok. 500 zł + zapas 300 zł | 1 460 zł |

Miesięcznie potem: 0-150 zł (reklama tylko, jeśli test pokaże koszt zapisu ≤ 5 zł). Wszystkie warianty mieszczą się w budżecie z `PROFIL.md` (1-3 tys. zł + do 300 zł/mies.).
