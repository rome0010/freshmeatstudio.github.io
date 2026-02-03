// Toggle mobile menu
function toggleMenu() {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}

// Close mobile menu
function closeMenu() {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    nav.classList.remove('active');
    hamburger.classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    const header = document.querySelector('.header');
    
    if (!header.contains(event.target) && nav.classList.contains('active')) {
        closeMenu();
    }
});
