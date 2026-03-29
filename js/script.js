// Slideshow
const slides = document.querySelectorAll('.slideshow-img');
if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active-img');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active-img');
    }, 3000);
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');

function showPage(id) {
    // Hide every page
    pages.forEach(p => {
        p.classList.remove('active');
    });
    // Remove active from every nav link
    navLinks.forEach(l => l.classList.remove('active'));

    // Show target page
    const target = document.getElementById(id);
    if (target) target.classList.add('active');

    // Highlight matching nav link
    const link = document.querySelector('.nav-link[href="#' + id + '"]');
    if (link) link.classList.add('active');

    // Close mobile menu
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');

    window.scrollTo(0, 0);
}

// Intercept clicks on any anchor pointing to #id
document.addEventListener('click', function (e) {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const id = anchor.getAttribute('href').replace('#', '');
    const target = document.getElementById(id);
    if (target && target.classList.contains('page')) {
        e.preventDefault();
        showPage(id);
    }
});

// Hamburger
hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Navbar border on scroll
window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});
