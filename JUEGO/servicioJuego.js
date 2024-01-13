function obtenerAleatorio() {
    return Math.floor(Math.random() * 3) + 1;
}
function generarElementos(){
    let numeroAleatorio = obtenerAleatorio();
    if(numeroAleatorio === 1){
        return "PIEDRA";
    }else if(numeroAleatorio===2){
        return "PAPEL";
    }else{
        return "TIJERAS";
    }
}
function determinarGanador(eleccionJugador1,eleccionJugador2){
    if (eleccionJugador1 === eleccionJugador2) {
        return 0; // Empate
    } else if (
        (eleccionJugador1 === "piedra" && eleccionJugador2 === "tijera") ||
        (eleccionJugador1 === "papel" && eleccionJugador2 === "piedra") ||
        (eleccionJugador1 === "tijera" && eleccionJugador2 === "papel")
    ) {
        return 1; // Jugador 1 gana
    } else {
        return 2; // Jugador 2 gana
    }
}
function generarRuta(nombre){
    let rutaImagen = "./imagenes/" + nombre + ".png";
    return rutaImagen;
}