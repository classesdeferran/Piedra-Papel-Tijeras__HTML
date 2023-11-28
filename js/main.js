// Variables para acumular los resultados
let victoriasJugador = 0
let empates = 0
let victoriasPC = 0

let textoUsuario = document.getElementById("login")
textoUsuario.onclick = function () {
    let nombreJugador = prompt("¿Cuál es tu nombre?")
    textoUsuario.innerText = "¡ Buena suerte " + nombreJugador + " !"
    // textoUsuario.style.fontSize = "32px"
    // textoUsuario.style.padding = "5px"
    // textoUsuario.style.background = "red"
    // textoUsuario.style.color = "white"
    // textoUsuario.style.border = "1px solid lightpink"    
}

function enviarOpcion() {
    let opciones = document.getElementsByName("juego")
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            let eleccionJugador = opciones[i].value
            // let eleccionJugador = i + 1

            let eleccioPC = Math.floor(Math.random()*(3 +1 -1) + 1)
            
            if (eleccioPC == 1) {
                alert("Yo he elegido ✊")
            } else if (eleccioPC == 2){
                alert("Yo he elegido ✋")
            } else {
                alert("Yo he elegido ✌")
            }

            let victoriaMP3 = document.getElementById("victoria")

            if (eleccionJugador == eleccioPC) {
                alert("¡HEMOS EMPATADO!")
                empates += 1
            } else if (eleccionJugador == 1 && eleccioPC == 3) {
                alert("¡HAS GANADO!")
                victoriasJugador += 1
                victoriaMP3.play()
            }
        }
    }
}