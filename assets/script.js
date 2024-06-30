const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
document.addEventListener('DOMContentLoaded', (event) => {
    // Récupération des éléments nécessaires
    const images = document.querySelectorAll('.banner-img');
    const tagLine = document.querySelector('#banner p');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');
    const dotsContainer = document.querySelector('.dots');

    // Variable pour suivre l'index actuel de l'image
    let currentIndex = 0;

    // Mise à jour de l'affichage en fonction de l'index actuel
    function updateBanner() {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });
        tagLine.innerHTML = slides[currentIndex].tagLine;
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

    // Ajout des écouteurs d'événements aux flèches
    arrowLeft.addEventListener('click', () => changeImage('left'));
    arrowRight.addEventListener('click', () => changeImage('right'));

    // Initialisation de l'affichage
    updateBanner();
});

