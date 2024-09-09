const slides = [
    {
        "image": "slide1.jpg",
        "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        "image": "slide2.jpg",
        "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        "image": "slide3.jpg",
        "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        "image": "slide4.png",
        "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
    },
];

// Récupération des éléments nécessaires
const images = document.querySelectorAll('.banner-img');
const tagLine = document.querySelector('#banner p');

// Index de l'image en cours
let i = 0;
const nbImg = slides.length // ici 4 /!\ attention différent de l'index max qui est égal à 3

/*
CHANGEMENT DES IMAGES AVEC LES FLÈCHES
1. Créer la banière en HTML OK
2. Récupérer les flèches avec querySelector OK
3. Ajouter les addEventListener sur chaque flèche au CLICK KO
4. Modifier les images en fonction de la direction dans laquelle il a cliqué KO
*/

// 2. Récupérer les flèches avec querySelector
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');

// écrire le code ici
function updateBanner() {
    images.forEach((img, index) => {
        img.style.display = index === i ? 'block' : 'none';
    });
    tagLine.innerHTML = slides[i].tagLine

    updateDots();
}

// 3. Ajouter les addEventListener sur chaque flèche au CLICK
arrowLeft.addEventListener('click', () => changImage("left"));
arrowRight.addEventListener('click', () => changImage("right"));
updateBanner();
/*
MODIFIER LES IMAGES
1. Si l'utilisateur click
- flèche droite : +1
- flèche gauche : -1
/!\ Si click :
- flèche droite ET i = 3 ALORS i = 0
- flèche gauche ET i = 0 ALORS i = 3
*/
// 4. Modifier les images en fonction de la direction dans laquelle il a cliqué
// Utilisation de ternaires : condition ? si vrai : si faux;
/**
* Exemple de JSDoc
* @param {('left' | 'right')} direction
*/
function changImage(direction) {
    if (direction === 'right') {
        /* ternaire équivalent de :
        if (i===3) {
        i = 0
        } else {
        i = i+1
        }*/
        i = (i === nbImg - 1) ? 0 : i + 1;
    } else if (direction === 'left') {
        i = (i === 0) ? nbImg - 1 : i - 1;
    }
    updateBanner();
}

/*
Liste des grosses étapes
1. Ajouter les dots (bulles)
-Créer une boucle à travers le tableau slides.
-Créer un élément div pour chaque dot.
-Ajouter la classe dot pour le style.
-Ajouter chaque dot dans le conteneur dots.

2. Ajouter un eventListener sur CHAQUE dot au 'click'
Sélectionner toutes les bulles (querySelectorAll).
Boucler à travers les bulles pour ajouter un click listener.
Lorsque l'utilisateur clique, changer l’index i et appeler updateBanner().

3. Faire en sorte que le dot permette de récupérer la bonne image. Exemple : dot 2 = image 2
Chaque bulle correspond à une image par son index.
Ajouter ou retirer la classe dot_selected pour la bulle active dans la fonction updateDots().
*/

//recuperer les element nessaicere
const dotsContainer = document.querySelector('.dots')
// Création des points
/*
Exemple avec la boucle foreach = code initial
slides.forEach((slide, index) => {
    // Créer un élément div pour chaque bulle (dot)
const dotElement = document.createElement('div');

// Ajouter la classe CSS 'dot' à cet élément
dotElement.classList.add('dot');

// Ajouter chaque bulle (dot) dans le conteneur des bulles (dotsContainer)
dotsContainer.appendChild(dotElement);
});
console.log(slides);*/

// La boucle for est à utiliser quand on veut répéter un même code "j" fois.
for (let j = 0; j < slides.length; j++) {
    // Créer un élément div pour chaque bulle (dot)
    const dot = document.createElement('button');
    
    // Ajouter la classe CSS 'dot' à cet élément
    dot.classList.add('dot');
    

    //2. Ajouter un eventListener sur CHAQUE dot au 'click'
    dot.addEventListener('click', () => {
        i = j;
        updateBanner();
    });
    
    // Ajouter chaque bulle (dot) dans le conteneur des bulles (dotsContainer)
    dotsContainer.appendChild(dot);
}

//2. Ajouter un eventListener sur CHAQUE dot au 'click'

//3. Faire en sorte que le dot permette de récupérer la bonne image. Exemple : dot 2 = image 2.
function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        /*
        Ce code :
        if (index === i) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
        
        peut être écris aussi comme ça :

        Avec "toggle" si le second paramètre est égal à :
        - true => ajoute la classe "dot_selected"
        - false => enlève la classe "dot_selected"
        */
       dot.classList.toggle('dot_selected', index === i);
    });
}

updateDots()
