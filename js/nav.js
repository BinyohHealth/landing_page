window.addEventListener("load", function () {
    const button = document.getElementById('menu-btn')
    const mobileMenu = document.getElementById('mobile-menu');
    let isMobileMenu = false;
    button.addEventListener("click", function () {
        isMobileMenu = !isMobileMenu;
        if (isMobileMenu) {
            button.innerHTML = `<img src="../assets/cancel.svg" alt="close" />`;
            mobileMenu.classList.remove('hidden');
        } else if (!isMobileMenu) {
            button.innerHTML = `<img src="../assets/hamburger.svg" alt="menu" />`
            mobileMenu.classList.add('hidden');
        }
    })
})