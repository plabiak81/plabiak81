#!/usr/bin/env python3
"""Model liczb: Nierdzewka w warsztacie (poradnik PDF + pakiet szablonów).

Tylko biblioteka standardowa. Uruchom: python3 03-model.py
Wszystkie kwoty w PLN. Parametry oznaczone (S) to szacunki, nie dane rynkowe -
poprawiaj je po pierwszych tygodniach testu (metryki.md).

VAT: Instal-tig to JDG zwolniona podmiotowo z VAT (art. 113 ust. 1 ustawy o VAT).
Dopóki trwa zwolnienie, cena na stronie = kwota końcowa = przychód (brak VAT).
Ustaw VAT = 0.23, żeby zobaczyć, co się zmieni po utracie zwolnienia.
"""

# ---------------------------------------------------------------- PARAMETRY
VAT = 0.0                   # 0.0 = zwolnienie podmiotowe; 0.23 = po utracie zwolnienia
LIMIT_ZWOLNIENIA = 240_000  # zł sprzedaży rocznie od 2026 r. (art. 113 ust. 1) - cała firma
OBROT_INSTALTIG = None      # [[roczna sprzedaż Instal-tig bez nowego projektu, zł]] - uzupełnij

# Cennik - wariant B wybrany przez właściciela 2026-10-29. Ceny końcowe (bez VAT).
PRODUKTY = {
    # nazwa:            (cena_końcowa, udział_w_zamówieniach (S))
    "Poradnik PDF":      (49.00, 0.60),
    "Pakiet szablonów":  (179.00, 0.25),
    "Komplet":           (199.00, 0.15),
}

# Warianty cennika do porównania: poradnik, szablony, komplet (ceny końcowe)
WARIANTY_CEN = {
    "B - wybrany":  (49, 179, 199),
    "A - bazowy":   (69, 249, 279),
    "C - wysoki":   (89, 349, 389),
}

# Koszty zmienne na zamówienie
PROWIZJA_PROC = 0.015      # bramka płatności, % od kwoty (S: Stripe/P24 ok. 1,4-1,5%)
PROWIZJA_STALA = 1.10      # zł za transakcję (S: ok. 0,25 EUR)

# Koszty stałe miesięczne (zwolniony z VAT = koszty brutto, bez odliczenia VAT)
KOSZTY_STALE_MIES = {
    "domena (rozłożona na 12 mies.)": 10.0,   # (S) domena .pl ok. 120 zł/rok brutto po 1. roku
    "e-mail marketing (plan darmowy)": 0.0,   # (S) darmowy plan do ok. 1 000 adresów
    "hosting (GitHub Pages)": 0.0,
    "fakturowanie (w ramach Instal-tig)": 0.0, # założenie: istniejące narzędzie/księgowa
}

# Koszty jednorazowe na start (brutto - bez odliczenia VAT)
BUDZETY_STARTOWE = {
    "Minimum":  {"domena": 60, "test reklam": 0,   "sprawdzenie regulaminu": 0,   "zapas": 100},
    "Bazowy":   {"domena": 60, "test reklam": 300, "sprawdzenie regulaminu": 0,   "zapas": 200},
    "Pełny":    {"domena": 60, "test reklam": 600, "sprawdzenie regulaminu": 500, "zapas": 300},
}
BUDZET_WYBRANY = "Bazowy"   # założenie do potwierdzenia (właściciel: „bez preferencji”)

# Reklama (Meta) - tylko na darmową ściągę, sprzedaż przez e-maile
CPC = 1.20                  # (S) zł za kliknięcie
KONW_ZAPIS = 0.25           # (S) z kliknięcia do zapisu po darmową ściągę
KONW_ZAPIS_ZAKUP = 0.04     # (S) zapis -> zakup w ciągu 30 dni (sekwencja e-mail)

# Scenariusze 12 mies.: ruch startowy i w 12. mies. (liniowo), konwersja wizyta->zakup,
# sprzedaż bezpośrednia B2B (wiadomości właściciela + polecenia) w szt./mies., reklama zł/mies.
SCENARIUSZE = {
    "ostrożny": dict(ruch_start=100, ruch_koniec=400,  konw=0.010, b2b_mies=0.3, reklama=0),
    "bazowy":   dict(ruch_start=200, ruch_koniec=1000, konw=0.018, b2b_mies=0.7, reklama=150),
    "dobry":    dict(ruch_start=400, ruch_koniec=2000, konw=0.024, b2b_mies=1.2, reklama=300),
}
# Konwersje wyższe niż w wariancie A (niższa cena), ale nadal szacunki (S).
MIESIACE = 12
CEL_MIES = 3000.0           # cel właściciela, zł/mies. przychodu (przy zwolnieniu = netto)


# ---------------------------------------------------------------- OBLICZENIA
def netto(cena):
    return cena / (1 + VAT)


def marza_na_zamowienie(cena):
    prowizja = cena * PROWIZJA_PROC + PROWIZJA_STALA
    return netto(cena) - prowizja, prowizja


def srednie_zamowienie(produkty):
    sr_przych = sum(netto(c) * u for c, u in produkty.values())
    sr_marza = sum(marza_na_zamowienie(c)[0] * u for c, u in produkty.values())
    return sr_przych, sr_marza


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
    tryb = "zwolnienie z VAT (cena = przychód)" if VAT == 0 else f"VAT {VAT:.0%}"
    print("=" * 70)
    print(f"1. EKONOMIA JEDNOSTKOWA (wariant B, {tryb})")
    print("=" * 70)
    wiersze = []
    for nazwa, (cena, udz) in PRODUKTY.items():
        m, p = marza_na_zamowienie(cena)
        wiersze.append([nazwa, f"{cena:.2f}", f"{netto(cena):.2f}", f"{p:.2f}", f"{m:.2f}", f"{udz:.0%}"])
    tabela(["Produkt", "Cena", "Przychód", "Prowizja", "Marża", "Udział (S)"], wiersze)
    sr_przych, sr_marza = srednie_zamowienie(PRODUKTY)
    print(f"Średnie zamówienie: {sr_przych:.2f} zł przychodu, marża po prowizji: {sr_marza:.2f} zł\n")

    stale = sum(KOSZTY_STALE_MIES.values())
    print("=" * 70)
    print("2. PRÓG RENTOWNOŚCI")
    print("=" * 70)
    wiersze = []
    for reklama in (0, 150, 300):
        koszt = stale + reklama
        wiersze.append([f"{reklama} zł", f"{koszt:.0f} zł", f"{koszt / sr_marza:.1f}"])
    tabela(["Reklama/mies.", "Koszty stałe/mies.", "Zamówień/mies. do zera"], wiersze)
    for nazwa, b in BUDZETY_STARTOWE.items():
        s = sum(b.values())
        print(f"Zwrot budżetu startowego '{nazwa}' ({s} zł): {s / sr_marza:.0f} zamówień łącznie")
    szt_cel = (CEL_MIES + stale) / sr_marza
    print(f"\nCel {zl(CEL_MIES)} zł/mies. (bez reklam) = {szt_cel:.0f} zamówień/mies.")
    print(f"Przy konwersji 1,8% to ok. {zl(szt_cel / 0.018)} odwiedzin/mies.\n")

    print("=" * 70)
    print("3. KOSZT POZYSKANIA KLIENTA Z REKLAMY (reklama -> ściąga -> e-mail -> zakup)")
    print("=" * 70)
    cac = CPC / (KONW_ZAPIS * KONW_ZAPIS_ZAKUP)
    print(f"Koszt zapisu: {CPC / KONW_ZAPIS:.2f} zł, koszt klienta (CAC): {cac:.2f} zł")
    print(f"Marża średniego zamówienia: {sr_marza:.2f} zł -> marża/CAC = {sr_marza / cac:.2f}")
    print("Reklama na sprzedaż się nie spina, gdy marża/CAC < 1. Wtedy tylko test lub ruch darmowy.\n")

    print("=" * 70)
    print("4. WARIANTY CENNIKA - średnia marża i zamówienia potrzebne do celu")
    print("=" * 70)
    wiersze = []
    for nazwa, (pb, sz, ko) in WARIANTY_CEN.items():
        prod = {"p": (pb, 0.60), "s": (sz, 0.25), "k": (ko, 0.15)}
        _, m = srednie_zamowienie(prod)
        wiersze.append([nazwa, f"{pb} zł", f"{sz} zł", f"{ko} zł", f"{m:.2f}",
                        f"{(CEL_MIES + stale) / m:.0f}", f"{m / cac:.2f}"])
    tabela(["Wariant", "Poradnik", "Szablony", "Komplet", "Śr. marża", "Zam./mies. do celu",
            "Marża/CAC"], wiersze)

    print("=" * 70)
    print(f"5. SCENARIUSZE NA 12 MIESIĘCY (wariant B, budżet startowy '{BUDZET_WYBRANY}')")
    print("=" * 70)
    start = sum(BUDZETY_STARTOWE[BUDZET_WYBRANY].values())
    podsum = []
    przychody_roczne = {}
    for nazwa, s in SCENARIUSZE.items():
        narast = -start
        zam_suma = przych_suma = 0.0
        mies_zwrotu = None
        for m in range(1, MIESIACE + 1):
            ruch = s["ruch_start"] + (s["ruch_koniec"] - s["ruch_start"]) * (m - 1) / (MIESIACE - 1)
            zam = ruch * s["konw"] + s["b2b_mies"]
            przych = zam * sr_przych
            zysk = zam * sr_marza - stale - s["reklama"]
            narast += zysk
            zam_suma += zam; przych_suma += przych
            if mies_zwrotu is None and narast >= 0:
                mies_zwrotu = m
            ostatni = (ruch, zam, przych, zysk)
        przychody_roczne[nazwa] = przych_suma
        podsum.append([nazwa, f"{ostatni[0]:.0f}", f"{ostatni[1]:.1f}", zl(ostatni[2]), zl(ostatni[3]),
                       f"{zam_suma:.0f}", zl(przych_suma), zl(narast),
                       str(mies_zwrotu) if mies_zwrotu else "brak"])
    tabela(["Scenariusz", "Ruch m12", "Zam. m12", "Przych. m12", "Zysk m12",
            "Zam. 12m", "Przych. 12m", "Wynik 12m", "Zwrot (mies.)"], podsum)
    print(f"Budżet startowy '{BUDZET_WYBRANY}': {start} zł. Cel właściciela: {zl(CEL_MIES)} zł/mies.\n")

    print("=" * 70)
    print("6. LIMIT ZWOLNIENIA Z VAT (240 000 zł/rok - cała sprzedaż JDG)")
    print("=" * 70)
    for nazwa, p in przychody_roczne.items():
        if OBROT_INSTALTIG is None:
            print(f"{nazwa:>9}: nowy projekt dokłada {zl(p)} zł/rok -> zapas Instal-tig musi być "
                  f"co najmniej taki (obrót Instal-tig max {zl(LIMIT_ZWOLNIENIA - p)} zł)")
        else:
            razem = OBROT_INSTALTIG + p
            print(f"{nazwa:>9}: razem {zl(razem)} zł -> "
                  f"{'OK' if razem <= LIMIT_ZWOLNIENIA else 'PRZEKROCZENIE - utrata zwolnienia'}")
    if OBROT_INSTALTIG is None:
        print("\nUzupełnij OBROT_INSTALTIG, żeby sprawdzić zapas do limitu.")


if __name__ == "__main__":
    main()
