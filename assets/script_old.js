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
    }
];

/*
Les différentes façons d'écrire une fonction :

console.log(add(1, 2));
function add(nb1, nb2) {
    return nb1 + nb2
}
console.log(add(1, 2));

console.log(add2(4, 2));
const add2 = function (nb1, nb2) {
    return nb1 + nb2
}
console.log(add2(4, 2));

console.log(add3(4, 2));
const add3 = (nb1, nb2) => nb1 + nb2
console.log(add3(4, 2));
*/

// Récupération des éléments nécessaires
const images = document.querySelectorAll('.banner-img');
const tagLine = document.querySelector('#banner p');
const arrowLeft = document.getElementById('arrow-left');
const arrowRight = document.getElementById('arrow-right');
const dotsContainer = document.querySelector('.dots');

// Variable pour suivre l'index actuel de l'image
let currentIndex =0;

function myFunction (param) {
    param()
}
myFunction(function () {
    console.log('hello')
})

// Mise à jour de l'affichage en fonction de l'index actuel
function updateBanner() {
    images.forEach(function (img, index) {
        img.style.display = index === currentIndex ? 'block' : 'none';
    });
    
  tagLine.innerHTML = slides[currentIndex].tagLine;
  updateDots(); 
}

// Fonction pour mettre à jour les points actifs
function updateDots() {
    const dots = document.querySelectorAll('.dot'); 
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('dot_selected'); 
        } else {
            dot.classList.remove('dot_selected'); 
        }
    });
}

// Fonction pour changer d'image
function changeImage(direction) {
    if (direction === 'left') {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
    } else if (direction === 'right') {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
    }
    updateBanner();
}

// Création des points
slides.forEach((slide, index) => {
    const dot = document.createElement('div'); 
    dot.classList.add('dot'); 
    if (index === currentIndex) {
        dot.classList.add('dot_selected'); 
    }
    dot.addEventListener('click', () => {
        currentIndex = index; 
        updateBanner(); 
    });
    dotsContainer.appendChild(dot); 
});

// Ajout des écouteurs d'événements aux flèches
arrowLeft.addEventListener('click', () => changeImage('left'));
arrowRight.addEventListener('click', () => changeImage('right'));

// Initialisation de l'affichage
updateBanner();
}
