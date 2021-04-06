const mostrar = () => {
    const elemento = document.querySelectorAll(".izquierda");
    const elementoder = document.querySelectorAll(".derecha");
    let tope = document.documentElement.scrollTop;
    for (var j = 0; j < elementoder.length; j++) {
        let altura = elementoder[j].offsetTop;
        if (altura - 700 < tope) {
            elementoder[j].style.opacity = 1;
            elementoder[j].classList.add("slideInRight");
        }
    }
    for (var i = 0; i < elemento.length; i++) {
        let alturaElemento = elemento[i].offsetTop;
        if (alturaElemento - 700 < tope) {
            elemento[i].style.opacity = 1
            elemento[i].classList.add("slideInLeft")
        }
    }
}
export default mostrar;