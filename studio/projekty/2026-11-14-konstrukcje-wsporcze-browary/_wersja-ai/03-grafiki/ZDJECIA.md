# Zdjęcia i ilustracje - Tankownia na lata

## Co jest teraz w grafikach

| Element | Rodzaj | Gdzie |
|---|---|---|
| Tankownia (tanki CCT, pomost, schody, balustrada, wsporniki rur) | **Rysunek SVG** - nie zdjęcie, nie AI | wszystkie kadry poza `miniatura-yt-2` i slajdami 03-05, 07 |
| Wariant „przed”: malowana stal z rdzą | Rysunek SVG (`--rdza:1`) | `miniatura-yt-1-farba`, `wideo-01-hak`, `wideo-02-problem` |
| Wariant „miejsce na kolejny tank” | Rysunek SVG (`--t4:0; --duch:1`) | `miniatura-yt-3-kolejny-tank`, `wideo-06-rozbudowa` |
| Przekroje: ceownik / profil zamknięty, spoina przerywana / ciągła, stopa | Rysunki SVG | `wideo-04-detale` |
| Logo | `img/logo.png` | wszystkie kadry |

**Obrazy AI:** brak. Generator obrazów (Higgsfield) nie był dostępny w tej sesji, więc nie ma tu nic, co udaje zdjęcie.

## Na co podmienić (najlepiej Twoje zdjęcia)

1. **Pomost nad tankami** (miniatury 1 i 3, post oferta, OG): plan ogólny z poziomu posadzki, cała długość pomostu, widać schody. Bez ludzi, bez etykiet klienta (chyba że jest zgoda).
2. **Stary malowany pomost z rdzą** (miniatura 1, slajdy 01-02): tylko za zgodą właściciela browaru albo z Twojego archiwum „przed”. Bez nazwy browaru.
3. **Stopa z regulacją / spoina ciągła po trawieniu** (slajd 04, post 5 detali): zbliżenia z 20-30 cm, światło z boku.

Jak podmienić: w danym kadrze wstaw `<img src="../../../../img/realizacje/plik.jpg" alt="">` w `<div class="tlo">` i usuń `<svg class="scena">`, potem przerenderuj:

```
node studio/narzedzia/render.cjs studio/projekty/2026-11-14-konstrukcje-wsporcze-browary/03-grafiki/grafiki.html studio/projekty/2026-11-14-konstrukcje-wsporcze-browary/03-grafiki/png
```
