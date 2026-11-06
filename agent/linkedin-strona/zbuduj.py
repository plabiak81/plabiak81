#!/usr/bin/env python3
"""Buduje stronę z dzisiejszym postem (LinkedIn albo Facebook) z plików *.md repozytorium Instal-Tig.

Użycie:
    python3 -I zbuduj.py <ścieżka do Instal-Tig> <link do PR> <plik wyjściowy .html> [folder] [szablon]

folder: linkedin (domyślnie) albo facebook; szablon: plik szablonu, domyślnie
szablon.html obok tego skryptu.
Bierze najnowszy plik z <folder>/ (po nazwie) jako post na dziś, pozostałe
pokazuje niżej jako wcześniejsze posty. Zdjęcie dzisiejszego posta osadza
w stronie (artefakt nie może ładować obrazków z innych adresów).
"""
import base64
import html
import json
import pathlib
import re
import sys

SITE = "https://plabiak81.github.io/Instal-Tig/"
MIESIACE = ["stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca",
            "sierpnia", "września", "października", "listopada", "grudnia"]


def sekcja(tekst, nazwa):
    m = re.search(r"^## " + re.escape(nazwa) + r"\n\n(.*?)(?=\n## |\Z)", tekst, re.S | re.M)
    return m.group(1).strip() if m else ""


def pole(tekst, nazwa):
    m = re.search(r"^- " + re.escape(nazwa) + r": (.+)$", tekst, re.M)
    return m.group(1).strip() if m else ""


def wczytaj(plik):
    t = plik.read_text(encoding="utf-8")
    tytul = re.search(r"^# Post (?:LinkedIn|Facebook): (.+)$", t, re.M).group(1).strip()
    return {
        "plik": plik.name,
        "tytul": tytul,
        "data": pole(t, "Data przygotowania"),
        "artykul": pole(t, "Artykuł"),
        "zdjecie": pole(t, "Zdjęcie"),
        "alt": pole(t, "Tekst alternatywny zdjęcia"),
        "ujecie": pole(t, "Ujęcie"),
        "tresc": sekcja(t, "Treść posta"),
        "komentarz": sekcja(t, "Pierwszy komentarz"),
        "alternatywa": sekcja(t, "Wersja z linkiem w treści (alternatywa)"),
    }


def wymiary_webp(b):
    c = b[12:16]
    if c == b"VP8X":
        return 1 + int.from_bytes(b[24:27], "little"), 1 + int.from_bytes(b[27:30], "little")
    if c == b"VP8 ":
        return int.from_bytes(b[26:28], "little") & 0x3FFF, int.from_bytes(b[28:30], "little") & 0x3FFF
    bity = int.from_bytes(b[21:25], "little")
    return (bity & 0x3FFF) + 1, ((bity >> 14) & 0x3FFF) + 1


def data_pl(iso):
    r, m, d = iso.split("-")
    return f"{int(d)} {MIESIACE[int(m) - 1]} {r}"


def main():
    repo, pr, wyjscie = pathlib.Path(sys.argv[1]), sys.argv[2], pathlib.Path(sys.argv[3])
    folder = sys.argv[4] if len(sys.argv) > 4 else "linkedin"
    szablon_plik = pathlib.Path(sys.argv[5]) if len(sys.argv) > 5 else pathlib.Path(__file__).parent / "szablon.html"
    pliki = sorted((repo / folder).glob("*.md"), reverse=True)
    if not pliki:
        sys.exit(f"Brak plików w {folder}/")
    posty = [wczytaj(p) for p in pliki]
    dzis = posty[0]

    obraz = repo / dzis["zdjecie"].replace(SITE, "")
    obraz_bajty = obraz.read_bytes()
    obraz_uri = "data:image/webp;base64," + base64.b64encode(obraz_bajty).decode()
    obraz_w, obraz_h = wymiary_webp(obraz_bajty)

    szablon = szablon_plik.read_text(encoding="utf-8")
    dane = {
        "dzis": dzis,
        "pr": pr,
        "wczesniejsze": [{k: p[k] for k in ("tytul", "data", "artykul", "tresc", "komentarz")} for p in posty[1:]],
    }
    zastap = {
        "{{TYTUL}}": html.escape(dzis["tytul"]),
        "{{DATA}}": data_pl(dzis["data"]),
        "{{UJECIE}}": html.escape(dzis["ujecie"]),
        "{{ARTYKUL}}": html.escape(dzis["artykul"]),
        "{{PR}}": html.escape(pr),
        "{{ZDJECIE_URL}}": html.escape(dzis["zdjecie"]),
        "{{ZDJECIE_URI}}": obraz_uri,
        "{{ZDJECIE_W}}": str(obraz_w),
        "{{ZDJECIE_H}}": str(obraz_h),
        "{{ALT}}": html.escape(dzis["alt"]),
        "{{DANE_JSON}}": json.dumps(dane, ensure_ascii=False).replace("</", "<\\/"),
    }
    for k, v in zastap.items():
        szablon = szablon.replace(k, v)
    wyjscie.write_text(szablon, encoding="utf-8")
    print(f"Zapisano {wyjscie} ({len(szablon) // 1024} KB), post: {dzis['plik']}, wcześniejszych: {len(posty) - 1}")


if __name__ == "__main__":
    main()
