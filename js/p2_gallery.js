// Get references to the gallery image and arrow buttons
const galleryImage = document.getElementById('galleryImage');

const descriptionCaption = document.querySelector('.image-container figcaption');
const counterCaption = document.querySelector('.gallery_counter');

const language = document.documentElement.getAttribute('lang')

// Array of image paths
const images = [
    '../images/P2/GAL1.png',
    '../images/P2/GAL2.png',
    '../images/P2/GAL3.png',
    '../images/P2/GAL4.png',
    '../images/P2/GAL5.png',
    '../images/P2/GAL6.png',
    '../images/P2/GAL7.png',
    '../images/P2/GAL8.png',
    '../images/P2/GAL9.png',
    '../images/P2/GAL10.png',
    // Add more image paths here
];

// Images Descriptions
let descriptions;
if (language === 'fr'){
    descriptions = [
        'Donjon',
        "Menu d'équipement",
        'Combat',
        'Combat 2',
        'Utilisation de compétences',
        'Menu des compétences',
        'Environnement de jeu',
        'Ecran titre',
        "Type d'interaction: point de sauvegarde",
        'Ecran de statut',
        // Add more descriptions here
    ];
} else {
    descriptions = [
        'Dungeon',
        "Equipment menu",
        'Comabt',
        'Combat 2',
        'Using skills',
        'Competences menu',
        'Game environment',
        'Home Screen',
        "Interaction type: savepoint",
        'Status screen',
        // Add more descriptions here
    ];
}

// Variable to track the current image index
let currentIndex = 0;

// Function to display the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    galleryImage.src = images[currentIndex];
    descriptionCaption.textContent = descriptions[currentIndex];
    counterCaption.textContent = `${currentIndex + 1}/${images.length}`;
}

// Function to display the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    galleryImage.src = images[currentIndex];
    descriptionCaption.textContent = descriptions[currentIndex];
    counterCaption.textContent = `${currentIndex + 1}/${images.length}`;
}