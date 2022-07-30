function calcProportion(base, taille){
    let result = base / taille
    return 100 / result;
}


let style = getComputedStyle(document.documentElement)

let currentColor1 = style.getPropertyValue('--color1')
let color1 = document.getElementById("color1")
color1.setAttribute("value", currentColor1)

let currentColor2 = style.getPropertyValue("--color2")
let color2 = document.getElementById("color2")
color2.setAttribute("value", currentColor2)

color1.addEventListener("input", (e) => {
    document.documentElement.style.setProperty('--color1', e.target.value)
    
})
color2.addEventListener("input", (e) => {
    document.documentElement.style.setProperty('--color2', e.target.value)
})

let menu = document.querySelector(".menu")
menu.addEventListener("click", () => {
    document.getElementById("colorPicker").style.display = "flex";
    document.querySelector(".menu:hover").style.setProperty("cursor", "default");
})

let closeIcon = document.querySelector("#colorPicker i")
closeIcon.addEventListener("click", () => {
    document.getElementById("colorPicker").style.display = 'none';
    document.querySelector(".menu").style.setProperty("cursor", "pointer")
})