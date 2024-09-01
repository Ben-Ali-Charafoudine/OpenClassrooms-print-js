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
function updateBanner () { 
    images.forEach((img,index )=> {
        img.style.display=index===i? 'block':'none';
    }); 
    tagLine.innerHTML = slides[i].tagLine
}

// 3. Ajouter les addEventListener sur chaque flèche au CLICK
arrowLeft.addEventListener('click',() => changImage("left"));
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
function changImage(direction){
    if(direction==='right') {
        /* ternaire équivalent de :
        if (i===3) {
        i = 0
        } else {
        i = i+1
        }*/
        i = (i===nbImg-1) ? 0 : i+1;
    } else if(direction==='left') {
        i = (i===0) ? nbImg-1 : i-1;
    }
    updateBanner();  
}

/*
Liste des grosses étapes
1. Ajouter les dots (bulles)
2. Ajouter un eventListener sur CHAQUE dot au 'click'
3. Faire en sorte que le dot permette de récupérer la bonne image. Exemple : dot 2 = image 2
*/
const dotsContainer = document.querySelector('.dots');
