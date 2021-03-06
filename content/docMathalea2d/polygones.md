---
title: "Polygones"
niveau:
description: "MathALEA 2D - Les polygones"
---



{{% alea2d "polygones"  %}}

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>




* `let p = polygone(A,B,C,D,E)` // Trace ABCDE
* `let c = carre(A,B)` // Trace le carré direct qui a pour côté [AB] et code les 4 angles droits
* `let c = carreIndirect(A,B)` // Trace le carré indirect qui a pour côté [AB] et code les 4 angles droits
* `codageCarre(c,color = 'black',mark='X')` // Code les longueurs égales et les angles droits du carré c
* `let p = polygoneRegulier(A,B,n)` // Trace le polygone régulier direct à n côtés qui a pour côté [AB]
* `let p = polygoneRegulierIndirect(A,B,n)` // Trace le polygone régulier indirect à n côtés qui a pour côté [AB]
* `let p = polygoneRegulierParCentreEtRayon(O,r,n)` // Trace le polygone régulier à n côtés et de rayon r
* `let t = triangle2points2longueurs(A,B,4,7)` // Trace le triangle ABC tel que AC = 4 cm et BC = 7 cm (par défaut C a l'ordonnée la plus grande possible)
* `let C = t.listePoints[2]` // Récupère le 3e sommet dans la variable C (valable pour tout polygone et tout point numéroté de 0 à n-1)
* `let t = triangle2points2longueurs(A,B,4,7,2)` // Trace le triangle ABC tel que AC = 4 cm et BC = 7 cm (C aura l'ordonnée la plus petite possible)
* `let t = triangle2points2angles(A,B,40,60)` // Trace le triangle ABC tel que CAB = +40° et CBA = -60°
* `let t = triangle2points2angles(A,B,40,60,2)` // Trace le triangle ABC tel que CAB = -40° et CBA = 60°
* `let t = triangle2points1angle1longueur(A,B,40,6)` // Trace le triangle ABC tel que CAB = 40° et AC=6
* `let t = triangle2points1angle1longueur(A,B,40,6,2)` // Trace le triangle ABC tel que CAB = -40° et AC=6
* `let t = triangle2points1angle1longueurOppose(A,B,40,6,1)` // Trace le triangle ABC tel que CAB = 40° et BC=6 Le point C est celui des deux points possibles qui est le plus près de A
* `let t = triangle2points1angle1longueurOppose(A,B,40,6,2)` // Trace le triangle ABC tel que CAB = -40° et BC=6 Le point C est celui des deux points possibles qui est le plus près de A
* `let t = triangle2points1angle1longueurOppose(A,B,40,6,3)` // Trace le triangle ABC tel que CAB = 40° et BC=6 Le point C est celui des deux points possibles qui est le plus loin de A
* `let t = triangle2points1angle1longueurOppose(A,B,40,6,4)` // Trace le triangle ABC tel que CAB = -40° et BC=6 Le point C est celui des deux points possibles qui est le plus loin de A
 


Une fois un polygone nommé `p` créé, on peut accéder à la liste de tous ses sommets, changer les noms des sommets ou les déplacer.

* `p.listePoints` permet d'accéder aux sommets du polygone par ordre de constuction
* `nommePolygone(p,'ABCDEF')` // Nomme tous les sommets de p (dans l'ordre de création des points)
* `deplaceLabel(p,'AB','below')` // Si il y a un point nommé 'A' ou 'B' dans le polygone son nom sera mis en dessous du point

Attention, changer le nom d'un point ne permet pas de changer le nom de la variable de ce point.

On peut changer l'apparence d'un polygone (mais aussi d'une droite, d'une demi-droite, d'un segment ou d'un cercle) de la manière suivante : 

 * `p.color = 'red'`
 * `p.epaisseur = 2`
 * `p.pointilles = true`
 * `p.opacite = .2`

<div class="ui hidden divider"></div>

<h2 class="ui horizontal divider header">Constructions particulières</h2>

<div class="ui hidden divider"></div>

* `let t = triangle2points2longueurs(A,B,4,7)` // Trace le triangle ABC tel que AC = 4 cm et BC = 7 cm (par défaut C a l'ordonnée la plus grande possible)
* `let C = t.listePoints[2]` // Récupère le 3e sommet dans la variable C
* `let t = triangle2points2longueurs(A,B,4,7,2)` // Trace le triangle ABC tel que AC = 4 cm et BC = 7 cm (C aura l'ordonnée la plus petite possible)
* `let t = triangle2points2angles(A,B,40,60)` // Trace le triangle ABC tel que CAB = +40° et CBA = -60°
* `let t = triangle2points2angles(A,B,40,60,2)` // Trace le triangle ABC tel que CAB = -40° et CBA = 60°
