# Runbook démos — Session 4 (L'économie de tokens)

Déroulé des démos live. Tout est testé et déterministe. Répète avant la session.

> ⚠️ **À préparer 5 min avant**
> - RTK installé : `rtk --version` doit répondre
> - Caveman installé : skill `/caveman` dispo dans Claude Code
> - Terminal en **gros police** (présentation)
> - Avoir ce repo cloné (les scripts vivent dans `sessionFour/demo/`)

---

## 🎬 Démo 1 — RTK : signal vs bruit (script auto)

**But** : montrer en chiffres que RTK jette le bruit, garde le signal.

```bash
cd sessionFour/demo
bash run-rtk-demo.sh
```

**Ce que ça montre (résultats attendus) :**

| | lignes | chars | ~tokens |
|---|---|---|---|
| `cat app.log` (brut) | 201 | ~11 650 | ~2 900 |
| `rtk log app.log` | 7 | ~165 | ~41 |

→ **−99 %** sur ce log. 200 lignes répétées = `info x200`, et **l'unique ERREUR remonte en tête**.

**Phrase clé à dire** : « RTK ne résume pas au hasard — il garde l'erreur (le signal) et écrase les 200 répétitions (le bruit). »

---

## 🎬 Démo 2 — Le piège « lossy » + bypass anti-boucle

**But** : montrer le compromis honnête + le hack quand l'IA boucle.

Le script l'affiche déjà (section ②). À expliquer à l'oral :

1. `rtk log` dit *« 200 info messages »* mais **cache leur contenu**.
2. Si l'IA a besoin du détail de ces lignes → elle ne l'a pas → elle peut **relancer en boucle**.
3. Débloquer : **`rtk proxy <cmd>`** = exécution brute, sans filtrage.

```bash
rtk proxy cat app.log     # → 201 lignes complètes, le hook ne réécrit pas
```

**Live dans Claude Code** : si l'IA boucle, lui dire
> « relance avec `rtk proxy <cmd>` »

**Phrase clé** : « Compression avec perte = volontaire. `rtk proxy` est la soupape de secours. »

---

## 🎬 Démo 3 — Tes vraies économies (l'argument massue)

**But** : ce ne sont pas des chiffres marketing, c'est TON usage.

```bash
rtk gain
```

**Attendu (ton install au 2026-06-08)** : ~**23,5M tokens économisés (71 %)** sur ~5000 commandes.
Détail par commande : `rtk lint` −99,8 %, `rtk gh pr diff` −69 %, etc.

Bonus historique :
```bash
rtk gain --history     # économies par commande dans le temps
rtk discover           # opportunités manquées dans ton historique Claude Code
```

**Phrase clé** : « 23 millions de tokens, c'est l'équivalent de X€ et surtout du contexte que je n'ai pas gaspillé. »

---

## 🎬 Démo 4 — Caveman : même réponse, moins de mots

**But** : montrer que la sortie rétrécit, pas le raisonnement.

Dans Claude Code (ou autre agent avec le skill) :

1. **Mode normal** — poser :
   > « Pourquoi mon composant React se re-rend à chaque frappe clavier ? »
   → réponse longue, paragraphes.

2. **Activer** : `/caveman full`

3. **Reposer la même question** → réponse télégraphique, ~3-5× plus courte, **même correctif** (`useMemo` / `useCallback`).

4. **Chiffres réels de la session** :
   ```
   /caveman-stats
   ```
   → tokens économisés sur CETTE session (lu depuis le log, pas estimé).

**Phrase clé** : « Caveman rend la *bouche* plus petite, pas le *cerveau*. »

---

## 🎬 Démo 5 — Caveman : la sécurité (auto-clarté)

**But** : montrer que Caveman ne sabote pas les moments critiques.

Avec Caveman actif, demander un truc destructeur :
> « Comment supprimer toutes les lignes de la table users ? »

→ Caveman **bascule en prose normale** pour l'avertissement + la confirmation (pas de fragments ambigus sur une action irréversible). Puis reprend le mode télégraphique.

Tester aussi les niveaux :
```
/caveman lite     # enlève juste le remplissage
/caveman full     # défaut
/caveman ultra    # télégraphique max
```

**Phrase clé** : « La compression s'efface là où l'ambiguïté coûte cher : sécurité, actions irréversibles. »

---

## 🎬 Démo 6 (bonus) — Les deux ensemble

**But** : prouver que ça se cumule (tokens différents).

Sur une vraie petite tâche dans Claude Code (ex : « ajoute un test à cette fonction et lance la suite ») :
- RTK compresse la sortie de `npm test` (entrée)
- Caveman compresse les explications de l'IA (sortie)

À la fin : `rtk gain` (entrée économisée) + `/caveman-stats` (sortie économisée) = baisse combinée.

---

## 🧯 Fallbacks (si une démo casse en live)

| Problème | Solution |
|---|---|
| `rtk` introuvable | `which rtk` ; sinon montrer les screenshots / `rtk gain` enregistré |
| `rtk gain` plante (SIGPIPE) | déjà géré dans le script ; sinon `rtk gain` seul sans `| head` |
| Caveman pas actif | `/caveman full` manuellement ; ou montrer l'exemple figé des slides |
| Pas de réseau | tout est local sauf `install.sh` — rien à télécharger pendant la démo |
| L'IA boucle pour de vrai | `rtk proxy <cmd>` (c'est justement la démo 2 !) |

---

## ⏱️ Timing conseillé (~8 min de démo dans les 30-40 min)

1. Démo 1 + 2 (RTK signal/bruit + bypass) : 3 min
2. Démo 3 (`rtk gain` réel) : 1 min
3. Démo 4 + 5 (Caveman) : 3 min
4. Démo 6 (combiné) si le temps : 1 min
