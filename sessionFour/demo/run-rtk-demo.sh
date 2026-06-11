#!/usr/bin/env bash
# Démo RTK pour la session 4 — compare sortie brute vs RTK, estime tokens.
# Usage: bash run-rtk-demo.sh   (dans le dossier demo/)

set -euo pipefail
cd "$(dirname "$0")"

LOG="./app.log"

# ~ tokens ≈ caractères / 4 (approximation parlante)
toks() { echo $(( $1 / 4 )); }
chars() { wc -c < "$1" | tr -d ' '; }
chars_str() { printf '%s' "$1" | wc -c | tr -d ' '; }

line() { printf '%.0s─' {1..62}; echo; }
row() { printf "  %-22s %8s %10s %10s\n" "$1" "$2" "$3" "$4"; }

echo
echo "╔══════════════════════════════════════════════════════════════╗"
echo "║  DÉMO RTK — signal vs bruit, en chiffres                      ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo

# ─────────────────────────────────────────────────────────────────────
# 1. Log bruité : 200 lignes répétées + 1 vraie erreur
# ─────────────────────────────────────────────────────────────────────
echo "① LOG BRUITÉ (200 lignes répétées + 1 erreur réelle)"
line
row "" "lignes" "chars" "~tokens"
RAW_C=$(chars "$LOG")
echo "  --- brut (cat) ---"
row "cat app.log" "$(wc -l < "$LOG" | tr -d ' ')" "$RAW_C" "$(toks $RAW_C)"
RTK_OUT=$(rtk log "$LOG" 2>/dev/null || true)
RTK_C=$(chars_str "$RTK_OUT")
echo "  --- compressé (rtk log) ---"
row "rtk log app.log" "$(printf '%s' "$RTK_OUT" | grep -c '' || true)" "$RTK_C" "$(toks $RTK_C)"
echo
echo "  Sortie RTK :"
printf '%s\n' "$RTK_OUT" | sed 's/^/    /'
echo
echo "  → 200 lignes de bruit = 1 ligne 'info x200'. L'ERREUR remonte."
echo "  → économie : $(( 100 - RTK_C * 100 / RAW_C ))% sur ce log"
echo

# ─────────────────────────────────────────────────────────────────────
# 2. Le piège « lossy » : et si l'IA avait besoin du détail caché ?
# ─────────────────────────────────────────────────────────────────────
echo "② LE PIÈGE LOSSY + BYPASS"
line
echo "  rtk log dit '200 info messages' mais CACHE leur contenu."
echo "  Si l'IA a besoin du détail → elle ne l'a pas → elle peut boucler."
echo "  Débloquer avec rtk proxy (brut, sans filtrage) :"
echo
echo "    rtk proxy cat app.log   # → 201 lignes complètes"
PROXY_C=$(rtk proxy cat "$LOG" 2>/dev/null | wc -c | tr -d ' ')
echo "    (rtk proxy renvoie $PROXY_C chars, = le brut)"
echo

# ─────────────────────────────────────────────────────────────────────
# 3. Tes vraies économies cumulées
# ─────────────────────────────────────────────────────────────────────
echo "③ TES ÉCONOMIES RÉELLES (rtk gain)"
line
GAIN=$(rtk gain 2>/dev/null || true)
printf '%s\n' "$GAIN" | head -9 | sed 's/^/  /'
echo
echo "Fin."
