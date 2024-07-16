# OpenClassrooms-print-j
Mise en place du projet : Étapes 1 et 2
Partie 1 : Introduction des flèches

Dans cette première étape, j'ai intégré les flèches de navigation dans la bannière du site. Ces flèches permettent aux utilisateurs de passer d'une image à l'autre dans le carrousel.
Partie 2 : Mise en place des Event Listeners sur les flèches

    Ajout des event listeners sur chaque flèche :
        J'ai attaché des écouteurs d'événements (event listeners) aux flèches gauche et droite afin de détecter les clics des utilisateurs.

    Ajout d'un console.log ou d'une alert() pour tester les event listeners :
        Pour confirmer le bon fonctionnement des écouteurs d'événements, j'ai inclus des instructions console.log ou alert() dans les fonctions de rappel (callbacks) des écouteurs. Cela permet de vérifier dans la console ou via une alerte que l'événement de clic a bien été capturé.

    Différenciation des clics sur les boutons gauche et droit :
        J'ai configuré chaque flèche pour qu'elle réagisse de manière unique en fonction de la direction de navigation souhaitée. En cliquant sur la flèche gauche, le carrousel se déplace vers l'image précédente, tandis qu'un clic sur la flèche droite fait avancer le carrousel vers l'image suivante.
