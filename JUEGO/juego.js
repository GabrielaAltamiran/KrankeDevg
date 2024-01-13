function jugar(seleccionado) {
    // Paso 1: Invocar a generarElemento y guardar el resultado en una variable
    let seleccionComputadora = generarElemento();

    // Paso 2: Invocar a generarRuta y mostrar la imagen seleccionada por el computador
    let rutaImagenComputadora = generarRuta(seleccionComputadora);
    console.log("La computadora seleccionó:");
    console.log(rutaImagenComputadora);

    // Paso 3: Invocar a determinarGanador
    let resultado = determinarGanador(seleccionComputadora, seleccionado);

    // Mostrar el resultado en pantalla
    if (resultado === 0) {
        console.log("EMPATE");
    } else if (resultado === 1) {
        console.log("GANASTE LA PARTIDA!!");
    } else {
        console.log("PERDISTE LA PARTIDA!!");
    }
}
