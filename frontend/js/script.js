const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.nav-links');
const body = document.querySelector('body');
const menu = document.querySelector('.menu-toggle');
const header = document.querySelector('header');

document.addEventListener('DOMContentLoaded', function () {
    header.style.marginTop = "-165px";
    let isMenuOpen = false;

    /* function to toggle mobile nav when menu is clicked */


    menu.addEventListener('click', function() {
        if (isMenuOpen) {
            header.style.marginTop = "-165px";
            isMenuOpen = false;
            mobileNav.style.zIndex = "-1";
            document.body.classList.remove('show-menu');
        } else {
            header.style.marginTop = "0px";
            isMenuOpen = true;
            document.body.classList.add('show-menu');
            mobileNav.style.zIndex = "1";
        }
    });

    setTimeout(function() {
        header.style.transition = "margin-top 0.4s ease";
    }, 100); // Delay adding the transition by 100ms

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            header.style.marginTop = "-165px";
            mobileNav.style.zIndex = "-1";
            isMenuOpen = false;
            document.body.classList.remove('show-menu');
        }
    });
});

