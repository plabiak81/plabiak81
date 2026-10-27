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
