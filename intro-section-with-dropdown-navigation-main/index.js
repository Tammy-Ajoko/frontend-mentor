const menue = document.querySelector(".menue-open")
const closeMenue = document.querySelector(".close")
const sideMenue = document.querySelector(".nav2-container-list")
const deviceWith = window.matchMedia("(max-width: 750px)")
const features = document.querySelector(".features")
const company = document.querySelector(".company")
const dropdDown1 = document.querySelector(".f")
const dropdDown2 = document.querySelector(".c")
const fArrow = document.querySelector("#features-arrow")
const cArrow = document.querySelector("#company-arrow")
const rightImg = document.querySelector("#right-img")
let state = 'off';

if(deviceWith.matches){
    (function(){
        rightImg.src = "./images/image-hero-mobile.png"
    })()
}

menue.addEventListener("click", function(){
    sideMenue.style.visibility = "visible"
    // sideMenue.style.transition = "all 500ms ease-in-out";
    sideMenue.style.width = "50vw"
    sideMenue.style.height = "100%"
    menue.style.visibility = "hidden"
    // menue.style.transition = "all 500ms ease-in-out";

    if(deviceWith.matches){
        sideMenue.style.width = "60vw"

    }
})

closeMenue.addEventListener("click", function(){
    sideMenue.style.visibility = "hidden"
    // menue.style.transition = "all 500ms ease-in-out";
    sideMenue.style.width = "0"
    sideMenue.style.height = "0"
    dropdDown1.style.visibility = "hidden"
    dropdDown1.style.width = "0"
    dropdDown1.style.height = "0"
    fArrow.src = "./images/icon-arrow-down.svg"
    dropdDown2.style.visibility = "hidden"
    dropdDown2.style.width = "0"
    dropdDown2.style.height = "0"
    cArrow.src = "./images/icon-arrow-down.svg"
    state = 'off'

    setTimeout(function(){
        menue.style.visibility = "visible"
    }, 500)
})
features.addEventListener("click",function(){
    if(state == 'off'){
        dropdDown1.style.visibility = "visible"
        dropdDown1.style.width = "fit-content"
        dropdDown1.style.height = "fit-content"
        state = 'on'
        fArrow.src = "./images/icon-arrow-up.svg"
    }
    else{
        dropdDown1.style.visibility = "hidden"
        dropdDown1.style.width = "0"
        dropdDown1.style.height = "0"
        fArrow.src = "./images/icon-arrow-down.svg"
        state = 'off'
        
    }
})
company.addEventListener("click",function(){
    if(state == 'off'){
        dropdDown2.style.visibility = "visible"
        dropdDown2.style.width = "fit-content"
        dropdDown2.style.height = "fit-content"
        state = 'on'
        cArrow.src = "./images/icon-arrow-up.svg"
        
    }
    else{

        dropdDown2.style.visibility = "hidden"
        dropdDown2.style.width = "0"
        dropdDown2.style.height = "0"
        cArrow.src = "./images/icon-arrow-down.svg"
        state = 'off'

    }
})
