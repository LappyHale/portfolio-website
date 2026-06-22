/**
 * portfolio website - script.js
 * Core interactivity script for scroll effects, responsive menu, active link states, and form validations.
 */

document.addEventListener('DOMContentLoaded', () => {
    /* ==================== SELECT DOM ELEMENTS ==================== */
    const header = document.getElementById('header');
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelectorAll('.nav-link');

    /* ==================== SHOW/HIDE MOBILE MENU ==================== */
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show-menu');
            
            // Toggle between bars icon and X close icon
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('show-menu')) {
                icon.className = 'fa-solid fa-xmark';
            } else {
                icon.className = 'fa-solid fa-bars-staggered';
            }
        });
    }

    /* ==================== CLOSE MENU ON LINK CLICK (MOBILE) ==================== */
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('show-menu')) {
                navMenu.classList.remove('show-menu');
                // Reset menu icon back to bars-staggered
                const icon = navToggle.querySelector('i');
                icon.className = 'fa-solid fa-bars-staggered';
            }
        });
    });

    /* ==================== CHANGE HEADER STYLES ON SCROLL ==================== */
    const scrollHeader = () => {
        // If window scrolled down more than 50px, add the class scroll-header
        if (window.scrollY >= 50) {
            header.classList.add('scroll-header');
        } else {
            header.classList.remove('scroll-header');
        }
    };
    window.addEventListener('scroll', scrollHeader);
});
