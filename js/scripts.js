// Get all toggle buttons
const toggleButtons = document.querySelectorAll('.toggle_button');

// Add event listener to each toggle button
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the target collapsible section ID from the data attribute
        const targetId = button.getAttribute('data-target');

        // Get all <p> blocks inside the button
        const blocks = button.querySelectorAll('p');

        // Get the collapsible section element
        const collapsibleSection = document.getElementById(targetId);
        
        // Toggle the display of the collapsible section based on its current state
        if (collapsibleSection.style.display !== 'none') {
            collapsibleSection.style.display = 'none';
            // Iterate over each <p> block and toggle the arrow classes
            blocks.forEach(block => {
                block.classList.remove('arrow-down');
                block.classList.add('arrow-up');
            });
        } else {
            collapsibleSection.style.display = 'flex';
            // Iterate over each <p> block and toggle the arrow classes
            blocks.forEach(block => {
                block.classList.remove('arrow-up');
                block.classList.add('arrow-down');
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const switchInput = document.getElementById('switch-input');

    // Reflect state changes visually
    function reflectSwitchState() {
        if (switchInput.checked) {
            // Apply dark mode styles
            document.documentElement.classList.add('dark-mode');
            document.documentElement.classList.remove('light-mode');
        } else {
            // Apply light mode styles
            document.documentElement.classList.remove('dark-mode');
            document.documentElement.classList.add('light-mode');
        }
    }

    // Function to save switch state to local storage
    function saveSwitchState() {
        sessionStorage.setItem('darkModeEnabled', switchInput.checked);
    }

    // Function to load switch state from local storage
    function loadSwitchState() {
        const darkModeEnabled = sessionStorage.getItem('darkModeEnabled');
        switchInput.checked = darkModeEnabled === 'true';
        reflectSwitchState(); // Reflect switch state visually
    }

    // Check if the user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    //console.log(prefersDarkMode);

    // Update the switch state based on user preference or local storage
    switchInput.checked = prefersDarkMode || (sessionStorage.getItem('darkModeEnabled') === 'true');
    console.log("input");
    console.log(switchInput.checked);

    // Reflect switch state visually
    reflectSwitchState();

    // Update user preferences and save switch state when the switch is toggled
    switchInput.addEventListener('change', () => {
        reflectSwitchState();
        saveSwitchState();
    });

    // Load switch state from local storage on page load
    loadSwitchState();
});

//Used to block the appearance of dropdow menu in the navbar//
function displayer(data_target) {
    const section = document.getElementById(data_target)
    const state = section.getAttribute('state')

    if (state === 'up') {
        section.setAttribute('state', 'down');
        section.classList.remove('dropdown-menu');
        section.classList.add('dropdown-menu-blocked');
    } else {
            section.setAttribute('state', 'up');
            section.classList.add('dropdown-menu');
            section.classList.remove('dropdown-menu-blocked');
    }
}

//Used for scroll up button//
window.addEventListener('scroll', function() {
    var scrollButton = document.getElementById('scrollButton');
    if (window.pageYOffset > 100) { // Change 100 to the desired scroll position
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

document.getElementById('scrollButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top of the page smoothly
});