// DOMContentLoaded to ensure elements are ready
document.addEventListener('DOMContentLoaded', () => {
    
    // --- AOS INIT ---
    AOS.init({
        duration: 800,
        offset: 100,
        easing: 'ease-in-out',
        once: true
    });

    // --- THEME TOGGLE ---
    const themeBtn = document.getElementById('theme-btn');
    const themeIcon = themeBtn.querySelector('i');
    const body = document.body;
    
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme === 'light') {
        enableLightMode();
    }

    themeBtn.addEventListener('click', () => {
        if (body.getAttribute('data-theme') === 'light') {
            disableLightMode();
        } else {
            enableLightMode();
        }
    });

    function enableLightMode() {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('portfolio-theme', 'light');
    }

    function disableLightMode() {
        body.removeAttribute('data-theme');
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('portfolio-theme', 'dark');
    }

    // --- MOBILE MENU ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links a');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('fa-bars');
        hamburger.classList.toggle('fa-times');
    });

    // Close menu when clicking a link
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.add('fa-bars');
            hamburger.classList.remove('fa-times');
        });
    });

    // --- ACTIVE LINK ON SCROLL ---
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';
        const offset = 100; // Adjustment for header height

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - offset - 100)) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

});
