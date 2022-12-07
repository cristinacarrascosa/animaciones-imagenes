

let contenedor = document.querySelector(".contenedor");
console.log(contenedor);

let img2 = contenedor.lastElementChild;
console.log(img2);

contenedor.addEventListener("click", function () {
    if (img2.classList.contains("opacidad")) {
        img2.classList.remove("opacidad")
    } else {
        img2.classList.add("opacidad")
    }
})



    
