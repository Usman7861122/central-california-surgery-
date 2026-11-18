#!/usr/bin/env bash
# Moves the licensed Shutterstock photos from ~/Downloads into public/images/stock
# with the file names the website expects. Run from the project folder:
#   bash scripts/import-stock.sh
set -u
SRC="${1:-$HOME/Downloads}"
DEST="$(cd "$(dirname "$0")/.." && pwd)/public/images/stock"
mkdir -p "$DEST"

import() { # name, shutterstock id
  local name="$1" id="$2" f
  f=$(ls "$SRC"/shutterstock_"$id"*.jpg 2>/dev/null | head -n1)
  if [ -z "$f" ]; then echo "MISSING  $name  (shutterstock_$id.jpg)"; return; fi
  if command -v sips >/dev/null; then
    sips -Z 2400 -s format jpeg -s formatOptions 80 "$f" --out "$DEST/$name.jpg" >/dev/null
  else
    cp "$f" "$DEST/$name.jpg"
  fi
  echo "ok       $name"
}

import gastric-sleeve   2740651575  # doctor with stomach model
import gastric-bypass   2837463199  # laparoscopic instrument
import duodenal-switch  2441025867  # surgeons under operating lights
import hernia           4239663335  # gastroenterologist examining patient
import gallbladder      2353473593  # woman holding digestive anatomy model
import acid-reflux      2277392295  # woman with reflux at table
import blog-tired       2494807817  # fatigued woman on sofa
import blog-pureed      2752627109  # cozy bowl of creamy soup
import blog-support     2799494237  # two friends talking on couch
import cycling-couple   1321846733  # smiling couple on bikes, blue sky
