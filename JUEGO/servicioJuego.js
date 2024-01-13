function obtenerAleatorio() {
    let opciones = ["piedra", "papel", "tijera"];
    let indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}
function generarElemento() {
    let numeroAleatorio = obtenerAleatorio();
    if (numeroAleatorio === 1) {
        return "piedra";
    } else if (numeroAleatorio === 2) {
        return "papel";
    } else {
        return "tijera";
    }
}
function determinarGanador(eleccionJugador1, eleccionJugador2) {
    if (
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
        (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel")
    ) {
        return 1; // Jugador gana
    } else if (eleccionJugador1 === eleccionJugador2) {
        return 0; // Empate
    } else {
        return 2; // Computadora gana
    }
}
function generarRuta(nombre) {
    let rutaBase = "./imagenes/";
    // Concatenar el nombre de la opción con la extensión ".png"
    let rutaImagen = rutaBase + nombre + ".png";
    return rutaImagen;
}