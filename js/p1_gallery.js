// Get references to the gallery image and arrow buttons
const galleryImage = document.getElementById('galleryImage');

const descriptionCaption = document.querySelector('.image-container figcaption');
const counterCaption = document.querySelector('.gallery_counter');

const language = document.documentElement.getAttribute('lang')

// Array of image paths
const images = [
    '../images/P1/GAL1.png',
    '../images/P1/GAL2.png',
    '../images/P1/GAL3.png',
    // Add more image paths here
];

// Images Descriptions
let descriptions;
if (language === 'fr'){
	descriptions = [
	    'Partie en cours',
	    "Menu de pause",
	    'Ecran titre',
	    // Add more descriptions here
	];
} else {
	descriptions = [
	    'Game session',
	    "Pause Menu",
	    'Home Screen',
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