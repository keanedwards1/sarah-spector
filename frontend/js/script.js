document.addEventListener('DOMContentLoaded', function () {
    var menuToggle = document.querySelector('.menu-toggle');
    var collapsedMenuList = document.querySelector('.collapsed-menu-list');

    menuToggle.addEventListener('click', function () {
        collapsedMenuList.style.display = collapsedMenuList.style.display === 'block' ? 'none' : 'block';
    });
});
