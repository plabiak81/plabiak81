# 🛡️ Bezpiecznik — sprawdź, czy to oszustwo

Aplikacja na telefon: wklejasz SMS, e-mail lub link, a ona mówi, czy to oszustwo, i co zrobić dalej.

- Rozpoznaje najczęstsze oszustwa w Polsce: „dopłata do paczki”, „mamo, to mój nowy numer”, fałszywy konsultant banku, OLX/Vinted „odbierz płatność”, „odłączymy prąd”, fałszywe inwestycje i wygrane.
- Wykrywa podrobione adresy stron (np. `inpost-doplata.xyz` zamiast `inpost.pl`), skrócone linki i nietypowe znaki.
- Zakładka **Pomoc**: co zrobić, gdy już podałeś dane (bank, 828 828 828, zastrzeżenie PESEL, 8080, CERT Polska).
- Działa bez internetu i nic nie wysyła. Na Androidzie można „Udostępnić” wiadomość prosto do aplikacji.

Adres aplikacji: https://plabiak81.github.io/plabiak81/bezpiecznik/

## Pliki

| Plik | Co robi |
|---|---|
| `index.html` | Ekrany aplikacji (Sprawdź, Porady, Pomoc) |
| `analyzer.js` | Silnik rozpoznawania oszustw — tu dopisuje się nowe reguły i marki |
| `sw.js`, `manifest.webmanifest` | Instalacja na telefonie i działanie bez internetu |
| `prywatnosc.html` | Polityka prywatności (wymagana przez Google Play) |

## Jak wrzucić aplikację do Google Play

1. **Załóż konto dewelopera** na https://play.google.com/console (jednorazowo 25 USD).
2. **Zrób paczkę na Androida**: wejdź na https://www.pwabuilder.com, wpisz adres aplikacji, kliknij *Package for stores → Android → Generate*. Pobierzesz plik `.aab` (aplikacja) i `assetlinks.json`.
3. **Plik `assetlinks.json`** musi leżeć pod adresem `https://plabiak81.github.io/.well-known/assetlinks.json` — inaczej w aplikacji będzie widać pasek przeglądarki. Wymaga to repozytorium o nazwie `plabiak81.github.io` (albo własnej domeny).
4. **W Google Play Console** utwórz aplikację, wgraj plik `.aab`, dodaj opis, zrzuty ekranu i link do polityki prywatności: `https://plabiak81.github.io/plabiak81/bezpiecznik/prywatnosc.html`.
5. **Testy**: nowe konta prywatne muszą najpierw przeprowadzić test zamknięty (min. 12 testerów przez 14 dni). Potem można opublikować aplikację dla wszystkich.
