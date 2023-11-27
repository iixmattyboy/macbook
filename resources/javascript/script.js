function toggleNav() {
    var sideNav = document.getElementById('sideNav');
    var burgerContainer = document.querySelector('.burger-container');

    if (sideNav.style.width === '250px') {
        sideNav.style.width = '0';
        burgerContainer.classList.remove('open');
    } else {
        sideNav.style.width = '250px';
        burgerContainer.classList.add('open');
    }
}
