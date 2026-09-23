// Toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// Scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Experience and Education Tab Switcher with Animation
const tabBtns = document.querySelectorAll('.tab-btn');
const contentContainers = document.querySelectorAll('.content-container');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.classList.contains('active')) return;

        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const targetId = btn.getAttribute('data-target');

        contentContainers.forEach(container => {
            container.classList.remove('active');
            container.style.display = 'none';
        });

        const targetContainer = document.getElementById(targetId);
        if (targetContainer) {
            targetContainer.style.display = 'block';
            setTimeout(() => {
                targetContainer.classList.add('active');
            }, 10);
        }
    });
});

// Skills Card Toggle Functionality (Expand/Collapse on arrow click)
const skillCard = document.querySelector('.skill-card');
const toggleBtn = document.querySelector('.toggle-btn');

if (toggleBtn && skillCard) {
    toggleBtn.addEventListener('click', () => {
        skillCard.classList.toggle('active');
    });
}

// Scroll reveal
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', {
    origin: 'top'
});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-content h1, .about-img', {
    origin: 'left'
});
ScrollReveal().reveal('.home-content p, .about-content', {
    origin: 'right'
});

// Typed js
const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});