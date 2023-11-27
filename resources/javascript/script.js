function toggleNav() {
    var sideNav = document.querySelector('.sidenav');
    if (sideNav.style.width === '250px') {
        sideNav.style.width = '0';
    } else {
        sideNav.style.width = '250px';
    }
}
