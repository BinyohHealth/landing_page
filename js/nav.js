window.addEventListener("load", function () {
    const button = document.getElementById('menu-btn')
    const mobileMenu = document.getElementById('mobile-menu');
    let isMobileMenu = false;
    button.addEventListener("click", function () {
        isMobileMenu = !isMobileMenu;
        mobileMenu.classList.toggle('hidden');
        console.log(isMobileMenu)
        if (isMobileMenu) {
            button.innerHTML = `<img src="../assets/cancel.svg" alt="close" />`
        } else if (!isMobileMenu) {
            button.innerHTML = `<img src="../assets/hamburger.svg" alt="menu" />`
        }
    })
})