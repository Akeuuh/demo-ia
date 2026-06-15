# Session Quatre : L'économie du token — RTK & Caveman

**Format :** Présentation Slidev interactive (lancer avec `npm run dev` dans sessionFour/)
**Durée :** ~30–40 min
**Statut :** 📅 Planifiée

---

## 🎯 Objectif

Les sessions 1–3 portaient sur le travail *avec* l'IA et sur la manière de faire tenir plus de choses dans la fenêtre de contexte.
La session 4 inverse la question : **comment dépenser moins de tokens dès le départ ?**

Les tokens, c'est de l'argent, de la latence et du budget de contexte. On regarde deux outils gratuits et opt-in qui
attaquent le problème par deux bouts opposés — et comme ils ciblent des tokens différents, ils se cumulent.

| Outil | Réduit | Comment |
|------|------|-----|
| **RTK** (Rust Token Killer) | Tokens d'**entrée** | Proxy CLI qui compresse la sortie des commandes avant qu'elle n'atteigne le modèle |
| **Caveman** | Tokens de **sortie** | Skill qui fait répondre le modèle de façon condensée — sans remplissage, raisonnement intact |

---

## 🗺️ Structure (4 parties)

1. **L'économie du token** (~10 min) — ce que coûte un token, entrée vs sortie, où partent réellement les 118k tokens d'une session.
2. **RTK — couper l'entrée** (~12 min) — ce que c'est, les 4 stratégies de compression, le hook de réécriture automatique, avant/après, les chiffres, l'installation.
3. **Caveman — couper la sortie** (~10 min) — compression de la sortie uniquement, avant/après, niveaux d'intensité (`lite`/`full`/`ultra`/`wenyan`), sécurité auto-clarté.
4. **Combiner & décider** (~5 min) — tableau RTK vs Caveman, quand utiliser quoi, démo live, mises en garde, actions à mener.

---

## 🔑 Chiffres clés (issus des projets)

**RTK**
- ~**−80%** de tokens sur une session de projet moyen (~118k → ~24k)
- Jusqu'à **−90%** sur les test runners, **−70%** sur les lectures de fichiers
- **<10ms** de surcoût, **100+** commandes, compatible avec 14 outils IA

**Caveman**
- **~−65%** de réduction moyenne de la sortie (plage 22–87%)
- Exemples : explication React −87%, fix auth −83%, pool Postgres −84%
- Tokens de sortie uniquement — *"Caveman make mouth smaller, not brain smaller."*

---

## 🎬 Idées de démo live

**RTK**
- `rtk gain` — afficher les analytics d'économie actuelles
- Lancer une suite de tests brute vs via `rtk`, comparer le nombre de lignes/tokens
- `git push` avant/après (~200 tokens → ~10)
- `rtk discover` sur un vrai historique Claude Code

**Caveman**
- Même question de debug en mode normal puis `/caveman full`
- Comparer les comptes de tokens côte à côte
- Montrer l'auto-clarté se déclencher sur un prompt destructeur (« drop table »)

**Combiné**
- Les deux sur un vrai ticket — mesurer la baisse totale.

---

## ⚠️ Mises en garde honnêtes

- **RTK** est lossy par conception — utiliser `rtk proxy` quand on a besoin de la sortie brute. Le hook de réécriture automatique natif est Linux/macOS uniquement (Windows via WSL). Attention à la collision de nom `rtk` (Rust Type Kit).
- **Caveman** n'affecte que le style — ne corrigera pas un mauvais prompt, et la sortie condensée se lit moins bien pour les nouveaux venus / les transcriptions partagées. Utiliser `lite` ou le désactiver pendant l'onboarding.
- Les deux sont **gratuits, opt-in, réversibles**. Essayez sur une vraie tâche, mesurez, décidez.

---

## 🔗 Ressources

- RTK : https://github.com/rtk-ai/rtk
- Caveman : https://github.com/juliusbrussee/caveman

---

## Debrief
*Session 4 - L'économie du token (RTK & Caveman)*

### Ce qui a bien fonctionné
* Explication claire et bien rythmée de la notion de token — entrée vs sortie, et pourquoi les tokens de sortie coûtent ~5x plus cher
* Démos avant/après efficaces : RTK sur `git push` (~200 → ~10 tokens) et Caveman sur une réponse de debug React (69 → 19 tokens, raisonnement conservé)
* Les analytics `rtk gain` ont validé l'annonce en direct — 86% d'économie sur l'historique de commandes du présentateur
* Les deux outils sont clairement complémentaires et se cumulent sans conflit (RTK sur l'entrée, Caveman sur la sortie)
* Présentation honnête des compromis : les deux outils sont gratuits, opt-in et réversibles ; compression avec perte et limites d'onboarding annoncées d'emblée
* Le comportement de sécurité de Caveman a rassuré la salle — il ne compresse pas les avertissements de sécurité, les confirmations d'actions irréversibles ni les séquences multi-étapes
* Auditoire très engagé, nombreuses questions de fond tout au long de la session

### Difficultés rencontrées
* L'absence de crédits Copilot a bloqué une partie des tests en direct
* RTK n'a pas de hook natif sur Windows (rapporté, non vérifié — nécessite WSL)
* RTK est lossy par conception — des détails utiles d'une commande (ex. nombre d'objets énumérés sur `git push`) sont perdus sauf si on utilise `rtk proxy`
* Incertitude sur le périmètre de Caveman : le présentateur n'a pas pu confirmer s'il compresse le raisonnement / les entrées inter-agents, laissant ouverte une possible question de dégradation de qualité
* Le savoir reste éparpillé dans les fils Slack — pas d'endroit central pour capitaliser les trucs et astuces

### Questions soulevées
* Caveman compresse-t-il uniquement la sortie finale destinée à l'utilisateur, ou aussi le raisonnement et les entrées des sous-agents ? (risque de dégradation dans ce dernier cas) — resté sans réponse
* Caveman répond en anglais — traduit-il les réponses en français, et comment la langue est-elle gérée ?
* Des skills personnalisés qui « compressent » aussi pourraient-ils entrer en conflit avec Caveman ou le dupliquer ? Faut-il auditer ce que font réellement les skills Caveman avant de leur faire confiance (sécurité) ?
* Caveman impacte-t-il les sorties non techniques comme la création de tickets, les roadmaps ou la planification de sprint ? (Réponse : les fichiers/tickets générés sont écrits normalement ; seule la sortie console est condensée)
* Le niveau de raisonnement du modèle (low/medium/high/max, Opus vs Sonnet) change-t-il la consommation de tokens ? (Réponse : oui, directement — les tokens de raisonnement sont facturés ; c'est distinct de Caveman)
* `caveman-code` (Caveman + RTK + couches de compression supplémentaires) pourrait-il remplacer l'usage des deux outils séparément ?
* Où ce savoir sera-t-il capitalisé — Confluence, Dev Portal ?

### Actions à mener

| Action | Responsable | Échéance |
|--------|-------------|----------|
| Partager le repo de présentation (3 sessions précédentes + celle-ci) | Présentateur | Après la session |
| Étudier `caveman-code` (combine Caveman + RTK) et en faire un retour | Mathieu | TBD |
| Re-tester RTK / les stats de tokens sur Copilot une fois les crédits ajoutés | Présentateur | TBD |
| Créer et enrichir une doc centrale de bonnes pratiques dans le Dev Portal | Équipe doc (Thomas / Elex) | Bientôt |
| Auditer ce que font réellement les skills Caveman avant adoption large (sécurité) | Équipe | TBD |
| Installer RTK et lancer `rtk discover` | Membres de l'équipe | Cette semaine |
| Essayer Caveman `lite` une semaine, puis lancer les deux sur un vrai ticket et mesurer le gain combiné | Membres de l'équipe | TBD |

---

## Réponses aux questions techniques
*Vérifiées après la session sur les dépôts officiels (15/06/2026).*

### Caveman compresse-t-il le raisonnement et les échanges entre sous-agents ?

Non. Caveman n'agit que sur les **tokens de sortie** (le texte affiché). Les tokens de **raisonnement** (« thinking ») ne sont pas touchés — le [dépôt officiel](https://github.com/JuliusBrussee/caveman) est explicite : *« Caveman only affects output tokens — thinking/reasoning tokens untouched. Caveman make mouth smaller, not brain smaller. »* Mécaniquement, ce n'est pas une compression a posteriori mais une **consigne de style** injectée dans le contexte de l'agent (« drop filler, keep substance, use fragments »). Conséquences :

- La qualité du raisonnement n'est pas dégradée : seule la formulation est condensée ; la substance technique, le code et les messages d'erreur sont conservés tels quels (règle du skill).
- Pour les **sous-agents** : Caveman ne s'applique qu'à l'agent où le skill est actif. Un sous-agent qui ne charge pas le skill répond normalement. L'écosystème fournit d'ailleurs des sous-agents dédiés ([`cavecrew-*`](https://github.com/JuliusBrussee/caveman)) explicitement compressés (~60 % de tokens en moins) pour qui veut l'effet sur la délégation. Le risque de dégradation des entrées inter-agents évoqué en séance reste donc limité par conception, puisque toute la substance technique est préservée même en version condensée.

### Caveman traduit-il les réponses en anglais ?

Non, il ne traduit pas. D'après le [dépôt officiel](https://github.com/JuliusBrussee/caveman), Caveman **garde la langue** de la conversation et ne compresse que le *style* : *« Caveman keep your language. You write Portuguese, caveman grunt Portuguese. Spanish, French, same. Compress the style, not the language. »* Le code, les commandes et les chaînes d'erreur restent exacts. Si la démo affichait de l'anglais, c'est parce que les réponses étaient déjà en anglais — pas à cause d'une traduction forcée. En français, on obtient du français condensé (suppression des articles, du « en fait / vraiment / juste », des formules de politesse). À noter : le mode `wenyan` (chinois classique) est une option **explicite et facultative** pour compresser encore plus, pas un comportement par défaut.

### Faut-il auditer le skill, et deux skills « compresseurs » entrent-ils en conflit ?

- **Conflit** : oui, à éviter. Un skill = des **instructions Markdown** injectées dans le contexte. Deux skills qui demandent tous deux « compresse la sortie » produisent des consignes redondantes voire contradictoires → confusion du modèle et contexte gaspillé. Bonne pratique : **un skill par préoccupation**. Inutile de réécrire Caveman ; en cas de besoin d'ajustement, on le forke/édite.
- **Sécurité** : le cœur de Caveman est du **texte inerte et auditable** (skill MIT, lisible en local dans `~/.config/opencode/skills/caveman/`). Mais l'installation n'est pas que du texte : le [dépôt](https://github.com/JuliusBrussee/caveman) embarque des **scripts** (`install.sh`, `install.ps1`, hooks, lecture du journal de session pour les stats, statusline — ~66 % du repo est du JavaScript). La prudence évoquée en séance est donc justifiée : on **audite avant d'installer**, surtout pour tout ce qui exécute du code (scripts, hooks, serveurs MCP comme `caveman-shrink`). Pour un simple skill texte, le risque reste faible.

### Le niveau de raisonnement (low/medium/high/max, Opus vs Sonnet) joue-t-il sur les tokens ?

Oui, directement, et c'est **distinct de Caveman**. Plus on demande de réflexion, plus le modèle génère de tokens de raisonnement, qui sont **facturés**. Caveman n'y touche pas — le [dépôt](https://github.com/JuliusBrussee/caveman) confirme que les tokens de raisonnement restent intacts (il ne réduit que la sortie visible). Les deux leviers sont complémentaires : choisir le bon niveau de réflexion / le bon modèle agit sur le raisonnement, Caveman agit sur la verbosité de la réponse.

### `caveman-code` peut-il remplacer RTK + Caveman ?

Oui sur le principe, mais attention à la nature de l'outil. [`caveman-code`](https://github.com/JuliusBrussee/caveman-code) (`npm install -g @juliusbrussee/caveman-code`, MIT, 20+ providers) n'est **pas** un add-on à brancher sur Copilot : c'est un **agent de code CLI complet** (fork de `pi-code`), pensé comme alternative à Codex (~2× moins de tokens). Il embarque **quatre couches de compression toujours actives**, qui couvrent les **deux** bouts (entrée *et* sortie) :

1. **Caveman Mode** — réponses du modèle (sortie), niveaux `lite`/`full`/`ultra` ;
2. **Tool Budgets** — sortie des outils : plafonds par commande (bash 80 / read 300 / grep 120), strip ANSI, fusion des lignes vides, extraction sémantique JSON/XML (−67 % à −94 %) ;
3. **Read Dedup** — un fichier relu renvoie un stub, pas les octets (−99 % sur les relectures) ;
4. **RTK** — binaire Rust **optionnel** branché pour compresser la sortie bash (−60 % à −90 %).

Donc `caveman-code` réunit l'esprit de RTK (couper les sorties de commandes) **et** de Caveman (couper la sortie modèle) dans un seul agent. Mais l'adopter signifie **changer d'agent de code**, pas empiler un outil sur l'existant : dans notre contexte Copilot/OpenCode, RTK + le skill Caveman restent la combinaison « add-on » la plus simple. `caveman-code` est à évaluer comme outil distinct (cf. action « Étudier caveman-code »).

> **Écosystème complet** (cf. [getcaveman.dev](https://getcaveman.dev/)) : `caveman` (sortie), `caveman-code` (agent complet), `cavemem` (mémoire inter-agents), `cavekit` (boucle spec-driven), `cavegemma` (Gemma fine-tuné).
