// TOGGLE CLASSS ACTIVE
const navbarNav = document.querySelector('.navbar-nav')

// WHEN MENU-BTN DI KLIK
document.querySelector('#menu-btn').onclick = () => {
    navbarNav.classList.toggle('active');
};

// KLIK DI LUAR SIDEBAR UNTUK MENGHILANGKAN NAV
const menu = document.querySelector('#menu-btn')

document.addEventListener('click', function(e) {
    if(!menu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
