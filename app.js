
const navSlid = () => {

const burger = document.querySelector(".burger");
const nav = document.querySelector(".navLinks");
const navLi = document.querySelectorAll(".navLinks li");



burger.addEventListener("click", () =>{
    nav.classList.toggle("nav-active");

    navLi.forEach((link,index) => {
        if (link.style.animation) {
            link.style.animation = '';

        } else{
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.3}s`;

        }
        
    });

    burger.classList.toggle("toggle");

})


}

navSlid();