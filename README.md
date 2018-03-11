# Test-Le-cercle-des-vacances

Front
Ui​ ​:
Faire une app avec un framework front Javascript de votre choix ( ex : React, Angular 2 … ).
Page Elevators
Ui des élévateurs
● faire le panneau interne de l'ascenseur
● avec 10 boutons
● 2 voyants :
● un voyant qui montre si l'ascenseur monte ou descend.
● un voyant qui indique si la porte est ouverte ou fermée.
● faire un tableau représentant l'immeuble, chaque ligne représente l'étage et le
tableau à trois colonnes :
● la première colonne représente le nom de l'étage.
● la deuxième colonne contient un voyant qui indique si l'ascenseur est à
l'étage courant.
● la troisième colonne contient le bouton d'appel.
Comportement sur la page des élévateurs
Elevateur N°1
● lorsque je clique sur le bouton d'appel d'un étage sur le tableau représentant
l'immeuble :
○ le bouton de l'étage cliqué s'illumine sur le tableau représentant l'immeuble.
○ l'ascenseur doit enregistrer l'action auprès du backend.
○ l'ascenseur doit fermer ses portes.
○ l'ascenseur doit se rendre à l'étage demandé.
○ l'ascenseur doit ouvrir les portes une fois arrivé à l'étage demandé.
● lorsque je clique sur le bouton d'un étage sur le panneau interne de l'ascenseur :
○ le bouton de l'étage cliqué s'illumine sur le tableau interne.
○ l'ascenseur doit enregistrer l'action auprès du backend.
○ l'ascenseur doit fermer ses portes.
○ l'ascenseur doit se rendre à l'étage demandé.
○ l'ascenseur doit ouvrir les portes une fois arrivé à l'étage demandé.
○ le bouton de l’étage s’éteint.
● lorsque je clique, à la suite, sur plusieurs étages sur le tableau représentant
l'immeuble ou sur le panneau interne :
○ l'ascenseur doit avoir le comportement précédemment décrit en fonction du
panneau.
○ lorsque l'ascenseur arrive à un étage il attend 5s ( oui il faut monter vite ^^ )
et va à l'étage suivant.
Elevateur N°2
il fait les mêmes étages et il a le même comportement que l’élévateur n°1 mais :
- il va en plus au au sous sol : dans les étages -1 à -5.
- au dessus du RDC, il ne s’arrête que les étages pairs jusqu’au 8ème et puis tous les
étages au dessus du 8ème.
Remarque :
● lorsque l'ascenseur bouge et/ou lorsque qu'il est statique, le voyant de l'étage
courant s'illumine sur la représentation de l'immeuble.
● État initial de l'ascenseur : 3eme étage
Page Admin
● Accessible uniquement avec un login et mot de passe
● Possibilité de voir l'historique des actions de l’ascenseur issu de la base de donnée.
Backend
Faire une App en NodeJS qui permet d'enregistrer les actions de l'ascenseur. Les actions
doivent être enregistrées dans une base de donnée MongoDB ( prendre le tiers gratuit chez
MLAB).
Extra
Lors d'un appel multiple, il faudrait mettre en place un algorithme qui permet à l’ascenseur
d’enchaîner les étages de la manière la plus efficace.
