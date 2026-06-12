---
theme: default
background: "#0f172a"
class: text-center
highlighter: shiki
lineNumbers: false
info: |
  ## Session Four : L'économie de tokens — RTK & Caveman
  Réduire le coût de l'IA des deux côtés : l'entrée (RTK) et la sortie (Caveman)
drawings:
  persist: false
transition: slide-left
title: "Session Four : L'économie de tokens"
mdc: true
css: unocss
---

<style>
.slidev-layout {
  background: #0f172a;
  color: #e2e8f0;
  font-size: 0.9rem;
}

h1 {
  color: #f8fafc;
  font-weight: 700;
  font-size: 2.5rem !important;
  margin-bottom: 1rem;
}

h2, h3 {
  color: #cbd5e1;
  font-size: 1.5rem;
}

.part-divider {
  background: #1e293b;
  padding: 2rem;
  border-radius: 0.5rem;
  border-left: 4px solid #3b82f6;
}

.strategy-card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 0.5rem;
  padding: 1rem;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.strategy-card:hover {
  border-color: #3b82f6;
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.1);
}

.comparison-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.tool-card {
  background: #1e293b;
  border: 1px solid #334155;
  border-radius: 0.5rem;
  padding: 1.25rem;
  font-size: 0.85rem;
}

.feature-badge {
  display: inline-block;
  background: #1e293b;
  color: #3b82f6;
  border: 1px solid #3b82f6;
  padding: 0.2rem 0.6rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0.2rem;
}

.badge-green { color: #22c55e; border-color: #22c55e; }
.badge-amber { color: #f59e0b; border-color: #f59e0b; }

.emoji-large {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

table {
  font-size: 0.85rem;
}

ul, ol {
  font-size: 0.9rem;
}

.mermaid {
  transform: scale(0.85);
  transform-origin: center;
}

/* Fix : fuse.js 7 renvoie toutes les slides pour une requête vide, donc la
   liste autocomplete du Goto de Slidev reste affichée. On la masque tant que
   le dialog est fermé. */
#slidev-goto-dialog.\-top-20 .autocomplete-list {
  display: none !important;
}
</style>

# Session Four

<div class="text-4xl mb-3">💸</div>

## L'économie de tokens

<div class="opacity-80 text-xl mt-4">Réduire le coût de l'IA des deux côtés — RTK & Caveman</div>

---

# Avant de commencer

<div class="mt-8 text-xl space-y-6">

<div class="text-4xl mb-3">🤝</div>

**Une session pour apprendre, pas un argumentaire commercial**

<div class="grid grid-cols-2 gap-8 mt-8 text-left">

<div class="strategy-card">

**📚 Pourquoi ce sujet ?**

- Tokens = argent + latence + contexte perdu
- Deux outils gratuits, vraies économies

</div>

<div class="strategy-card">

**💬 Discussion ouverte**

- Questions bienvenues
- Partagez vos propres setups

</div>

</div>

<div class="mt-6 text-xl">
<span class="feature-badge">Objectif : dépenser moins de tokens, garder la qualité</span>
</div>

</div>

---

# Récap : notre parcours

<div class="grid grid-cols-3 gap-4 mt-8">

<div class="tool-card">

### 🎯 Session 1

**Du chatbot à l'agent**

- IA consciente du contexte
- Même prompt, résultats différents

</div>

<div class="tool-card">

### 🎨 Session 2

**Prompt Engineering**

- Les 5 piliers
- Les anti-patterns

</div>

<div class="tool-card">

### 🧠 Session 3

**Au-delà du contexte**

- Limites de la fenêtre de contexte
- OpenCode, MCP, sous-agents

</div>

</div>

<div class="mt-10 text-xl text-center">
La session 3 demandait : <b>comment faire rentrer plus dans le contexte ?</b><br/>
<div class="mt-3">La session 4 demande : <span class="text-blue-400"><b>comment dépenser moins de tokens dès le départ ?</b></span></div>
</div>

---

# Le programme du jour

<div class="grid grid-cols-2 gap-4 mt-6 text-left">

<div class="strategy-card">
<div class="text-3xl mb-2">💰</div>

**Partie 1 : L'économie de tokens**

Pourquoi les tokens coûtent, entrée vs sortie

</div>

<div class="strategy-card">
<div class="text-3xl mb-2">⚙️</div>

**Partie 2 : RTK — couper l'entrée**

Compresser la sortie des commandes avant le contexte

</div>

<div class="strategy-card">
<div class="text-3xl mb-2">🗣️</div>

**Partie 3 : Caveman — couper la sortie**

Faire parler le modèle moins, pas réfléchir moins

</div>

<div class="strategy-card">
<div class="text-3xl mb-2">🎯</div>

**Partie 4 : Combiner & décider**

Quand utiliser quoi, démo live, plan d'action

</div>

</div>

---

<div class="part-divider">

# Partie 1

## 💰 L'économie de tokens

<div class="opacity-80 mt-4">Où partent vraiment les tokens</div>

</div>

---

# C'est quoi un token, au juste ?

<div class="grid grid-cols-2 gap-8 mt-6">

<div>

<div class="strategy-card">

**Un token ≈ ¾ de mot**

- `"context"` → 1 token
- `"re-rendering"` → 3 tokens
- Code, logs, JSON → gros en tokens
- Un contexte de 50k tokens coûte 50k tokens... à chaque tour

</div>

<div class="strategy-card mt-4">

**La taxe cachée : le gonflement du contexte**

- Plus de tokens = réponses plus lentes
- Plus de tokens = débordement de contexte plus tôt
- Plus de tokens = plus de résumés = détails perdus

</div>

</div>

<div class="strategy-card">

**Deux types de tokens, deux prix**

|            | Quoi                               | Coût            |
| ---------- | ---------------------------------- | --------------- |
| **Entrée** | Fichiers, logs, historique envoyés | moins cher      |
| **Sortie** | Ce que le modèle écrit en retour   | ~4-5× plus cher |

</div>

</div>

---

# Où partent les tokens ?

<div class="mt-4 text-center opacity-80">Une session de code ~30 min ≈ <b>118 000 tokens</b></div>

<div class="comparison-grid mt-6">

<div class="tool-card">

### 📥 Côté entrée (ce que tu donnes)

- `cat`, `read` d'un fichier → fichier entier dans le contexte
- Sortie de `npm test` → 200 lignes de bruit
- `git diff`, `git log`, `ls -R`
- Erreurs de build, stack traces

<div class="mt-3 feature-badge">Surtout du boilerplate répétitif</div>

</div>

<div class="tool-card">

### 📤 Côté sortie (le modèle répond)

- « Bien sûr ! Je serais ravi de vous aider... »
- Ré-expliquer ce qu'il vient de faire
- Politesses, formules de précaution
- Longs résumés redits

<div class="mt-3 feature-badge">Surtout du remplissage autour de la substance</div>

</div>

</div>

<div class="mt-6 text-center text-xl">
La plupart de ces 118k tokens sont du <span class="text-blue-400"><b>bruit, pas du signal</b></span>.
</div>

---

# Deux leviers, deux outils

<div class="comparison-grid mt-8">

<div class="tool-card" style="border-color:#3b82f6">

<div class="text-4xl mb-2">⚙️</div>

### RTK

**Coupe l'ENTRÉE**

Compresse la sortie des commandes _avant_ qu'elle atteigne le modèle.

<div class="mt-2 feature-badge">−60 à −90 % sur les commandes dev</div>

</div>

<div class="tool-card" style="border-color:#22c55e">

<div class="text-4xl mb-2">🗣️</div>

### Caveman

**Coupe la SORTIE**

Fait répondre le modèle de façon télégraphique, sans remplissage.

<div class="mt-2 feature-badge badge-green">~−65 % sur les réponses</div>

</div>

</div>

<div class="mt-8 text-xl">
Ils visent des tokens <b>différents</b> → <span class="text-blue-400">cumulables</span>.
</div>

---

<div class="part-divider">

# Partie 2

## ⚙️ RTK — Rust Token Killer

<div class="opacity-80 mt-4">Compresser l'entrée avant qu'elle coûte</div>

</div>

---

# RTK : c'est quoi

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="strategy-card">

**Un proxy CLI pour la sortie des commandes**

- Un seul binaire Rust, **<10ms** d'overhead
- **100+** commandes supportées
- Se place entre ton shell et l'IA
- Apache 2.0, télémétrie désactivée par défaut

</div>

<div class="strategy-card">

**L'idée en une ligne**

> La sortie brute des commandes est pleine de bruit.
> RTK enlève le bruit, garde le signal,
> _puis_ l'IA lit.

<div class="mt-3 feature-badge">git · ls · cat · grep · tests · docker · kubectl · aws</div>

</div>

</div>

<div class="mt-6 text-center opacity-80">
Compatible 14 outils IA : Claude Code, Copilot, Cursor, Gemini CLI, Windsurf, Cline…
</div>

---

# RTK : comment ça marche

<div class="mt-6 grid grid-cols-2 gap-6">

<div class="strategy-card">

### 4 stratégies de compression

1. **Filtrage intelligent** — enlève commentaires, espaces, boilerplate
2. **Regroupement** — fichiers par dossier, erreurs par type
3. **Troncature** — garde le contexte utile, coupe la redondance
4. **Déduplication** — fusionne les lignes répétées avec un compteur

</div>

<div class="strategy-card">

### Hook de réécriture auto

- `git status` → `rtk git status`
- Transparent, **zéro overhead de tokens**
- L'IA ne tape jamais `rtk` elle-même
- Natif Linux/macOS (Windows via WSL)

</div>

</div>

<div class="flex items-center justify-center gap-2 mt-6 text-sm">
  <div class="strategy-card text-center px-4">L'IA lance<br/><code>npm test</code></div>
  <div class="text-blue-400 text-2xl">→</div>
  <div class="strategy-card text-center px-4">Le hook réécrit<br/>en <code>rtk</code></div>
  <div class="text-blue-400 text-2xl">→</div>
  <div class="strategy-card text-center px-4">RTK exécute +<br/>compresse</div>
  <div class="text-blue-400 text-2xl">→</div>
  <div class="strategy-card text-center px-4" style="border-color:#22c55e">Sortie propre<br/>vers le contexte</div>
</div>

---

# Le hook : concept général

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

<div class="strategy-card">

**Un hook = un point d'interception**
L'agent (Claude Code, Copilot…) permet de brancher un script **avant** ou **après** une action.

On se branche sur l'outil **Bash** via **`PreToolUse`** : chaque commande shell est interceptée **avant exécution** et peut être réécrite.

</div>

<div class="strategy-card mt-4">

**Pourquoi « zéro overhead de tokens »**
La réécriture se passe **en dehors du modèle**. L'IA tape sa commande normalement ; le hook la transforme sans que le modèle le voie. Aucun token dépensé pour ça.

</div>

</div>

<div>

<div class="strategy-card mt-3 text-sm">

**Le flux**

1. IA veut lancer une commande
2. Hook reçoit la commande (JSON sur stdin)
3. Décide de la réécrire ou non, renvoie la commande modifiée
4. Le shell exécute le résultat

</div>

<div class="mt-2 feature-badge">Le hook peut réécrire, enrichir, ou court-circuiter n'importe quelle commande</div>

</div>

</div>

---

# RTK : avant / après

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**Sans RTK — `git push`**

```text
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 8 threads...
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 312 bytes
Total 3 (delta 2), reused 0 (delta 0)
To github.com:org/repo.git
   a1b2c3d..e4f5g6h  main -> main
```

<div class="mt-1 feature-badge badge-amber">~200 tokens</div>

</div>

<div>

**Avec RTK**

```text
ok main
```

<div class="mt-1 feature-badge badge-green">~10 tokens</div>

<div class="strategy-card mt-6">
La même info utile à l'IA :<br/>
<b>push réussi, branche main.</b><br/>
Les 190 autres tokens étaient du bruit.
</div>

</div>

</div>

---

# RTK : les chiffres

<div class="mt-4 text-center opacity-80">Projet moyen, une session</div>

| Opération                 | Fréq | Standard     | RTK         | Économie  |
| ------------------------- | ---- | ------------ | ----------- | --------- |
| `ls` / `tree`             | 10×  | 2 000        | 400         | **−80 %** |
| `cat` / `read`            | 20×  | 40 000       | 12 000      | **−70 %** |
| `npm test` / `cargo test` | 5×   | 25 000       | 2 500       | **−90 %** |
| **Total**                 | —    | **~118 000** | **~23 900** | **−80 %** |

<div class="grid grid-cols-3 gap-4 mt-6">
<div class="strategy-card text-center"><div class="text-2xl text-blue-400">−80 %</div>en moyenne sur une session</div>
<div class="strategy-card text-center"><div class="text-2xl text-blue-400">−90 %</div>runners de tests (le plus de bruit)</div>
<div class="strategy-card text-center"><div class="text-2xl text-blue-400">&lt;10ms</div>overhead par commande</div>
</div>

---

# RTK : installer

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="strategy-card">

**Installation**

```bash
brew install rtk
# ou
curl -fsSL https://raw.githubusercontent.com/\
rtk-ai/rtk/master/install.sh | sh
# ou
cargo install --git \
  https://github.com/rtk-ai/rtk
```

Vérifie : `rtk --version` puis `rtk gain`

</div>

<div class="strategy-card">

**Activer le hook auto**

```bash
# Claude Code / Copilot (défaut)
rtk init -g

# Autres outils
rtk init -g --agent cursor
rtk init -g --gemini
rtk init -g --codex
rtk init --agent windsurf
rtk init --agent hermes
```

Vérifie : `rtk init --show`

Redémarre ton outil, puis teste :

`git status` → automatiquement réécrit en `rtk git status`

</div>

</div>

---

# RTK : commandes & limites

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="strategy-card">

**Analytics**

```bash
rtk gain --history    # historique par commande
rtk gain --graph      # graphique 30 jours
rtk gain --daily      # breakdown par jour
rtk discover          # opportunités manquées
rtk session           # adoption par session
```

</div>

<div class="strategy-card">

**Utilitaires**

```bash
rtk proxy <cmd>       # sortie brute (sans filtre)
rtk init --show       # diagnostic hook
rtk init -g --hook-only   # hook seul, sans RTK.md
rtk init -g --auto-patch  # non-interactif (CI)
```

</div>

</div>

<div class="grid grid-cols-2 gap-4 mt-4">

<div class="strategy-card">

**Configuration** (`~/.config/rtk/config.toml`)

```toml
[hooks]
exclude_commands = ["curl", "playwright"]

[tee]
enabled = true
mode = "failures"
```

</div>

<div class="strategy-card">

**Limites**

- Hook → Bash uniquement (pas Read/Grep/Glob natifs)
- Windows → pas de hook natif (fallback CLAUDE.md)
- Compression avec perte → `rtk proxy` si besoin du brut

</div>

</div>

---

<div class="part-divider">

# Partie 3

## 🗣️ Caveman

<div class="opacity-80 mt-4">Faire parler le modèle moins, pas réfléchir moins</div>

</div>

---

# Caveman : c'est quoi

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="strategy-card">

**Un skill qui compresse la SORTIE du modèle**

- Injecte un style de communication télégraphique
- Enlève remplissage, politesses, précautions
- Garde chaque fait technique
- Claude Code + 30 autres agents

</div>

<div class="strategy-card">

**La phrase qui compte**

> « Caveman affecte seulement les tokens de sortie.
> Caveman pas rendre cerveau plus petit.
> Caveman rendre **bouche** plus petite. »

<div class="mt-3 feature-badge badge-green">Le raisonnement intact — seule la réponse rétrécit</div>

</div>

</div>

<div class="mt-6 text-center opacity-80">
Installe un fichier flag → télégraphique dès le 1er message, sans <code>/caveman</code> manuel.
</div>

---

# Caveman : avant / après

<div class="grid grid-cols-2 gap-6 mt-4">

<div>

**Claude normal**

> « La raison pour laquelle ton composant React se re-rend est probablement que tu crées une nouvelle référence d'objet à chaque cycle de rendu. Quand tu passes un objet inline en prop, une nouvelle référence est créée à chaque fois, ce qui fait re-rendre l'enfant… »

<div class="mt-1 feature-badge badge-amber">~69 tokens</div>

</div>

<div>

**Claude Caveman**

> « New object ref each render. Inline object prop = new ref = re-render. Wrap in `useMemo`. »

<div class="mt-1 feature-badge badge-green">~19 tokens</div>

<div class="strategy-card mt-6">
Même correctif. Même raisonnement.<br/>
<b>Juste sans le remplissage autour.</b>
</div>

</div>

</div>

---

# Caveman : niveaux d'intensité

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="strategy-card">

**`lite`** — enlève seulement le remplissage

<div class="opacity-70 text-xs mt-1">Se lit encore naturellement. Défaut sûr pour le travail partagé.</div>

</div>

<div class="strategy-card">

**`full`** — caveman classique _(défaut)_

<div class="opacity-70 text-xs mt-1">Enlève les articles, fragments OK. ~65 % de réduction.</div>

</div>

<div class="strategy-card">

**`ultra`** — télégraphique

<div class="opacity-70 text-xs mt-1">Compression maximale qui reste de l'anglais.</div>

</div>

<div class="strategy-card">

**`wenyan`** — chinois classique

<div class="opacity-70 text-xs mt-1">Le plus compressé. Nouveauté / cas extrêmes.</div>

</div>

</div>

<div class="strategy-card mt-6">

**Sécurité intégrée : auto-clarté**
Caveman désactive la compression pour les avertissements de sécurité, les confirmations d'actions irréversibles, et les séquences multi-étapes où enlever des mots risque un malentendu. Code, commits, PRs restent en prose normale.

</div>

---

# Caveman : installer & activer

<div class="mt-4 text-center opacity-80">
Caveman n'est pas un CLI — c'est un <b>skill/plugin</b>. Il s'active via slash commands + flag file.
</div>

<div class="grid grid-cols-2 gap-6 mt-6">

<div class="strategy-card">

**Installation**

```bash
# macOS / Linux / WSL / Git Bash
curl -fsSL https://raw.githubusercontent.com/\
JuliusBrussee/caveman/main/install.sh | bash

# Windows (PowerShell 5.1+)
irm https://raw.githubusercontent.com/\
JuliusBrussee/caveman/main/install.ps1 | iex
```

Prérequis : **Node.js ≥18**

</div>

<div class="strategy-card">

**Activation**

```bash
# Manuel — slash command dans le chat :
/caveman full        # mode complet (~−65 %)
/caveman lite        # version légère
/caveman ultra       # compression maximale
/caveman off         # désactiver
# ou dire "talk like caveman" / "normal mode"
```

Auto-activation : l'installateur configure le hook automatiquement pour Claude Code, Codex, Gemini. Pour les autres agents : `--with-init`.

</div>

</div>

---

# Caveman : slash commands

<div class="grid grid-cols-2 gap-4 mt-6">

<div class="strategy-card">

**Modes d'activation**

| Commande         | Effet                  |
| ---------------- | ---------------------- |
| `/caveman lite`  | Réduction légère       |
| `/caveman full`  | Mode caveman classique |
| `/caveman ultra` | Compression maximale   |
| `/caveman off`   | Désactive              |

</div>

<div class="strategy-card">

**Utilitaires**

| Commande            | Effet                       |
| ------------------- | --------------------------- |
| `/caveman-stats`    | Tokens sauvés, stats        |
| `/caveman-commit`   | Commit ultra-compact        |
| `/caveman-review`   | Code review télégraphique   |
| `/caveman-compress` | Compresse fichiers markdown |

</div>

</div>

<div class="strategy-card mt-4">

**Désinstallation :** relancer l'installateur avec `--uninstall`

</div>

---

# Caveman : les chiffres

<div class="grid grid-cols-3 gap-4 mt-8">
<div class="strategy-card text-center"><div class="text-3xl text-green-400">−65 %</div>réduction moyenne de la sortie</div>
<div class="strategy-card text-center"><div class="text-3xl text-green-400">22–87 %</div>fourchette selon la tâche</div>
<div class="strategy-card text-center"><div class="text-3xl text-green-400">~30s</div>installation (Node ≥18)</div>
</div>

| Tâche                          | Avant | Après | Économie  |
| ------------------------------ | ----- | ----- | --------- |
| Explication re-render React    | 1 180 | 159   | **−87 %** |
| Correctif auth middleware      | 704   | 121   | **−83 %** |
| Setup connection pool Postgres | 2 347 | 380   | **−84 %** |

---

<div class="part-divider">

# Partie 4

## 🎯 Combiner & décider

<div class="opacity-80 mt-4">Les cumuler, et connaître les compromis</div>

</div>

---

# RTK vs Caveman — pas vs, mais ET

|                      | **RTK**                                | **Caveman**                     |
| -------------------- | -------------------------------------- | ------------------------------- |
| **Cible**            | Tokens d'entrée                        | Tokens de sortie                |
| **Quoi**             | Sortie des commandes                   | Réponse du modèle               |
| **Comment**          | Proxy CLI + hook                       | Skill de style dans le contexte |
| **Forme**            | Binaire Rust                           | Prompt / skill                  |
| **Économie**         | −60 à −90 % sur les cmds               | ~−65 % sur les réponses         |
| **Impact qualité ?** | Sortie avec perte, pas le raisonnement | Raisonnement intact             |
| **Idéal pour**       | Travail riche en tests/build/git       | Longues sessions bavardes       |

<div class="mt-6 text-center text-xl">
Tokens différents → <span class="text-blue-400"><b>lance les deux, les économies se cumulent</b></span>.
</div>

---

# Quand utiliser quoi

<div class="comparison-grid mt-6">

<div class="tool-card">

### ✅ Prends RTK quand

- Beaucoup de runs tests / build / lint
- Lecture de gros fichiers ou logs
- Revue lourde en `git diff` / `git log`
- Sorties Docker / kubectl / AWS
- Le contexte se remplit trop vite

</div>

<div class="tool-card">

### ✅ Prends Caveman quand

- Longues sessions d'allers-retours
- Tu veux des réponses, pas des dissertations
- Coût/latence comptent pour toi
- Travail solo ou expert

</div>

</div>

<div class="strategy-card mt-6">

### ⚠️ Attention quand

- **Onboarding / pédagogie** → les réponses verbeuses aident ; Caveman `lite` ou off
- **Transcripts partagés** → une sortie télégraphique peut perdre les autres
- **Tu as besoin du brut** → `rtk proxy` pour contourner la compression
- **Compliance / audit** → sache que RTK enlève des données ; vérifie que rien de critique n'est perdu

</div>

---

# Les limites, honnêtement

<div class="grid grid-cols-2 gap-8 mt-6">

<div class="strategy-card">

**RTK**

- Avec perte par design — peut cacher un détail dont tu avais besoin
- Un outil de plus à installer/maintenir dans la chaîne
- Le hook natif exclut Windows classique
- Vérifie que tu as le bon binaire `rtk`

</div>

<div class="strategy-card">

**Caveman**

- Sortie télégraphique moins lisible pour les nouveaux
- Style seulement — ne corrige pas un mauvais prompt
- Tokens de sortie seulement — l'entrée intacte
- L'équipe peut ne pas aimer le ton « caveman »

</div>

</div>

<div class="mt-6 text-center text-xl">
Les deux sont <b>gratuits, opt-in, réversibles</b>. Teste sur une vraie tâche, mesure, décide.
</div>

---

# À retenir

<div class="grid grid-cols-2 gap-6 mt-8 text-left">

<div class="strategy-card">
<div class="text-3xl mb-2">📥</div>

**Les tokens ont deux côtés**
L'entrée (ce que tu fournis) et la sortie (ce qu'il dit). Coupe les deux.

</div>

<div class="strategy-card">
<div class="text-3xl mb-2">⚙️</div>

**RTK tue le bruit d'entrée**
−80 % sur une session, <10ms de coût, transparent.

</div>

<div class="strategy-card">
<div class="text-3xl mb-2">🗣️</div>

**Caveman tue le remplissage de sortie**
~−65 % sur les réponses, raisonnement intact.

</div>

<div class="strategy-card">
<div class="text-3xl mb-2">🎯</div>

**Ils se cumulent**
Tokens différents. Lance les deux. Mesure avec `rtk gain`.

</div>

</div>

---

# Plan d'action

<div class="mt-8 text-xl space-y-4 text-left max-w-2xl mx-auto">

<div class="strategy-card">☐ Installer RTK, lancer <code>rtk discover</code> sur ton historique</div>
<div class="strategy-card">☐ Tester Caveman <code>lite</code> une semaine, regarder les économies en statusline</div>
<div class="strategy-card">☐ Lancer les deux sur un vrai ticket, rapporter la baisse combinée</div>
<div class="strategy-card">☐ Décider un défaut d'équipe : quand télégraphique, quand verbeux</div>

</div>

<div class="mt-8">
<span class="feature-badge">github.com/rtk-ai/rtk</span>
<span class="feature-badge badge-green">github.com/juliusbrussee/caveman</span>
</div>

---

# Questions ?

<div class="text-5xl mt-6 mb-6">💸</div>

<div class="text-xl opacity-80">
Dépenser moins de tokens. Garder la qualité.
</div>

<div class="mt-8 opacity-60">
Session Four — L'économie de tokens
</div>
