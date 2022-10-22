// (Event) Buttons listener
const buttons = document.querySelector(".offer__buttons");
const buttonC = document.querySelector(".btn-commercial");
const buttonR = document.querySelector(".btn-residential");
const buttonI = document.querySelector(".btn-industrial");
const commercial = document.querySelector(".commercial");
const residential = document.querySelector(".residential");
const industrial = document.querySelector(".industrial");


buttons.addEventListener("click", function(event) {
    if (event.target == buttonC) {  
        getArticleCommercial();
    }    
    if (event.target == buttonR) {
        getArticleResidential();
    }
    if (event.target == buttonI) {
        getArticleIndustrial();
    }    
});

buttonC.style.backgroundColor = "white";

function getArticleCommercial() {    
    buttonC.style.backgroundColor = "white";
    commercial.style.display = "block";
    residential.style.display = "none";
    industrial.style.display = "none";
}

function getArticleResidential() {
    buttonC.style.background = "none";
    residential.style.display = "block";
    commercial.style.display = "none";
    industrial.style.display = "none";
}

function getArticleIndustrial() {   
    buttonC.style.background = "none";
    industrial.style.display = "block";
    commercial.style.display = "none";
    residential.style.display = "none";
}


// (Event) Scroll listener
const buttonUp = document.querySelector(".button-up");

window.addEventListener("scroll", function(event) {
    if (window.scrollY >= 1000) {
        buttonUp.style.display = "flex";
    } else {
        buttonUp.style.display = "none";
    }
});


// (Event) Burger listener
const burger = document.querySelector(".burger");
const curtain = document.querySelector(".curtain");
const list = document.querySelector(".curtain__list");
const burgerClose = document.querySelector(".burger-close");

burger.addEventListener("click", function(event) {
    curtain.classList.add("curtain_active");
    list.classList.add("curtain__list_active");
});

burgerClose.addEventListener("click", function(event) {
    curtain.classList.remove("curtain_active");
    list.classList.remove("curtain__list_active");
});


