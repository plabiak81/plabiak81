# Propozycje poprawek strony - `biznes/projekty/nierdzewka-w-warsztacie/05-strona/`

Zgodnie ze zleceniem landingu nie budowałem od nowa. **Zrobiłem tylko og:image.** Teksty poniżej to propozycje do wklejenia. Każda ma: plik, miejsce, obecny tekst, nowy tekst i powód. Kolejność według wpływu na sprzedaż.

## Zrobione (już w plikach)

- `index.html`, `oferta.html` → `og:image` = `img/og-1200x630.png` (+ width/height/alt, `twitter:card`).
- `sciaga-kolory-nalotu.html` → `og:image` = `img/og-sciaga-1200x630.png` (+ dopisane brakujące `og:url`).
- Do `05-strona/img/` skopiowane też `okladka-poradnika-a4.jpg` (620 px) i `mockup-sciaga-kolory-nalotu.jpg` (800 px). Są pod propozycje P3 i P4. Dopóki ich nie wkleisz, nic nie robią.
- Adresy og:image są bezwzględne (`https://plabiak81.github.io/plabiak81/.../05-strona/img/...`). Zadziałają, kiedy strona będzie opublikowana na GitHub Pages pod adresem z `canonical`.

---

## P1. `oferta.html` - usuń „Najczęściej potrzebne” (musisz)
- **Obecnie:** `<span class="tag">Najczęściej potrzebne</span>` (karta „Szablony warsztatu”)
- **Nowe:** `<span class="tag">Dla warsztatu</span>`
- **Dlaczego:** przed pierwszą sprzedażą nie mamy danych, że to „najczęściej” wybierane. To twierdzenie bez dowodu (Omnibus i zasada „nie zmyślamy”). Wyróżnienie karty (`feature`) zostaje.

## P2. `index.html` - hero: dowód w jednym wierszu
- **Obecnie** (pod przyciskami): `Przygotowane przez Instal-tig - firmę, która spawa instalacje ze stali 304/316L dla przemysłu spożywczego i chemicznego.`
- **Nowe:**
```html
<p class="small" style="margin-top:16px">Pola, o które pytają zamawiający w przetargach: dziennik spawania z odwołaniem do WPS, protokół VT wg PN-EN ISO 17637, kryteria PN-EN ISO 5817, plan spawania i badań. Przygotowane przez Instal-tig - firmę, która spawa instalacje 304/316L dla przemysłu spożywczego i chemicznego.</p>
```
- **Dlaczego:** to nasz jedyny twardy dowód (`02-rynek.md`, wymagania Enei i SWZ). Mówi „to nie są wymyślone papiery”, zanim klient zapyta.

## P3. `index.html` - sekcja „Co dostajesz”: okładka poradnika
- **Gdzie:** w karcie „Poradnik „Nierdzewka bez przebarwień” + 6 ściąg”, zaraz po `<span class="tag">Na start</span>`.
- **Dodaj:**
```html
<img src="img/okladka-poradnika-a4.jpg" alt="Okładka poradnika PDF „Nierdzewka bez przebarwień” - spawanie TIG stali 304 i 316L" width="620" height="877" loading="lazy" style="display:block;width:160px;border-radius:6px;margin:8px 0 12px">
```
- **Dlaczego:** produkt cyfrowy bez obrazka wygląda, jakby go jeszcze nie było. Okładka robi z PDF-a „rzecz”.

## P4. `index.html` - sekcja `#sciaga`: mockup ściągi zamiast samego tekstu
- **Gdzie:** w lewej kolumnie, nad `<div class="eyebrow">Za darmo</div>`.
- **Dodaj:**
```html
<img src="img/mockup-sciaga-kolory-nalotu.jpg" alt="Ściąga A4 „Kolory nalotu na spoinie” - 10 odcieni od srebrnego do ciemnoszarego" width="800" height="800" loading="lazy" style="display:block;width:100%;max-width:360px;border-radius:10px;margin-bottom:16px">
```
- **Dlaczego:** ludzie zostawiają e-mail za coś, co widzą. Mockup pokazuje, że to gotowa kartka do powieszenia.

## P5. `index.html` - nowa sekcja „Jak to działa” (po „Znasz to?”)
```html
<section>
  <div class="wrap">
    <h2>Jak to działa</h2>
    <div class="grid g3">
      <div class="card"><h3>1. Wstawiasz logo i dane</h3><p>Otwierasz pliki w Wordzie i Excelu. Nagłówek firmy wpisujesz raz.</p></div>
      <div class="card"><h3>2. Wypełniasz według przykładu</h3><p>Obok każdego pustego dokumentu masz wypełniony przykład. Widać, co wpisać w każde pole.</p></div>
      <div class="card"><h3>3. Wysyłasz klientowi</h3><p>Drukujesz, podpisujesz, dołączasz do oferty albo do odbioru. Numer złącza łączy dziennik, WPS, VT i odbiór.</p></div>
    </div>
  </div>
</section>
```
- **Dlaczego:** strona mówi, CO jest w pakiecie, ale nie mówi, jak szybko się z niego korzysta. Obietnica „gotowe do wypełnienia dziś” potrzebuje tych 3 kroków.

## P6. `index.html` - CTA po sekcji „Uczciwie: czego te szablony nie robią”
- **Dodaj na końcu tej sekcji** (przed `</div></section>`):
```html
<div class="actions"><a class="btn" href="oferta.html">Zobacz wszystkie pola dokumentów</a></div>
```
- **Dlaczego:** po sekcji, która rozbraja obiekcje, czytelnik jest najbliżej decyzji, a dziś nie ma tam przycisku.

## P7. `index.html` - FAQ: 2 brakujące obiekcje (z `01-opakowanie.md`)
- **Dodaj po pierwszym `<details>`:**
```html
<details><summary>Wzory można znaleźć za darmo w internecie?</summary><p>Pojedyncze tak, zwykle po angielsku. Polskiego kompletu nie znaleźliśmy. Tu masz 8 dokumentów, które odwołują się do siebie (dziennik → WPS → protokół VT → odbiór), każdy z przykładem wypełnienia.</p></details>
<details><summary>Mam już swoje wzory. Po co mi to?</summary><p>Porównaj je ze spisem pól na <a href="oferta.html">stronie oferty</a>. Jeśli masz wszystko - nie kupuj.</p></details>
```

## P8. `oferta.html` - Komplet: pokaż różnicę 20 zł
- **Obecnie:** `<li>Szablony warsztatu (8 dokumentów)</li>` (karta Komplet)
- **Nowe:** `<li>Szablony warsztatu (8 dokumentów) - tylko 20 zł więcej niż same szablony</li>`
- **Dlaczego:** różnica 179 → 199 zł to najmocniejszy argument za kompletem, a dziś trzeba ją policzyć samemu.

## P9. `sciaga-kolory-nalotu.html` - przejście do poradnika na końcu ściągi
- **Obecnie** (ostatni akapit w `article`): `Instal-tig · instalacje i konstrukcje ze stali nierdzewnej · Pełny poradnik i szablony dokumentacji: <a href="oferta.html">oferta</a>`
- **Nowe** (pod `</article>`, poza wydrukiem):
```html
<div class="card no-print" style="margin-top:16px">
  <h2 style="font-size:20px;margin-top:0">To 1 z 6 ściąg z poradnika „Nierdzewka bez przebarwień”</h2>
  <p class="small">Pozostałe: parametry TIG wg grubości ścianki, wolfram, formowanie grani (przedmuch i przepływ), 304 czy 316L, czyszczenie i pasywacja. Plus poradnik PDF. 49 zł, cena końcowa.</p>
  <a class="btn" href="oferta.html">Zobacz poradnik</a>
</div>
```
- **Dlaczego:** ściąga to magnes. Dziś kończy się drobnym linkiem w stopce, a ktoś, kto ją doczytał, to najcieplejszy kupujący poradnika.

## P10. Drobne
- `index.html`, hero `eyebrow`: „Dla warsztatów i spawaczy TIG” → **„Dla warsztatów, które spawają nierdzewkę dla przemysłu”**. Na pierwszym ekranie mówimy do głównego klienta, a spawacz i tak ma swoją ściągę niżej.
- `index.html`, `og:description`: dziś jest dobrze. Zostaw.
- `oferta.html`, poradnik: „Atlas wad: zdjęcie, przyczyna, poprawka”. To obietnica, która wymaga Twoich 15-20 zdjęć (lista w `04-oferta/README.md`). Nie kasuj, ale zdjęcia muszą być gotowe przed wydaniem poradnika.
