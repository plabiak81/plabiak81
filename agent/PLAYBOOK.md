# Nocny agent Instal-tig: instrukcja pracy

Ten plik to instrukcja dla agenta Claude, który co noc pracuje nad stroną
https://plabiak81.github.io/Instal-Tig/ (repozytorium `plabiak81/Instal-Tig`).
Agent czyta go na początku każdej zmiany. Żeby zmienić jego pracę, wystarczy
edytować ten plik: tematy, zasady, limity.

## Cel

Rano właściciel ma znaleźć **jeden gotowy do przejrzenia pull request**
w `plabiak81/Instal-Tig`, który przybliża stronę do większej liczby zapytań
od klientów (zakłady spożywcze, chemiczne, przemysłowe szukające wykonawcy
instalacji i konstrukcji ze stali nierdzewnej). Agent niczego nie publikuje
sam: strona zmienia się dopiero, gdy właściciel scali PR.

## Przebieg nocnej zmiany

1. **Start.** Sesja agenta ma już sklonowane `plabiak81/Instal-Tig`
   z prawem zapisu. Zacznij od świeżej gałęzi domyślnej:
   `git fetch origin` i `git checkout -B nocny-agent/RRRR-MM-DD origin/<gałąź domyślna>`
   (zmiany z poprzednich nocy są w PR, nie na gałęzi domyślnej). Jeśli push
   się nie uda, przejdź do sekcji „Plan B”.
2. **Rozpoznanie.** Przeczytaj `blog/index.html`, wszystkie artykuły
   w `blog/`, `sitemap.xml` i listę otwartych PR w `plabiak81/Instal-Tig`.
   - Jeśli otwartych PR z gałęzi `nocny-agent/*` jest **3 lub więcej**, nie
     pisz nowego artykułu: właściciel nie nadąża z przeglądaniem. Zrób tylko
     krok 4 (przegląd techniczny) i, jeśli w otwartych PR są komentarze
     właściciela, popraw te PR zgodnie z komentarzami.
3. **Nowy artykuł na Blog Ekspercki** (jeden na noc):
   - Weź pierwszy temat z listy „Tematy” poniżej, którego jeszcze nie ma na
     blogu ani w otwartym PR. Gdy lista się wyczerpie, wymyśl temat w tym
     samym duchu (pytanie, które realnie zadaje technolog lub kierownik
     utrzymania ruchu przed zamówieniem instalacji).
   - Skopiuj strukturę istniejącego artykułu (np. `blog/stal-304-czy-316l.html`):
     ten sam `<head>` z meta description, canonical, Open Graph,
     `BlogPosting` i `BreadcrumbList` w JSON-LD, ten sam nagłówek, menu
     i stopka. Ustaw `datePublished` i `dateModified` na dzisiejszą datę.
   - Nazwa pliku: krótki slug bez polskich znaków, np. `blog/pasywacja-stali-nierdzewnej.html`.
   - Dodaj kartę artykułu na górze listy w `blog/index.html`, wpis w
     `sitemap.xml` (oraz zaktualizuj `lastmod` strony bloga) i 1–2 linki
     wewnętrzne: z nowego artykułu do starszych i do `wycena.html`.
   - Zakończ artykuł krótkim wezwaniem do działania: telefon, e-mail,
     „Wycena online”.
   - **Zdjęcie.** Każdy artykuł dostaje jedno zdjęcie z `img/realizacje/`.
     Wybierz je po opisach `alt` z galerii w `index.html` tak, żeby pasowało
     do tematu; jeśli się da, inne niż w 2–3 ostatnich artykułach. Nie
     dodawaj nowych plików zdjęć i nie zmieniaj istniejących. Wzoruj się na
     dowolnym artykule, który ma już zdjęcie, i ustaw je w czterech miejscach:
     - w `<head>`: `og:image` (pełny adres pliku `realizacja-NN.webp`),
       `og:image:width`, `og:image:height`, `og:image:alt` (tekst `alt`
       z galerii) oraz `twitter:card` = `summary_large_image`,
     - w JSON-LD `BlogPosting`: `"image"` = ten sam adres zdjęcia,
     - pod `<h1>`: blok `<figure class="article-photo">` z `<img>` (`src`
       pełnej wersji, `srcset` z wersją `-min` i pełną, `sizes`, `width`,
       `height`, `alt`, `fetchpriority="high"`) i `<figcaption>` w postaci
       „<alt>. Realizacja Instal-tig.”,
     - na karcie w `blog/index.html`: na początku `<article class="post-card">`
       link `<a … class="post-card-photo" tabindex="-1" aria-hidden="true">`
       z `<img>` wersji `-min` (`width`/`height` wersji `-min`, `alt=""`,
       `decoding="async"`). Karta, która przestaje być pierwsza na liście,
       ma mieć `loading="lazy"`; nowa, pierwsza karta — bez niego.
     Wymiary odczytaj z pliku (pełne zdjęcia mają 1600×1200 albo 1200×1600,
     wersje `-min` 640×480 albo 480×640). Jeśli w `styles.css` nie ma jeszcze
     klas `.article-photo` i `.post-card-photo`, dodaj tylko `og:image`
     i `"image"` w JSON-LD, a w raporcie napisz, że czeka PR ze stylami zdjęć.
4. **Przegląd techniczny strony** (każdej nocy, szybko):
   - Wszystkie linki wewnętrzne (`href`, `src`) prowadzą do istniejących plików.
   - Każda strona z `sitemap.xml` istnieje i każda publiczna strona jest w sitemapie.
   - JSON-LD w każdym pliku jest poprawnym JSON-em (sprawdź parserem).
   - Każda strona ma `<title>`, `meta description` i `canonical` na adres
     `https://plabiak81.github.io/Instal-Tig/...`.
   - Każdy artykuł bloga ma zdjęcie (`og:image` inne niż logo, blok
     `article-photo`), a każda karta w `blog/index.html` ma `post-card-photo`.
   - Proste, pewne poprawki dołóż do tego samego PR. Rzeczy wątpliwe tylko
     opisz w raporcie.
5. **Pull request.** Gałąź `nocny-agent/RRRR-MM-DD`, jeden commit lub kilka
   małych, opis commitów po polsku. Otwórz PR do gałęzi domyślnej z opisem
   w formie **raportu porannego** (szablon niżej). Nie scalaj go.
6. **Podsumowanie.** Zakończ sesję krótkim podsumowaniem po polsku
   (2–4 zdania + link do PR). To ono trafia rano jako powiadomienie.

## Szablon raportu porannego (opis PR)

```
## Co zrobiłem tej nocy
- Nowy artykuł: „<tytuł>” (<plik>) — dla kogo i na jakie wyszukiwanie celuje
- Przegląd techniczny: <co sprawdziłem, co poprawiłem>

## Do sprawdzenia przez Ciebie (2 minuty)
- <fakty, które warto potwierdzić z własnego doświadczenia, np. typowe czasy, praktyka firmy>

## Uwagi / pomysły na kolejne noce
- <max 3 punkty>
```

## Zasady (nie łam ich)

- **Język i styl:** polski, prosto i konkretnie, jak na stronie głównej
  („Spawamy rurociągi…”), bez lania wody i bez anglicyzmów, gdy jest polskie
  słowo. Artykuł 600–1100 słów, śródtytuły `<h2>`, listy tam, gdzie pomagają.
- **Prawda przede wszystkim:** pisz tylko wiedzę techniczną, której jesteś
  pewien (normy, gatunki stali, technologia). **Nie wymyślaj** realizacji,
  nazw klientów, cen, terminów, certyfikatów, liczby lat doświadczenia ani
  opinii. Jeśli coś zależy od praktyki firmy, wypisz to w „Do sprawdzenia”.
- **Nie zmieniaj** danych kontaktowych, nazwy spółki, formularza
  w `wycena.html`, `cookies.js`, polityki prywatności ani zdjęć realizacji.
- **Nie dodawaj** zewnętrznych skryptów, śledzenia ani nowych bibliotek.
- **Nie scalaj** PR, nie pushuj na gałąź domyślną, nie usuwaj gałęzi, nie
  zamykaj PR właściciela.
- Repozytorium `plabiak81/plabiak81` tylko czytasz (ta instrukcja), nie zmieniasz go.

## Plan B (brak dostępu do Instal-Tig)

Jeśli nie da się wypchnąć gałęzi ani otworzyć PR, nie próbuj obchodzić
blokady. Zostaw commit lokalnie (sesja jest stała, więc przetrwa do rana)
i w podsumowaniu napisz wyraźnie, na czym utknąłeś i co właściciel ma
zrobić. Następnej nocy spróbuj wypchnąć zaległą gałąź przed nową pracą.

## Tematy (od góry; nie trzeba wykreślać, agent sam sprawdza, co już jest)

1. Pasywacja i trawienie stali nierdzewnej po spawaniu: kiedy są konieczne
2. Chropowatość powierzchni Ra w instalacjach spożywczych: co oznacza 0,8 µm
3. Rury nierdzewne: norma DIN 11850 czy ISO 1127 — jak nie pomylić wymiarów
4. Spawanie orbitalne a ręczne TIG: kiedy które się opłaca
5. Mycie CIP: jak zaprojektować instalację, żeby dała się dobrze umyć
6. Martwe strefy w rurociągach: zasada 3D i jak jej przestrzegać
7. Korozja stali nierdzewnej: skąd się bierze rdza na „nierdzewce”
8. Pomosty i podesty przemysłowe: wymagania BHP dla barierek i schodów
9. Konstrukcje wsporcze pod rurociągi: rozstaw podpór i kompensacja wydłużeń
10. Jak przygotować zapytanie ofertowe na instalację, żeby szybko dostać wycenę
11. Odbiór instalacji: dokumentacja, próby ciśnieniowe, protokoły spoin
12. Stal nierdzewna w przemyśle chemicznym: kiedy 316L to za mało (1.4539, duplex)
13. Osłony maszyn ze stali nierdzewnej: co mówi dyrektywa maszynowa
14. Zawory i armatura w instalacjach higienicznych: połączenia DIN 11851, clamp, spawane
15. Serwis i modernizacja starych instalacji: przeróbka bez długiego postoju
