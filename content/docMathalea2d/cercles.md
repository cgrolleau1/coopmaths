---
title: "Cercles"
niveau:
description: "MathALEA 2D - Les cercles et arcs de cercles"
---


<!-- {{% alea2d "mediatrices"  %}} -->

<div class="ui hidden divider"></div>
<div class="ui hidden divider"></div>

* `let c = cercle(O,r)` //Cercle de centre O et de rayon r
* `let c = cercleCentrePoint(O,A)` //Cercle de centre O passant par A
* `let c = cercleCentrePoint(O,A,'blue')` //Cercle de centre O passant par A en bleu
* `let c = arc(O,a,r)` // Arc de cercle de centre O, d'angle a et de rayon r
* `let c = arc(O,a,r,true)` // Arc de cercle de centre O, d'angle a et de rayon r fermé par les rayons aux extrémités
* `let c = arcPointPointAngle(A,B,a,true)` // Arc de cercle d'extrémités A et B d'angle a fermé par les rayons aux extrémités
* `let M = pointIntersectionCC(c1,c2,'M')` // M est le point d'intersection le plus haut des cercles c1 et c2
* `let M = pointIntersectionCC(c1,c2,'M',2)` // M est le point d'intersection le plus bas des cercles c1 et c2
