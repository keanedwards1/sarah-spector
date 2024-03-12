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
        header.style.transition = "all 0.2s cubic-bezier(0.42, 0, 0.58, 1)";
        mobileNav.style.transition = "all 0.2s cubic-bezier(0.42, 0, 0.58, 1)";
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


document.addEventListener("DOMContentLoaded", function() {
    // Get current URL path
    var path = window.location.pathname;

    // Query all nav-link elements
    document.querySelectorAll('.nav-link').forEach(link => {
        // Check if the current path is root and the link is for COLLECTIONS
        if (path === '/' && link.textContent === 'COLLECTIONS') {
            link.classList.add('active');
        }
        // For other pages, add 'active' class if the href of the nav-link includes the current path
        else if (path !== '/' && link.href.includes(path)) {
            link.classList.add('active');
        }
    });

    var titleElement = document.getElementById('title');

    // Add click event listener to the element
    titleElement.addEventListener('click', function() {
        // Navigate to root
        window.location.href = '/';
    });
});
