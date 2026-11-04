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
- **Czego nie robi:** nie publikuje na LinkedIn. Rano kopiujesz post z opisu
  PR, wklejasz na LinkedIn i scalasz PR — scalenie oznacza „opublikowane”.
  Gdy czekają 3 nieprzejrzane PR z postami, przestaje pisać nowe.

Instrukcja pracy: [`LINKEDIN.md`](LINKEDIN.md). Zmień ją, żeby zmienić ton,
długość postów albo hashtagi.
