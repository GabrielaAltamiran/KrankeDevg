let puntosUsuario = 0;
let puntosComputador = 0;


function jugar(seleccionado) {
    // Paso 1: Invocar a generarElemento y guardar el resultado en una variable
    let seleccionComputadora = generarElemento();

    // Paso 2: Invocar a generarRuta y mostrar la imagen seleccionada por el computador
    let rutaImagenComputadora = generarRuta(seleccionComputadora);
    document.getElementById("imagenComputadora").src = rutaImagenComputadora;

    // Paso 3: Invocar a determinarGanador
    let resultado = determinarGanador(seleccionComputadora, seleccionado);
    
    // Mostrar el resultado en pantalla
    let resultadoTexto = document.getElementById("resultadoTexto");
    let ganadorTexto = document.getElementById("ganadorTexto");
    let puntosUsuarioTexto = document.getElementById("puntosUsuario");
    let puntosComputadorTexto = document.getElementById("puntosComputador");

    if (resultado === 0) {
        resultadoTexto.textContent = "EMPATE";
        ganadorTexto.textContent = "";
        document.getElementById("resultadoTexto").textContent = "Empate.";
    } else if (resultado === 1) {
        resultadoTexto.textContent = "GANASTE LA PARTIDA!!";
        ganadorTexto.textContent = "¡Felicidades, ganaste!";
        puntosUsuario++; // Incrementar puntos del usuario
        document.getElementById("resultadoTexto").textContent = "¡Ganaste!";
    } else {
        resultadoTexto.textContent = "PERDISTE LA PARTIDA!!";
        ganadorTexto.textContent = "Lo siento, perdiste.";
        puntosComputador++; // Incrementar puntos del computador
        document.getElementById("resultadoTexto").textContent = "Computadora gana.";
    }
    // Validar si alguien ha ganado el juego
    if (puntosUsuario === 5) {
        alert("HAS GANADO EL JUEGO");
        reiniciarJuego(); // Puedes definir una función para reiniciar el juego si lo deseas
    } else if (puntosComputador === 5) {
        alert("EL COMPUTADOR TE HA VENCIDO");
        reiniciarJuego(); // Puedes definir una función para reiniciar el juego si lo deseas
    }
    puntosUsuarioTexto.textContent = "Puntos Usuario: " + puntosUsuario;
    puntosComputadorTexto.textContent = "Puntos Computador: " + puntosComputador;
}
function reiniciarJuego() {
    puntosUsuario = 0;
    puntosComputador = 0;
    actualizarMarcador(); // Puedes definir esta función para actualizar el marcador en pantalla
}
function actualizarMarcador() {
    let puntosUsuarioTexto = document.getElementById("puntosUsuario");
    let puntosComputadorTexto = document.getElementById("puntosComputador");

    // Actualiza los elementos en pantalla con los nuevos valores de los puntajes
    puntosUsuarioTexto.textContent = "Puntos Usuario: " + puntosUsuario;
    puntosComputadorTexto.textContent = "Puntos Computador: " + puntosComputador;
}
function limpiar() {
    puntosUsuario = 0;
    puntosComputador = 0;

    // Reiniciar elementos en pantalla
    document.getElementById("imagenComputadora").src = ""; // Limpiar imagen de la computadora
    document.getElementById("resultadoTexto").textContent = ""; // Limpiar texto de resultado
    document.getElementById("ganadorTexto").textContent = ""; // Limpiar texto de ganador

    actualizarMarcador(); // Actualizar el marcador en pantalla
}
