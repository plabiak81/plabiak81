# Generator ofert – wersja zaszyfrowana

Opublikowany generator (`5 Narzędzia/generator-ofert.html` tutaj oraz `oferty/index.html`
w repozytorium `plabiak81.github.io`) jest **zaszyfrowany**. Otwiera się tylko po podaniu
hasła dostępu, a potem PIN-u ustawionego na danym urządzeniu.

W repozytoriach nie ma ani hasła, ani jawnej wersji generatora.

## Zmiana generatora

Potrzebne jest hasło dostępu (zna je właściciel).

```bash
cd narzedzia/generator-ofert
GENOF_HASLO='...' node szyfruj.cjs odszyfruj "../../5 Narzędzia/generator-ofert.html" generator.jawny.html
# ... edycja generator.jawny.html (nie commitować – patrz .gitignore) ...
GENOF_HASLO='...' node szyfruj.cjs zaszyfruj generator.jawny.html nowy.html --klucz-z "../../5 Narzędzia/generator-ofert.html"
cp nowy.html "../../5 Narzędzia/generator-ofert.html"    # i ten sam plik do plabiak81.github.io/oferty/index.html
rm generator.jawny.html nowy.html
```

`--klucz-z` zachowuje klucz strony – urządzenia, na których wpisano już hasło, dalej otwierają generator samym PIN-em.

## Zmiana hasła dostępu

`node szyfruj.cjs nowe-haslo` generuje nowe hasło. Zaszyfruj jawny plik **bez** `--klucz-z`
(nowy klucz strony) – wtedy stare hasło przestaje działać, a każde urządzenie musi raz wpisać nowe.

## Bezpieczeństwo

- Treść: AES-GCM 256 losowym kluczem strony; klucz strony zaszyfrowany kluczem z hasła
  (PBKDF2-SHA256, 1 000 000 powtórzeń, losowa sól). Hasło: 20 losowych znaków (~98 bitów).
- Na urządzeniu: klucz strony zaszyfrowany PIN-em (PBKDF2-SHA256, 600 000 powtórzeń);
  3 błędne PIN-y = opóźnienie, 10 = usunięcie dostępu i danych z urządzenia.
- Dane (cennik, klienci, numeracja) są tylko w przeglądarce, zaszyfrowane PIN-em – nigdy w repozytorium.
- Starsze, niezaszyfrowane wersje generatora (bez danych) zostają w historii git.
