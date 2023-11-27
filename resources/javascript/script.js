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

function closeNav() {
    var sideNav = document.getElementById('sideNav');
    var burgerContainer = document.querySelector('.burger-container');

    sideNav.style.width = '0';
    burgerContainer.classList.remove('open');
}

// Add this event listener to close the navigation menu when an anchor link is clicked
document.querySelectorAll('.sidenav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Close the navigation menu
        closeNav();

        // Scroll smoothly to the target section
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
