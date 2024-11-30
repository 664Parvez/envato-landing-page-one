const copywrite_date = document.querySelector(".copywrite_date")

const year_date = new Date().getFullYear()
copywrite_date.innerHTML = year_date


window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar")

    if (window.scrollY >= 50) {
        navbar.style.background = "#0F1322"
        navBar.style.transition = '.5s'
    } else {
        navbar.style.background = "transparent"
        navBar.style.transition = '.5s'
    }
})