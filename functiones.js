let boton = document.getElementById("boton");
let con = true;
boton.addEventListener("click", function () {
    let barra = document.querySelector(".barra");
    if (con == true) {
        barra.style.width = "0"
        con = false;
    } else {
        barra.style.width = "80%"
        con = true
    }
})