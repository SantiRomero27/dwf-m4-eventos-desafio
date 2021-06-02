// Función principal
function main() {
    // Obtengo el cuadrado
    const cuadrado = document.querySelector(".cuadrado");

    // Variable auxiliar
    let left = 0;

    // Creo un event listener para que escuche las teclas
    window.addEventListener("keydown", (e) => {
        // Si toco la flecha para la izquierda
        if (e.code == "ArrowLeft") {
            left -= 10;
            cuadrado.style.left = left + "px";
        }

        // Si toco la flecha derecha
        else if (e.code == "ArrowRight") {
            left += 10;
            cuadrado.style.left = left + "px";
        }
    });
}

// EJECUCIÓN
main();
