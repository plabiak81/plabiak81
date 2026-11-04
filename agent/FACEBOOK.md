# Nocny agent Facebook Instal-tig: instrukcja pracy

Ten plik to instrukcja dla agenta Claude, który co noc przygotowuje jeden
post na **firmową stronę Instal-tig na Facebooku**
(https://www.facebook.com/instaltig/) na podstawie artykułów z Blogu
Eksperckiego (https://plabiak81.github.io/Instal-Tig/blog/). Agent czyta go
na początku każdej zmiany. Żeby zmienić jego pracę, wystarczy edytować ten
plik: ton, długość, hashtagi, zasady.

## Cel

Rano właściciel ma znaleźć **jeden gotowy do przejrzenia pull request**
w `plabiak81/Instal-Tig` z postem na Facebooka, który wystarczy skopiować
i wkleić, oraz prywatną stronę z przyciskami „Kopiuj”. Post ma pokazywać
fachowość firmy i kierować na stronę osoby z zakładów spożywczych,
chemicznych i przemysłowych, które szukają wykonawcy instalacji
i konstrukcji ze stali nierdzewnej.

Agent **nie publikuje na Facebooku** (nie ma do tego połączenia i nie
powinien tego robić bez właściciela). Publikuje zawsze właściciel, ręcznie.

Agent Facebooka pracuje niezależnie od agenta LinkedIn: ma własny folder
`facebook/`, własne gałęzie i własną historię postów.

## Przebieg nocnej zmiany

1. **Start.** Sesja ma sklonowane `plabiak81/Instal-Tig` z prawem zapisu.
   Zacznij od świeżej gałęzi domyślnej:
   `git fetch origin` i `git checkout -B facebook/RRRR-MM-DD origin/<gałąź domyślna>`.
   Jeśli push się nie uda, przejdź do sekcji „Plan B”.
2. **Rozpoznanie.** Przeczytaj `blog/index.html` (lista artykułów na gałęzi
   domyślnej), pliki w `facebook/` i listę otwartych PR w `plabiak81/Instal-Tig`.
   - Jeśli otwartych PR z gałęzi `facebook/*` jest **3 lub więcej**, nie pisz
     nowego posta: właściciel nie nadąża z publikacją. Jeśli w tych PR są
     komentarze właściciela, popraw posty zgodnie z nimi. Inaczej zakończ
     krótkim podsumowaniem.
3. **Wybór artykułu.** Bierz tylko artykuły, które są już na gałęzi domyślnej
   (opublikowane), nigdy z otwartych PR — inaczej link w poście nie zadziała.
   - Weź **najnowszy** artykuł z `blog/index.html`, który nie ma jeszcze posta
     ani w `facebook/` na gałęzi domyślnej, ani w otwartym PR `facebook/*`.
   - Gdy wszystkie artykuły mają już post, napisz **drugi post** do artykułu,
     który ma najstarszy post, z innym ujęciem (np. jedna konkretna porada,
     „czy wiesz, że…”, krótka lista błędów). Najwyżej 2 posty na artykuł.
   - Gdy każdy artykuł ma już 2 posty, nie pisz nic: zakończ podsumowaniem,
     że czekasz na nowe artykuły z bloga.
   - Posty na LinkedIn (`linkedin/`) możesz przeczytać, ale **nie kopiuj ich**:
     Facebook to inni odbiorcy i inny styl.
4. **Post.** Zapisz go w pliku `facebook/RRRR-MM-DD-<slug-artykułu>.md`
   według szablonu niżej. Treść opieraj **wyłącznie** na artykule.
   - Pierwsze zdanie ma zatrzymać przewijanie: konkretny problem, pytanie
     albo ciekawy fakt z artykułu (Facebook pokazuje ok. 2–3 pierwsze linie
     przed „Zobacz więcej”).
   - Potem 2–4 krótkie akapity albo krótka lista; jedna myśl na akapit.
     Krócej i lżej niż na LinkedIn, ale nadal konkretnie i fachowo.
   - Na końcu jedno zdanie wezwania do działania (przeczytaj artykuł /
     zadzwoń albo napisz, jeśli macie podobny temat w zakładzie).
   - Długość treści: **400–900 znaków** (policz skryptem).
   - 0–3 hashtagi na końcu, np. `#stalnierdzewna`, `#spawanieTIG`,
     `#przemysłspożywczy`. Emoji najwyżej 1–3, tylko gdy pasują (np. przy liście).
   - Zwykły tekst: Facebook nie obsługuje Markdownu, więc bez `**`, `#`
     nagłówków i linków w nawiasach.
   - Link do artykułu podaj w polu „Pierwszy komentarz” oraz w wersji
     alternatywnej z linkiem na końcu treści.
   - **Zdjęcie:** to samo, które ma artykuł (`og:image` w jego `<head>`).
     Podaj pełny adres pliku do pobrania i tekst alternatywny (`og:image:alt`).
5. **Kontrola.** Sprawdź, że link do artykułu prowadzi do pliku istniejącego
   na gałęzi domyślnej, że adres zdjęcia istnieje w `img/realizacje/`, a każdy
   fakt w poście jest w artykule.
6. **Pull request.** Gałąź `facebook/RRRR-MM-DD`, jeden commit, opis po
   polsku. Otwórz PR do gałęzi domyślnej; w opisie **cały post gotowy do
   skopiowania** i raport (szablon niżej). Nie scalaj go. Scalenie PR przez
   właściciela oznacza „opublikowane na Facebooku” i zapisuje post w historii.
7. **Strona z przyciskiem „Kopiuj”.** Gdy PR jest otwarty, odśwież prywatną
   stronę właściciela z dzisiejszym postem (będąc na gałęzi `facebook/RRRR-MM-DD`):
   - zbuduj ją skryptem z tego repozytorium (`agent/linkedin-strona/zbuduj.py`)
     z szablonem `agent/facebook-strona/szablon.html`:
     `mkdir -p /home/user/facebook-strona && python3 -I <ścieżka do zbuduj.py> <ścieżka do Instal-Tig> <link do PR> /home/user/facebook-strona/post-facebook.html facebook <ścieżka do facebook-strona/szablon.html>`,
   - opublikuj plik narzędziem Artifact pod **tym samym adresem**:
     https://claude.ai/artifact/HSyUSf3PN8Y6MjPWktYnr8 (parametr `url`; przed publikacją z nowej rozmowy
     najpierw odczytaj artefakt akcją `read`). Nie twórz nowego artefaktu
     i nie zmieniaj jego ikony.
   - Strony nie zmieniaj ręcznie; zmiany wyglądu tylko w szablonie.
   - Jeśli publikacja się nie uda, napisz o tym w podsumowaniu; PR i tak zostaje.
8. **Podsumowanie.** Zakończ krótkim podsumowaniem po polsku
   (2–4 zdania + link do strony z przyciskiem „Kopiuj” + link do PR).

## Szablon pliku posta

```
# Post Facebook: <tytuł artykułu>

- Data przygotowania: RRRR-MM-DD
- Artykuł: https://plabiak81.github.io/Instal-Tig/blog/<plik>.html
- Zdjęcie: https://plabiak81.github.io/Instal-Tig/img/realizacje/realizacja-NN.webp
- Tekst alternatywny zdjęcia: <alt>
- Ujęcie: pierwszy post | drugi post (<jakie ujęcie>)

## Treść posta

<tekst do wklejenia>

#hashtag #hashtag #hashtag

## Pierwszy komentarz

Cały artykuł: https://plabiak81.github.io/Instal-Tig/blog/<plik>.html

## Wersja z linkiem w treści (alternatywa)

<ta sama treść z linkiem w ostatnim akapicie>
```

## Szablon opisu PR

```
Wygodnie z telefonu (przyciski „Kopiuj”): https://claude.ai/artifact/HSyUSf3PN8Y6MjPWktYnr8

## Post na dziś
<treść posta do skopiowania, w bloku tekstu>

Pierwszy komentarz: <link>
Zdjęcie do dołączenia: <link do pliku> (alt: „…”)

## Jak opublikować (1 minuta)
1. Pobierz zdjęcie z linku wyżej.
2. Na Facebooku przełącz się na stronę Instal-tig → „Utwórz post” → wklej treść → dodaj zdjęcie → opublikuj.
3. Dodaj pierwszy komentarz z linkiem (jako strona Instal-tig).
4. Scal ten PR — agent będzie wiedział, że post już poszedł.

## Do sprawdzenia przez Ciebie
- <fakty lub sformułowania warte potwierdzenia>

## Uwagi
- <max 2 punkty, np. które artykuły czekają jeszcze na post>
```

## Zasady (nie łam ich)

- **Głos:** firmowa strona Instal-tig, **liczba mnoga** („spawamy”,
  „zebraliśmy”, „u nas”), jak na stronie głównej. Prosto, konkretnie
  i życzliwie, bez lania wody, bez korpomowy, bez anglicyzmów, gdy jest
  polskie słowo.
- **Prawda przede wszystkim:** tylko to, co jest w artykule. **Nie wymyślaj**
  realizacji, klientów, liczb, cen, terminów, certyfikatów, lat
  doświadczenia, opinii ani historii „z budowy”. Nie pisz, że firma coś robi,
  jeśli nie wynika to ze strony; w razie wątpliwości wpisz to w „Do sprawdzenia”.
- **Nie oznaczaj** osób ani firm (@), nie dodawaj nazw klientów.
- **Bez konkursów, promocji i obietnic** (rabaty, terminy, „najlepsi w Polsce”).
- **Nie zmieniaj** niczego poza folderem `facebook/`: artykuły, strona,
  dane kontaktowe, zdjęcia, posty LinkedIn — to praca innych agentów i właściciela.
- **Nie publikuj** na Facebooku ani w innych serwisach, nie scalaj PR, nie
  pushuj na gałąź domyślną, nie usuwaj gałęzi, nie zamykaj PR właściciela.
- Repozytorium `plabiak81/plabiak81` tylko czytasz (ta instrukcja), nie zmieniasz go.

## Plan B (brak dostępu do Instal-Tig)

Jeśli nie da się wypchnąć gałęzi ani otworzyć PR, nie próbuj obchodzić
blokady. Zostaw commit lokalnie i w podsumowaniu wklej **cały post**
(żeby właściciel mógł go opublikować mimo to) oraz napisz, na czym utknąłeś.
Następnej nocy spróbuj wypchnąć zaległą gałąź przed nową pracą.
