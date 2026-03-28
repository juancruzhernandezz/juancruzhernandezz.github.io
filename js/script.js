// Navigation elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page');

// Show a section by id, hide all others
function showPage(id) {
    pages.forEach(p => p.classList.remove('active'));
    navLinks.forEach(l => l.classList.remove('active'));

    const page = document.getElementById(id);
    if (page) page.classList.add('active');

    const link = document.querySelector('.nav-link[href="#' + id + '"]');
    if (link) link.classList.add('active');

    // close mobile menu
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

    // scroll to top
    window.scrollTo(0, 0);
}

// Intercept all internal link clicks (nav links + any href="#...")
document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute('href').slice(1);
    if (document.getElementById(id)) {
        e.preventDefault();
        showPage(id);
    }
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Navbar shadow on scroll
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});
