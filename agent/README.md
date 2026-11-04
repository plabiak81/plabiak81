# Nocny agent

Agent Claude, który pracuje nad stroną Instal-tig, kiedy śpisz.

- **Kiedy:** codziennie o 2:47 w nocy (czas polski), jako zaplanowane zadanie
  w Claude Code. Pracuje zawsze w tej samej sesji „Nocny agent Instal-tig”
  w claude.ai/code, która ma podpięte repozytorium Instal-Tig.
- **Co robi:** pisze jeden nowy artykuł na Blog Ekspercki, sprawdza stronę
  pod kątem zepsutych linków i błędów SEO, i otwiera pull request
  w `plabiak81/Instal-Tig` z raportem porannym.
- **Czego nie robi:** nie publikuje sam. Strona zmienia się dopiero, kiedy
  przejrzysz i scalisz PR. Gdy czekają 3 nieprzejrzane PR, przestaje pisać
  nowe artykuły, żeby Cię nie zasypać.
- **Rano:** podsumowanie z linkiem do PR jest na końcu sesji „Nocny agent Instal-tig”, a sam PR w Instal-Tig.

## Jak nim sterować

Wszystko, co agent robi, opisuje [`PLAYBOOK.md`](PLAYBOOK.md): listę tematów,
zasady stylu i zakazy. Zmień ten plik (np. dopisz tematy na górę listy),
a agent zastosuje zmiany następnej nocy.

W komentarzach do PR możesz pisać uwagi („skróć”, „dodaj akapit o…”);
agent przeczyta je kolejnej nocy i poprawi PR.

Zadanie wyłączysz lub zmienisz godzinę w claude.ai/code, w zakładce
zaplanowanych zadań, albo prosząc o to Claude.

# Nocny agent LinkedIn

Drugi agent Claude, który co noc przygotowuje jeden post na LinkedIn.

- **Kiedy:** codziennie o 4:47 w nocy (czas polski), po agencie blogowym,
  w tej samej sesji „Nocny agent Instal-tig”.
- **Co robi:** bierze najnowszy opublikowany artykuł z Blogu Eksperckiego,
  który nie ma jeszcze posta, pisze na jego podstawie post na LinkedIn
  na Twój prywatny profil, w pierwszej osobie (treść, hashtagi, pierwszy komentarz z linkiem, zdjęcie z artykułu)
  i otwiera PR w `plabiak81/Instal-Tig` (gałąź `linkedin/RRRR-MM-DD`,
  plik w folderze `linkedin/`).
- **Rano:** otwórz stronę https://claude.ai/artifact/D8x8RE6TWr5Kfw6qthcetJ
  (prywatna, widzisz ją tylko Ty). Jest tam dzisiejszy post z przyciskami
  „Kopiuj”, zdjęcie, komentarz z linkiem i wcześniejsze posty.
- **Czego nie robi:** nie publikuje na LinkedIn. Rano kopiujesz post (ze strony
  albo z opisu PR), wklejasz na LinkedIn i scalasz PR — scalenie oznacza „opublikowane”.
  Gdy czekają 3 nieprzejrzane PR z postami, przestaje pisać nowe.

Instrukcja pracy: [`LINKEDIN.md`](LINKEDIN.md). Zmień ją, żeby zmienić ton,
długość postów albo hashtagi.

# Nocny agent Facebook

Trzeci agent Claude, który co noc przygotowuje jeden post na firmową stronę
Instal-tig na Facebooku (https://www.facebook.com/instaltig/).

- **Kiedy:** codziennie o 5:17 w nocy (czas polski), po agentach blogowym
  i LinkedIn, w tej samej sesji „Nocny agent Instal-tig”.
- **Co robi:** bierze najnowszy opublikowany artykuł z bloga, który nie ma
  jeszcze posta na Facebooku, pisze krótszy post w tonie firmowym (liczba
  mnoga) i otwiera PR w `plabiak81/Instal-Tig` (gałąź `facebook/RRRR-MM-DD`,
  plik w folderze `facebook/`).
- **Rano:** otwórz stronę https://claude.ai/artifact/HSyUSf3PN8Y6MjPWktYnr8
  (prywatna, widzisz ją tylko Ty): post z przyciskami „Kopiuj”, zdjęcie
  i komentarz z linkiem.
- **Czego nie robi:** nie publikuje na Facebooku. Kopiujesz post, wklejasz
  na stronie Instal-tig i scalasz PR — scalenie oznacza „opublikowane”.

Instrukcja pracy: [`FACEBOOK.md`](FACEBOOK.md). Strona z przyciskami
budowana jest skryptem `linkedin-strona/zbuduj.py` z szablonem
`facebook-strona/szablon.html`.
