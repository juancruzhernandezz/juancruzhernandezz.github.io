// Slideshow
const slides = document.querySelectorAll('.slideshow-img');
if (slides.length > 1) {
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active-img');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active-img');
    }, 4000);
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-link');

function setMobileMenu(open) {
    hamburger.classList.toggle('active', open);
    navMenu.classList.toggle('active', open);
    hamburger.setAttribute('aria-expanded', open);
}

function showPage(id, updateHash = true) {
    // Hide every page
    pages.forEach(p => {
        p.classList.remove('active');
    });
    // Remove active from every nav link
    navLinks.forEach(l => l.classList.remove('active'));

    // Show target page
    const target = document.getElementById(id);
    if (!target) return;
    target.classList.add('active');

    // Highlight matching nav link
    const link = document.querySelector('.nav-link[href="#' + id + '"]');
    if (link) link.classList.add('active');

    // Close mobile menu
    setMobileMenu(false);

    if (updateHash && window.location.hash !== '#' + id) {
        history.pushState(null, '', '#' + id);
    }

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
    setMobileMenu(!navMenu.classList.contains('active'));
});

// Navbar border on scroll
window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
});

// Course accordion
document.querySelectorAll('.course-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
        var item = btn.closest('.course-item');
        var content = item.querySelector('.course-content');
        var isOpen = item.classList.contains('open');
        item.classList.toggle('open');
        btn.setAttribute('aria-expanded', !isOpen);
        if (content) {
            content.setAttribute('aria-hidden', isOpen);
            content.toggleAttribute('inert', isOpen);
        }
    });
});

window.addEventListener('popstate', function () {
    var id = window.location.hash.replace('#', '') || 'home';
    showPage(id, false);
});

var initialPage = window.location.hash.replace('#', '');
if (initialPage && document.getElementById(initialPage)) {
    showPage(initialPage, false);
}
