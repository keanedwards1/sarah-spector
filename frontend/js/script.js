const mobileNav = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.nav-links');
const body = document.querySelector('body');
const menu = document.querySelector('.menu-toggle');
const header = document.querySelector('header');

document.addEventListener('DOMContentLoaded', function () {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = '1';

    header.style.marginTop = "-165px";
    let isMenuOpen = false;

    /* function to toggle mobile nav when menu is clicked */
    setTimeout(function() {
        header.style.transition = "all 0.25s cubic-bezier(0.42, 0, 0.58, 1)";
        mobileNav.style.transition = "all 0.25s cubic-bezier(0.42, 0, 0.58, 1)";
    }, 100); // Delay adding the transition by 100ms

    menu.addEventListener('click', function() {
        if (isMenuOpen) {
            document.body.classList.remove('show-menu');
            mobileNav.style.zIndex = "-1";
            header.style.marginTop = "-165px";
            isMenuOpen = false;
        } else {
            document.body.classList.add('show-menu');
            mobileNav.style.zIndex = "1";
            header.style.marginTop = "0px";
            isMenuOpen = true;

        }
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            document.body.classList.remove('show-menu');
            mobileNav.style.zIndex = "-1";
            header.style.marginTop = "-165px";
            isMenuOpen = false;
        }
    });
});

