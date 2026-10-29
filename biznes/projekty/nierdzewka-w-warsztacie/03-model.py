#!/usr/bin/env python3
"""Model liczb: Nierdzewka w warsztacie (poradnik PDF + pakiet szablonów).

Tylko biblioteka standardowa. Uruchom: python3 03-model.py
Wszystkie kwoty w PLN. "netto" = bez VAT. Parametry oznaczone (S) to szacunki,
nie dane rynkowe - poprawiaj je po pierwszych tygodniach testu (metryki.md).
"""

# ---------------------------------------------------------------- PARAMETRY
VAT = 0.23                 # ostrożnie 23% dla wszystkiego; PDF może mieć 5% (do potwierdzenia, etap 6)

# Cennik (wariant A - rekomendowany). Ceny dla konsumenta podajemy brutto, dla firm netto.
PRODUKTY = {
    # nazwa:            (cena_netto, udział_w_zamówieniach (S))
    "Poradnik PDF":      (round(69 / (1 + VAT), 2), 0.60),   # 69 zł brutto
    "Pakiet szablonów":  (249.00, 0.25),                     # 306,27 zł brutto
    "Komplet":           (279.00, 0.15),                     # 343,17 zł brutto
}

# Warianty cennika do decyzji (netto): poradnik brutto -> netto, szablony, komplet
WARIANTY_CEN = {
    "B - niski":    (49, 179, 199),
    "A - bazowy":   (69, 249, 279),
    "C - wysoki":   (89, 349, 389),
}

# Koszty zmienne na zamówienie
PROWIZJA_PROC = 0.015      # bramka płatności, % od brutto (S: Stripe/P24 ok. 1,4-1,5%)
PROWIZJA_STALA = 1.10      # zł za transakcję (S: ok. 0,25 EUR)

# Koszty stałe miesięczne (netto)
KOSZTY_STALE_MIES = {
    "domena (rozłożona na 12 mies.)": 8.0,    # (S) domena .pl ok. 100 zł/rok po pierwszym roku
    "e-mail marketing (plan darmowy)": 0.0,   # (S) darmowy plan do ok. 1 000 adresów
    "hosting (GitHub Pages)": 0.0,
    "fakturowanie (w ramach Instal-tig)": 0.0, # założenie: istniejące narzędzie/księgowa
}

# Koszty jednorazowe na start (netto) - wariant budżetu "bazowy"
BUDZETY_STARTOWE = {
    "Minimum":  {"domena": 60, "test reklam (1 mies.)": 0,   "sprawdzenie regulaminu": 0,   "zapas": 100},
    "Bazowy":   {"domena": 60, "test reklam (1 mies.)": 300, "sprawdzenie regulaminu": 0,   "zapas": 200},
    "Pełny":    {"domena": 60, "test reklam (2 mies.)": 600, "sprawdzenie regulaminu": 500, "zapas": 300},
}

# Reklama (Meta) - tylko na darmową ściągę, sprzedaż przez e-maile
CPC = 1.20                  # (S) zł za kliknięcie, ruch z grup branżowych/zainteresowań
KONW_ZAPIS = 0.25           # (S) z kliknięcia do zapisu po darmową ściągę
KONW_ZAPIS_ZAKUP = 0.04     # (S) zapis -> zakup w ciągu 30 dni (sekwencja e-mail)

# Scenariusze 12 mies.: ruch startowy, ruch w 12. mies. (liniowo), konwersja wizyta->zakup,
# sprzedaż bezpośrednia B2B (wiadomości właściciela + polecenia) w szt./mies., budżet reklam/mies.
SCENARIUSZE = {
    "ostrożny": dict(ruch_start=100, ruch_koniec=400,  konw=0.008, b2b_mies=0.3, reklama=0),
    "bazowy":   dict(ruch_start=200, ruch_koniec=1000, konw=0.015, b2b_mies=0.7, reklama=150),
    "dobry":    dict(ruch_start=400, ruch_koniec=2000, konw=0.020, b2b_mies=1.2, reklama=300),
}
MIESIACE = 12
CEL_MIES = 3000.0           # cel właściciela, zł netto/mies.


# ---------------------------------------------------------------- OBLICZENIA
def marza_na_zamowienie(netto):
    brutto = netto * (1 + VAT)
    prowizja = brutto * PROWIZJA_PROC + PROWIZJA_STALA
    return netto - prowizja, prowizja


def srednie_zamowienie(produkty):
    sr_netto = sum(c * u for c, u in produkty.values())
    sr_marza = sum(marza_na_zamowienie(c)[0] * u for c, u in produkty.values())
    return sr_netto, sr_marza


def tabela(naglowki, wiersze):
    szer = [max(len(str(x)) for x in kol) for kol in zip(naglowki, *wiersze)]
    linia = "+".join("-" * (s + 2) for s in szer)
    def fmt(w):
        return "|".join(f" {str(x):>{s}} " for x, s in zip(w, szer))
    print(fmt(naglowki)); print(linia)
    for w in wiersze:
        print(fmt(w))
    print()


def zl(x):
    return f"{x:,.0f}".replace(",", " ")


def main():
    print("=" * 70)
    print("1. EKONOMIA JEDNOSTKOWA (wariant A)")
    print("=" * 70)
    wiersze = []
    for nazwa, (netto, udz) in PRODUKTY.items():
        m, p = marza_na_zamowienie(netto)
        wiersze.append([nazwa, f"{netto:.2f}", f"{netto*(1+VAT):.2f}", f"{p:.2f}", f"{m:.2f}", f"{udz:.0%}"])
    tabela(["Produkt", "Netto", "Brutto", "Prowizja", "Marża netto", "Udział (S)"], wiersze)
    sr_netto, sr_marza = srednie_zamowienie(PRODUKTY)
    print(f"Średnie zamówienie: {sr_netto:.2f} zł netto, marża po prowizji: {sr_marza:.2f} zł\n")

    stale = sum(KOSZTY_STALE_MIES.values())
    print("=" * 70)
    print("2. PRÓG RENTOWNOŚCI")
    print("=" * 70)
    wiersze = []
    for reklama in (0, 150, 300):
        koszt = stale + reklama
        szt = koszt / sr_marza
        wiersze.append([f"{reklama} zł", f"{koszt:.0f} zł", f"{szt:.1f}"])
    tabela(["Reklama/mies.", "Koszty stałe/mies.", "Zamówień/mies. do zera"], wiersze)
    for nazwa, b in BUDZETY_STARTOWE.items():
        s = sum(b.values())
        print(f"Zwrot budżetu startowego '{nazwa}' ({s} zł): {s / sr_marza:.0f} zamówień łącznie")
    szt_cel = (CEL_MIES + stale) / sr_marza
    print(f"\nCel {zl(CEL_MIES)} zł/mies. netto (bez reklam) = {szt_cel:.0f} zamówień/mies.")
    print(f"Przy konwersji 1,5% to ok. {zl(szt_cel / 0.015)} odwiedzin/mies.")
    print()

    print("=" * 70)
    print("3. KOSZT POZYSKANIA KLIENTA Z REKLAMY (lejek: reklama -> ściąga -> e-mail -> zakup)")
    print("=" * 70)
    cac = CPC / (KONW_ZAPIS * KONW_ZAPIS_ZAKUP)
    koszt_zapisu = CPC / KONW_ZAPIS
    print(f"Koszt zapisu: {koszt_zapisu:.2f} zł, koszt klienta (CAC): {cac:.2f} zł")
    print(f"Marża średniego zamówienia: {sr_marza:.2f} zł -> marża/CAC = {sr_marza / cac:.2f}")
    print("Wniosek: reklama opłaca się tylko, gdy marża/CAC > 1 (lub doliczymy kolejne zakupy).\n")

    print("=" * 70)
    print("4. WARIANTY CENNIKA - średnia marża i zamówienia potrzebne do celu")
    print("=" * 70)
    wiersze = []
    for nazwa, (pb, sz, ko) in WARIANTY_CEN.items():
        prod = {"p": (pb / (1 + VAT), 0.60), "s": (sz, 0.25), "k": (ko, 0.15)}
        n, m = srednie_zamowienie(prod)
        wiersze.append([nazwa, f"{pb} zł brutto", f"{sz} zł netto", f"{ko} zł netto",
                        f"{m:.2f}", f"{(CEL_MIES + stale) / m:.0f}"])
    tabela(["Wariant", "Poradnik", "Szablony", "Komplet", "Śr. marża", "Zam./mies. do celu"], wiersze)

    print("=" * 70)
    print("5. SCENARIUSZE NA 12 MIESIĘCY (wariant A, budżet startowy 'Bazowy')")
    print("=" * 70)
    start = sum(BUDZETY_STARTOWE["Bazowy"].values())
    podsum = []
    for nazwa, s in SCENARIUSZE.items():
        narast = -start
        zam_suma = przych_suma = 0.0
        mies_zwrotu = None
        ostatni = None
        for m in range(1, MIESIACE + 1):
            ruch = s["ruch_start"] + (s["ruch_koniec"] - s["ruch_start"]) * (m - 1) / (MIESIACE - 1)
            zam = ruch * s["konw"] + s["b2b_mies"]
            przych = zam * sr_netto
            zysk = zam * sr_marza - stale - s["reklama"]
            narast += zysk
            zam_suma += zam; przych_suma += przych
            if mies_zwrotu is None and narast >= 0:
                mies_zwrotu = m
            ostatni = (ruch, zam, przych, zysk)
        podsum.append([nazwa, f"{ostatni[0]:.0f}", f"{ostatni[1]:.1f}", zl(ostatni[2]), zl(ostatni[3]),
                       f"{zam_suma:.0f}", zl(przych_suma), zl(narast),
                       str(mies_zwrotu) if mies_zwrotu else "brak"])
    tabela(["Scenariusz", "Ruch m12", "Zam. m12", "Przych. m12", "Zysk m12",
            "Zam. 12m", "Przych. 12m", "Wynik 12m", "Zwrot (mies.)"], podsum)
    print(f"Budżet startowy 'Bazowy': {start} zł. Cel właściciela: {zl(CEL_MIES)} zł/mies.")


if __name__ == "__main__":
    main()
