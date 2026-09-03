# BRIEF · fabien-split

**Self-authored, not interviewed.** Session autonome : la demande était « une preview de ce que ça pourrait donner » avec /premium-web-design et /scrollcraft. Les huit réponses ci-dessous sont écrites dans la voix de la marque à partir du site existant (copy, offres, avis Google, photos, config). À valider avec Robin et Fabien avant tout build définitif.

## Les huit réponses (voix de la marque)

1. **Vibe** : terrain, direct, exécution, chic sans costume. Références : une page de magazine économique (le portrait noir et blanc, la citation), un bureau de dirigeant le lundi matin, la carte mentale dessinée à la main à la fin d'une Clarity Session.
2. **Le parcours** : d'abord voir sa propre situation nommée, sans flatterie. Puis ce que ça change concrètement d'avoir quelqu'un à côté. Puis la preuve qu'il a construit avant de conseiller (les marques, les 20 ans de retail). Puis les trois formats et leurs prix. Puis les avis. Puis l'appel.
3. **Énergie** : calme au départ, montée régulière pendant l'argument, une respiration avant la fin, puis une seule décision.
4. **Ressenti** : reconnaissance, puis tension, puis poids/confiance, puis clarté, puis calme, puis résolution. **Le moment à retenir** : la ligne qui sépare « vous » de « Fabien » finit par disparaître et sa page prend tout l'écran.
5. **Une chose qu'aucun site ne fait** : la frontière entre les deux colonnes est la navigation. On peut la saisir et la tirer, et c'est la page qui avance.
6. **Distance au premium-minimal** : editorial. Deux fonds qui tiennent (encre / papier), un accent or à deux luminosités, zéro dégradé, zéro carte.
7. **Un monde ou des scènes** : ni l'un ni l'autre. Un seul écran, deux camps, résolu par le scroll (split stage).
8. **Assets existants** : portrait studio noir et blanc de Fabien (1152×1536), photos d'ambiance des marques (champagne, mode, studio), logos clients, VSL YouTube, vocal WhatsApp. Aucun asset généré ici, aucune dépense.

## 3Ps (premium-web-design)

- **Pain** : le dirigeant décide seul, les priorités bougent chaque semaine, l'équipe attend ses réponses, les chiffres arrivent trop tard. Le conseil qu'il connaît livre des rapports.
- **Person** : décideurs, managers, entrepreneurs francophones (France, Espagne, Italie, Bali, Mexique).
- **Promise** : décider accompagné par quelqu'un qui a passé 20 ans sur le terrain et construit ses propres marques. Pas un rapport.
- **Preuve réelle** : 20+ ans décideur retail, 100+ entreprises accompagnées, 6 marques bâties, 5,0 sur Google (3 avis vérifiés, cités mot pour mot).

## Grammaire : split stage

Deux colonnes tenues en tension toute la page, résolues par le scroll. Pourquoi les sept autres ont perdu :
- Filmic one-shot : pas de clip, et le positionnement de Fabien est une opposition (théorie / terrain), pas un film.
- Chaptered editorial : juste, mais le site existant est déjà une page à sections ; il fallait une structure, pas une re-mise en page.
- Live surface : pas de produit logiciel.
- Continuous world : pas de géographie, pas de clips, pas de budget.
- Typographic poster : les vrais assets (portrait, marques) méritent d'être vus.
- Gallery/catalog : les six marques sont une preuve, pas le sujet.
- Rhythmic cutlist : le rythme d'un consultant n'est pas une pulsation.

## Courbe de ressenti (avant les actes)

```
1  Reconnaissance   les deux titres lisibles en même temps : « Vous décidez seul. » / « Vous décidez accompagné. »
2  Tension          trois paires, la situation à gauche, la réponse à droite, la ligne commence à céder
3  Poids            à gauche le conseil qu'ils connaissent, à droite six marques construites et vingt ans de retail
4  Clarté           trois formats, ce que ça demande à gauche, ce que ça livre et ce que ça coûte à droite
5  Calme            un seul avis, mot pour mot, presque rien ne bouge (silence autorisé avant le pic)
6  Résolution       la ligne file jusqu'au bord, le papier prend tout l'écran, le portrait, une phrase, un bouton
```

**Le pic** : « la ligne entre moi et lui a glissé jusqu'au bord et sa page a pris tout l'écran ». Acte 6, le plus long span.

**Tell-someone** : « C'est le site où tu tires la ligne entre "vous" et "Fabien" et où la page se lit toute seule jusqu'à ce que son côté gagne. »

**Silence autorisé** : acte 5 (avis) tient la ligne immobile à 40 % pendant 1 vh. C'est voulu.

## Signature move

**La ligne se tire.** Le diviseur est un curseur : on le saisit (pointeur ou doigt) et le déplacer fait avancer ou reculer la page (inverse de la fonction split(scroll)). Codé dans la page, pas dans le moteur.

## Score (device par beat)

| Beat | Split | Device | Pourquoi |
|---|---|---|---|
| 1 Reconnaissance | 50 → 50 | greet des deux côtés | les deux titres avant tout scroll |
| 2 Tension | 50 → 46 | paires cuées en séquence | l'argument avance, la ligne cède |
| 3 Poids | 46 → 42 | reveal (clip-path) des photos + liste étiquetée | la preuve arrive comme des objets |
| 4 Clarté | 42 → 40 | trois fenêtres, prix réels | une offre à la fois |
| 5 Calme | 40 → 40 | un cue long, ligne immobile | le silence avant le pic |
| 6 Résolution | 40 → 0 | collapse piloté par --p, reveal du portrait, CTA tient | le pic et la fin qui tient |

Spans (vh) : 1.4 / 2.2 / 2.0 / 2.4 / 1.0 / 3.0 = 12.0 vh de travel, 6 actes (hors bande 13.6–13.8).

## Tokens (DESIGN)

- Fond gauche (VOUS) : `#0E0C0A`, encre `#F3EFE6`, encre douce `#A79C8C`, accent `#C9A86A`.
- Fond droit (FABIEN) : `#F4EFE6`, encre `#1B1712`, encre douce `#5E554A`, accent `#7C5C26`.
- Un seul accent (or) à deux luminosités, une par fond. Zéro dégradé, zéro glow.
- Display : Archivo 700/800, tracking serré. Texte : Instrument Sans. Deux familles.
- Espacement : échelle 4 px du moteur. Rayon : 999 px pour le seul bouton, 0 partout ailleurs.
- Ombres : aucune, sauf le plateau du portrait (offset + blur, teinté encre).
- Motion : transform, opacity, clip-path uniquement. Reduced motion : la ligne se pose à 0, les deux colonnes s'empilent en document.
