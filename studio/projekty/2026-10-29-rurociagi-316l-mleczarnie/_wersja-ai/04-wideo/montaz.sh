#!/usr/bin/env bash
# Montaż rolki „Rurociągi 316L dla mleczarni" (wersja A, 25,5 s, 1080x1920).
#
#   bash montaz.sh
#
# - Jeśli w surowe/ są klipy 01.mp4 ... 06.mp4 (patrz lista-ujec.md) -> składa FILM:
#   przycięcie, kadrowanie do pionu, plansza końcowa, napisy, muzyka pod głos.
# - Jeśli ich nie ma -> składa ANIMATIK ze slajdów 03-grafiki/png/wideo-*.png (przejścia xfade + napisy).
# - Muzyka (opcjonalnie): połóż plik muzyka.mp3 obok tego skryptu.
set -euo pipefail
cd "$(dirname "$0")"

# ===================== PARAMETRY (zmieniaj tutaj) =====================
SZER=1080; WYS=1920; FPS=30

# Film z surowych klipów: od której sekundy klipu brać materiał (START) i ile (DL).
START_01=0;   DL_01=3.0    # hak: rdzawa spoina
START_02=0;   DL_02=3.5    # grań od środka
START_03=0;   DL_03=3.5    # 316L vs 304
START_04=0;   DL_04=3.5    # spadki / spust
START_05=0;   DL_05=3.5    # spawanie TIG z formowaniem
START_06=0;   DL_06=3.5    # trawienie i pasywacja
DL_PLANSZA=5.0             # plansza końcowa

# Animatik: czasy slajdów (z przejściem) - razem z przejściami daje te same 25,5 s co film.
SLAJDY=(wideo-01-hak wideo-02-problem wideo-03-stal wideo-04-cip wideo-05-tig wideo-06-pasywacja wideo-07-plansza-koncowa)
CZASY_SLAJDOW=(3.5 4 4 4 4 4 5)
PRZEJSCIE=0.5

GRAFIKI=../03-grafiki/png
PLANSZA="$GRAFIKI/wideo-07-plansza-koncowa.png"
NAPISY=napisy.srt
MUZYKA=muzyka.mp3
GLOSNOSC_MUZYKI_POD_GLOS=0.15   # film (jest głos)
GLOSNOSC_MUZYKI_ANIMATIK=0.6    # animatik (brak głosu)

# Wygląd napisów (libass). FontSize/MarginV są w skali 288 px wysokości -> ok. 85 px tekstu na 1920.
STYL_NAPISOW="FontName=DejaVu Sans,FontSize=12,Bold=1,PrimaryColour=&H00FFFFFF,OutlineColour=&H00000000,BackColour=&HA0000000,BorderStyle=3,Outline=6,Shadow=0,Alignment=2,MarginV=20,MarginL=20,MarginR=20"
# =======================================================================

command -v ffmpeg >/dev/null || { echo "Brak ffmpeg"; exit 1; }
[ -f "$NAPISY" ] || { echo "Brak $NAPISY"; exit 1; }
NAPISY_FILTR="subtitles=${NAPISY}:charenc=UTF-8:force_style='${STYL_NAPISOW}'"
WSPOLNE_WIDEO="scale=${SZER}:${WYS}:force_original_aspect_ratio=increase,crop=${SZER}:${WYS},setsar=1,fps=${FPS},format=yuv420p"

ma_audio() { [ -n "$(ffprobe -v error -select_streams a -show_entries stream=index -of csv=p=0 "$1" 2>/dev/null)" ]; }

KLIPY_OK=1
for n in 01 02 03 04 05 06; do [ -f "surowe/$n.mp4" ] || KLIPY_OK=0; done

if [ "$KLIPY_OK" = 1 ]; then
  # ------------------------------ FILM ------------------------------
  WYJSCIE=rolka-316l-mleczarnie.mp4
  echo "Tryb: FILM z surowe/01-06.mp4 -> $WYJSCIE"
  WEJSCIA=(); FILTR=""; CONCAT=""
  i=0
  for n in 01 02 03 04 05 06; do
    s="START_$n"; d="DL_$n"
    WEJSCIA+=(-ss "${!s}" -t "${!d}" -i "surowe/$n.mp4")
    FILTR+="[$i:v]${WSPOLNE_WIDEO},trim=0:${!d},setpts=PTS-STARTPTS[v$i];"
    if ma_audio "surowe/$n.mp4"; then
      FILTR+="[$i:a]aresample=48000,aformat=channel_layouts=stereo,atrim=0:${!d},asetpts=PTS-STARTPTS,apad=whole_dur=${!d}[a$i];"
    else
      FILTR+="anullsrc=r=48000:cl=stereo,atrim=0:${!d}[a$i];"
    fi
    CONCAT+="[v$i][a$i]"; i=$((i+1))
  done
  WEJSCIA+=(-loop 1 -framerate "$FPS" -t "$DL_PLANSZA" -i "$PLANSZA")
  FILTR+="[$i:v]${WSPOLNE_WIDEO},trim=0:${DL_PLANSZA},setpts=PTS-STARTPTS[v$i];anullsrc=r=48000:cl=stereo,atrim=0:${DL_PLANSZA}[a$i];"
  CONCAT+="[v$i][a$i]"; i=$((i+1))
  FILTR+="${CONCAT}concat=n=$i:v=1:a=1[vc][ac];[vc]${NAPISY_FILTR}[vout];"
  if [ -f "$MUZYKA" ]; then
    WEJSCIA+=(-stream_loop -1 -i "$MUZYKA")
    FILTR+="[$i:a]aresample=48000,aformat=channel_layouts=stereo,volume=${GLOSNOSC_MUZYKI_POD_GLOS}[m];[ac][m]amix=inputs=2:duration=first:normalize=0[aout]"
  else
    FILTR+="[ac]anull[aout]"
  fi
else
  # ---------------------------- ANIMATIK ----------------------------
  WYJSCIE=animatik-316l-mleczarnie.mp4
  echo "Tryb: ANIMATIK (brak kompletu surowe/01-06.mp4) -> $WYJSCIE"
  WEJSCIA=(); FILTR=""
  for k in "${!SLAJDY[@]}"; do
    plik="$GRAFIKI/${SLAJDY[$k]}.png"
    [ -f "$plik" ] || { echo "Brak $plik - wyrenderuj grafiki (03-grafiki/CANVA.md)"; exit 1; }
    WEJSCIA+=(-loop 1 -framerate "$FPS" -t "${CZASY_SLAJDOW[$k]}" -i "$plik")
    FILTR+="[$k:v]${WSPOLNE_WIDEO}[s$k];"
  done
  POPRZ="s0"; SUMA=0
  for ((k=1; k<${#SLAJDY[@]}; k++)); do
    SUMA=$(awk -v a="$SUMA" -v b="${CZASY_SLAJDOW[$((k-1))]}" 'BEGIN{print a+b}')
    OFFSET=$(awk -v s="$SUMA" -v k="$k" -v p="$PRZEJSCIE" 'BEGIN{print s-k*p}')
    FILTR+="[$POPRZ][s$k]xfade=transition=fade:duration=${PRZEJSCIE}:offset=${OFFSET}[x$k];"
    POPRZ="x$k"
  done
  CALOSC=$(awk -v s="$SUMA" -v l="${CZASY_SLAJDOW[-1]}" -v n="${#SLAJDY[@]}" -v p="$PRZEJSCIE" 'BEGIN{print s+l-(n-1)*p}')
  FILTR+="[$POPRZ]${NAPISY_FILTR}[vout];"
  n=${#SLAJDY[@]}
  if [ -f "$MUZYKA" ]; then
    WEJSCIA+=(-stream_loop -1 -i "$MUZYKA")
    FILTR+="[$n:a]aresample=48000,aformat=channel_layouts=stereo,volume=${GLOSNOSC_MUZYKI_ANIMATIK},atrim=0:${CALOSC},afade=t=out:st=$(awk -v c="$CALOSC" 'BEGIN{print c-1.5}'):d=1.5[aout]"
  else
    FILTR+="anullsrc=r=48000:cl=stereo,atrim=0:${CALOSC}[aout]"
  fi
fi

ffmpeg -hide_banner -loglevel error -y "${WEJSCIA[@]}" \
  -filter_complex "$FILTR" -map "[vout]" -map "[aout]" \
  -c:v libx264 -preset medium -crf 20 -pix_fmt yuv420p -r "$FPS" \
  -c:a aac -b:a 160k -shortest -movflags +faststart "$WYJSCIE"

echo "Gotowe: $(pwd)/$WYJSCIE ($(ffprobe -v error -show_entries format=duration -of csv=p=0 "$WYJSCIE") s)"
