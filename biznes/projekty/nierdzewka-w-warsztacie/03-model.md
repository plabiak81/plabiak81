# 03 - Model biznesowy i liczby: Nierdzewka w warsztacie

**Data:** 2026-10-29 · **Etap:** 3 - zamknięty (decyzja: cennik B) · Liczby policzone przez `03-model.py` (wynik wklejony niżej). Parametry oznaczone (S) to szacunki - poprawiamy je po teście.

## 0. Decyzje i VAT

- **Cennik (decyzja właściciela 2026-10-29): wariant B** - poradnik **49 zł**, szablony **179 zł**, komplet **199 zł**.
- **Budżet startowy:** właściciel „bez preferencji” → przyjęty **Bazowy 560 zł jako założenie do potwierdzenia**. Każdy wydatek wymaga osobnej zgody.
- **VAT:** Instal-tig to JDG **zwolniona podmiotowo z VAT** (art. 113 ust. 1). Dopóki trwa zwolnienie, **ceny są kwotami końcowymi**: klient płaci 49/179/199 zł, przychód = cena, brak VAT do odprowadzenia. Kwestia 5% / 23% dla PDF odpada. Koszty (domena, reklama) są dla nas kosztami brutto - bez odliczenia VAT.
- **Limit zwolnienia od 1.01.2026 r.: 240 000 zł** sprzedaży rocznie (wcześniej 200 000 zł; ustawa z 24.06.2025 r.) - [poradnikprzedsiebiorcy.pl](https://poradnikprzedsiebiorcy.pl/-limit-zwolnienia-podmiotowego-w-vat), [podatki.biz](https://www.podatki.biz/artykuly/zmiany-2026-nowy-limit-zwolnienia-z-vat-i-kasowego-pit_4_60826.htm), [akademialtca.pl](https://akademialtca.pl/blog/prezydent-podpisal-ustawe-zmieniajaca-limit-zwolnienia-podmiotowego-w-vat). **Limit obejmuje całą sprzedaż JDG**, razem z usługami montażowymi Instal-tig - sekcja 6 wyniku pokazuje, ile zapasu potrzeba. Obrót Instal-tig jest nieznany → pytanie do księgowej (`06-formalnosci.md`).
- Ryzyka utraty zwolnienia i sprzedaż do UE (OSS) - opisane w `06-formalnosci.md`, sekcja 2.

## 1. Lean Canvas

| Pole | Treść |
|---|---|
| **Problem** | 1) Mały warsztat dostaje zlecenie lub przetarg z wymogiem dziennika spawania, WPS, protokołu VT, atestów - i nie ma wzorów. 2) Spawacz zaczynający z nierdzewką: przebarwienia, spalona grań, rdza przy spoinie. 3) Wiedza rozproszona (YouTube, fora, stare broszury). |
| **Klient** | B: właściciele warsztatów 1-20 osób pracujących dla przemysłu (główny przychód). A: spawacze TIG i hobbyści (wejście, lista e-mail). |
| **Unikalna wartość** | „Papiery i praktyka nierdzewki od firmy, która robi instalacje dla przemysłu spożywczego - gotowe do wypełnienia dziś”. |
| **Rozwiązanie** | Pakiet edytowalnych szablonów (Word/Excel) z przykładami wypełnienia + poradnik PDF ze ściągami do wydruku. |
| **Kanały** | Grupy FB (1-2 obecne + 6-8 nowych), elektroda.pl, LinkedIn, SEO (wzory dokumentów), wiadomości do 5-15 znajomych warsztatów, opcjonalnie mała reklama Meta na darmową ściągę. |
| **Przychody** | Sprzedaż jednorazowa: poradnik, szablony, komplet. Później: aktualizacje szablonów, kurs wideo TIG, ewentualnie aplikacja wyceny. |
| **Koszty** | Domena, prowizje płatności, opcjonalnie reklama i sprawdzenie regulaminu. Czas właściciela: ok. 6-8 h na start, potem ok. 1 h/tydz. |
| **Kluczowe metryki** | Odwiedziny, zapisy po darmową ściągę, konwersja zapis → zakup, liczba zamówień, udział szablonów w sprzedaży. |
| **Przewaga** | Praktyka z przemysłem spożywczym (316L, higiena, odbiory), istniejący blog i materiały studia, brak polskiego płatnego konkurenta dla szablonów. |

## 2. Cennik (wariant B - wybrany)

| Pakiet | Co zawiera | Cena końcowa | Dla kogo |
|---|---|---|---|
| **Poradnik** | PDF „Nierdzewka bez przebarwień” (ok. 40-60 s.) + 6 ściąg A4 | **49 zł** | spawacz, hobbysta |
| **Szablony warsztatu** | 8 edytowalnych dokumentów (WPS TIG 141, dziennik spawania, protokół VT, próba szczelności/ciśnieniowa, protokół odbioru, rejestr atestów, checklista instalacji higienicznej, plan spawania i badań) + instrukcja i przykłady wypełnione | **179 zł** | warsztat, podwykonawca |
| **Komplet** | Szablony + poradnik + aktualizacje plików przez 12 mies. | **199 zł** | warsztat, który szkoli ludzi |

Na stronie: „Cena końcowa. Sprzedawca zwolniony z VAT (art. 113 ust. 1 ustawy o VAT)”. Darmowy magnes na e-mail: ściąga „Kolory nalotu na spoinie”. Bez sztucznych przekreślonych cen; promocje zgodnie z Omnibusem.

## 3. Koszty

| Koszt | Typ | Kwota | Uwagi |
|---|---|---|---|
| Domena .pl | rok | ok. 60 zł pierwszy rok, ok. 120 zł/rok później (S) | opcjonalnie - start na `plabiak81.github.io` za 0 zł |
| Hosting | stały | 0 zł | GitHub Pages |
| E-mail marketing | stały | 0 zł (S: darmowy plan do ok. 1 000 adresów) | wybór narzędzia - zadanie właściciela |
| Fakturowanie | stały | 0 zł (założenie) | do potwierdzenia z księgową |
| Bramka płatności | zmienny | ok. 1,5% + 1,10 zł (S) | Stripe: karty 1,4% + 0,25 EUR, BLIK ok. 1,4%; Przelewy24: karty od 1,4% + 0,30 zł - z porównań ([freenance.io](https://freenance.io/przedsiebiorczosc/bramki-platnosci-2026-ranking-stripe-payu-przelewy24-tpay-bluemedia-porownanie/)) **[RĘCZNIE: cennik operatora]** |
| Reklama Meta (opcjonalnie) | stały | 0 / 150 / 300 zł/mies. | decyzja w etapie 7 |
| Sprawdzenie regulaminu | jednorazowo | ok. 500 zł (S) | w wariancie „Pełny” |

## 4. Wyniki z `03-model.py` (uruchomiony 2026-10-29, VAT = 0)

```
======================================================================
1. EKONOMIA JEDNOSTKOWA (wariant B, zwolnienie z VAT (cena = przychód))
======================================================================
          Produkt |   Cena | Przychód | Prowizja |  Marża | Udział (S) 
------------------+--------+----------+----------+--------+------------
     Poradnik PDF |  49.00 |    49.00 |     1.83 |  47.16 |        60% 
 Pakiet szablonów | 179.00 |   179.00 |     3.79 | 175.22 |        25% 
          Komplet | 199.00 |   199.00 |     4.08 | 194.91 |        15% 

Średnie zamówienie: 104.00 zł przychodu, marża po prowizji: 101.34 zł

======================================================================
2. PRÓG RENTOWNOŚCI
======================================================================
 Reklama/mies. | Koszty stałe/mies. | Zamówień/mies. do zera 
---------------+--------------------+------------------------
          0 zł |              10 zł |                    0.1 
        150 zł |             160 zł |                    1.6 
        300 zł |             310 zł |                    3.1 

Zwrot budżetu startowego 'Minimum' (160 zł): 2 zamówień łącznie
Zwrot budżetu startowego 'Bazowy' (560 zł): 6 zamówień łącznie
Zwrot budżetu startowego 'Pełny' (1460 zł): 14 zamówień łącznie

Cel 3 000 zł/mies. (bez reklam) = 30 zamówień/mies.
Przy konwersji 1,8% to ok. 1 650 odwiedzin/mies.

======================================================================
3. KOSZT POZYSKANIA KLIENTA Z REKLAMY (reklama -> ściąga -> e-mail -> zakup)
======================================================================
Koszt zapisu: 4.80 zł, koszt klienta (CAC): 120.00 zł
Marża średniego zamówienia: 101.34 zł -> marża/CAC = 0.84
Reklama na sprzedaż się nie spina, gdy marża/CAC < 1. Wtedy tylko test lub ruch darmowy.

======================================================================
4. WARIANTY CENNIKA - średnia marża i zamówienia potrzebne do celu
======================================================================
     Wariant | Poradnik | Szablony | Komplet | Śr. marża | Zam./mies. do celu | Marża/CAC 
-------------+----------+----------+---------+-----------+--------------------+-----------
 B - wybrany |    49 zł |   179 zł |  199 zł |    101.34 |                 30 |      0.84 
  A - bazowy |    69 zł |   249 zł |  279 zł |    142.22 |                 21 |      1.19 
  C - wysoki |    89 zł |   349 zł |  389 zł |    194.92 |                 15 |      1.62 

======================================================================
5. SCENARIUSZE NA 12 MIESIĘCY (wariant B, budżet startowy 'Bazowy')
======================================================================
 Scenariusz | Ruch m12 | Zam. m12 | Przych. m12 | Zysk m12 | Zam. 12m | Przych. 12m | Wynik 12m | Zwrot (mies.) 
------------+----------+----------+-------------+----------+----------+-------------+-----------+---------------
   ostrożny |      400 |      4.3 |         447 |      426 |       34 |       3 494 |     2 725 |             4 
     bazowy |     1000 |     18.7 |       1 945 |    1 735 |      138 |      14 352 |    11 505 |             2 
      dobry |     2000 |     49.2 |       5 117 |    4 676 |      360 |      37 440 |    32 202 |             1 

Budżet startowy 'Bazowy': 560 zł. Cel właściciela: 3 000 zł/mies.

======================================================================
6. LIMIT ZWOLNIENIA Z VAT (240 000 zł/rok - cała sprzedaż JDG)
======================================================================
 ostrożny: nowy projekt dokłada 3 494 zł/rok -> zapas Instal-tig musi być co najmniej taki (obrót Instal-tig max 236 506 zł)
   bazowy: nowy projekt dokłada 14 352 zł/rok -> zapas Instal-tig musi być co najmniej taki (obrót Instal-tig max 225 648 zł)
    dobry: nowy projekt dokłada 37 440 zł/rok -> zapas Instal-tig musi być co najmniej taki (obrót Instal-tig max 202 560 zł)

Uzupełnij OBROT_INSTALTIG, żeby sprawdzić zapas do limitu.
```

## 5. Co z tego wynika

1. **Próg rentowności jest bardzo niski:** koszty stałe ok. 10 zł/mies. Bez reklam zarabia pierwsze zamówienie. Przy reklamie 150 zł/mies. trzeba ok. 1,6 zamówienia miesięcznie. Budżet „Bazowy” 560 zł zwraca się po ok. 6 zamówieniach.
2. **Cel 3 000 zł/mies. = ok. 30 zamówień miesięcznie** (przy wariancie A byłoby 21) = ok. 1 650 odwiedzin z grupy docelowej przy konwersji 1,8% (S).
3. **Przy cenach B reklama na sprzedaż się nie spina:** koszt klienta ok. 120 zł, średnia marża ok. 101 zł (marża/CAC 0,84). Reklama ma sens tylko jako krótki test magnesu (koszt zapisu) albo gdy klienci kupią coś jeszcze (kurs, aktualizacje). Główny kanał musi być darmowy: grupy, forum, SEO, wiadomości B2B.
4. **Scenariusze 12 mies. (wariant B, start 560 zł):**
   - ostrożny: ok. 34 zamówienia, ok. 3,5 tys. zł przychodu w roku, w 12. mies. ok. 450 zł/mies.,
   - bazowy: ok. 138 zamówień, ok. 14,4 tys. zł, w 12. mies. ok. 1,9 tys. zł/mies.,
   - dobry: ok. 360 zamówień, ok. 37,4 tys. zł, w 12. mies. ok. 5,1 tys. zł/mies.
   Cel 3-5 tys. zł/mies. osiąga tylko scenariusz dobry. Uczciwie: przy tej niszy i tych cenach potrzebny będzie drugi produkt (kurs wideo) w drugim półroczu.
5. **Zaleta wariantu B:** niższy próg zakupu, łatwiej o pierwsze sprzedaże i opinie od prawdziwych klientów. Po 20-30 sprzedażach warto przetestować wyższą cenę szablonów (np. 249 zł) - bez sztucznych promocji, z poszanowaniem Omnibusa.
6. **Limit zwolnienia:** nowy projekt dokłada 3,5-37 tys. zł/rok. Jeśli Instal-tig ma już ponad ok. 200 tys. zł sprzedaży rocznie, scenariusz dobry może przekroczyć 240 tys. zł → VAT 23% i ceny trzeba będzie przeliczyć (ustaw `VAT = 0.23` w skrypcie). Pytanie nr 1 do księgowej.
7. **Czas właściciela:** ok. 6-8 h jednorazowo (sprawdzenie treści, 15-20 zdjęć spoin), potem ok. 1 h/tydz.
