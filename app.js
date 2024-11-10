
let header = document.getElementById("header-section")
let menuBtn = document.getElementById("menu-btn")

menuBtn.addEventListener("click", ()=> {
    header.classList.toggle("menu");
})