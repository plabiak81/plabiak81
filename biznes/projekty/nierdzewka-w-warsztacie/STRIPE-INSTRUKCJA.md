# Stripe - uruchomienie kasy na stronie MEGA-SPAW

Koszt: założenie i utrzymanie konta 0 zł, bez abonamentu. Stripe pobiera tylko prowizję od każdej udanej płatności (aktualny cennik: https://stripe.com/pl/pricing). Zapytaj księgową o rozliczenie faktur prowizyjnych Stripe (firma z Irlandii) przy zwolnieniu z VAT - pytanie nr 9 w `06-formalnosci.md`.

## 1. Konto (~20-30 min, raz)
1. Wejdź na https://dashboard.stripe.com/register - e-mail: mojeacount@gmail.com, kraj: **Polska**.
2. Aktywuj konto (Stripe poprowadzi): typ działalności **jednoosobowa działalność gospodarcza**, nazwa **MEGA-SPAW**, NIP, adres firmy z CEIDG, Twoje dane, numer konta bankowego firmy.
3. Branża / opis: „Sprzedaż treści cyfrowych: poradnik PDF i szablony dokumentacji spawalniczej”. Strona: `https://plabiak81.github.io/plabiak81/mega-spaw/`.

## 2. Metody płatności (~2 min)
Ustawienia (koło zębate) → **Payments → Payment methods** → włącz **BLIK** i **Przelewy24** (karty są włączone domyślnie).

## 3. Dane publiczne (~2 min)
Ustawienia → **Business → Public details**: nazwa „MEGA-SPAW”, e-mail wsparcia mojeacount@gmail.com, pole adresu publicznego (statement/receipt address) zostaw puste albo wpisz tylko „56-300 Sułów”, jeśli Stripe pozwoli,
- Terms of service: `https://plabiak81.github.io/plabiak81/mega-spaw/regulamin.html`
- Privacy policy: `https://plabiak81.github.io/plabiak81/mega-spaw/polityka-prywatnosci.html`

## 4. Trzy linki płatności (~10 min)
**Payment Links → + New** - zrób 3 razy:

| Produkt (nazwa) | Cena | Waluta |
|---|---|---|
| Poradnik „Nierdzewka bez przebarwień” + 6 ściąg | 49,00 | PLN |
| Szablony warsztatu - 8 dokumentów | 179,00 | PLN |
| Komplet: szablony + poradnik + aktualizacje 12 mies. | 199,00 | PLN |

W każdym linku:
- Typ: **One-time** (jednorazowo), produkt **bez podatku** (zwolnienie z VAT - nie włączaj „Stripe Tax”).
- **Collect customers' names / business names** i **Allow customers to add tax ID** (NIP do faktury) - włącz.
- Zakładka **After payment** → **Don't show confirmation page** → przekieruj na:
  `https://plabiak81.github.io/plabiak81/mega-spaw/dziekujemy.html?zakup=1`
- Zapisz i skopiuj link (zaczyna się od `https://buy.stripe.com/...`).

## 5. Wyślij mi 3 linki
Wkleję je w stronę (`mega-spaw/app.js`), sprawdzę i opublikuję. Pierwszy zakup zrób sam testowo za 49 zł i zwróć sobie płatność w panelu (Payments → Refund).

## Po każdej sprzedaży
Stripe wyśle Ci e-mail o płatności. Wyślij klientowi paczkę ZIP z prywatnego repo (`gotowe/PAKIET-*.zip`) i fakturę bez VAT - najpóźniej w 7 dni (tak mówi regulamin).
