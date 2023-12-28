let puntos = 0;
let lanzamientos = 5;

jugar = function() {
    let resultado = lanzarDado();
    console.log(resultado);
    mostrarCara(resultado);
    modificarPuntos(resultado);
    modificarLanzamientos();
};

modificarPuntos = function(numero) {
    puntos = puntos+numero;
    cambiarTexto("lblPuntos", puntos);
    //Si el jugadorobtiene más de 20 puntos
    //Mostrar un mensaje GANASTE!!
    //invocar a limpiar
    if (puntos > 20) {
        cambiarTexto("lblMeta", "¡GANASTE!");
        limpiar();
    }
};


//no recibe parámetros
//Resta 1 la variable lanzamientos, Guarda el resultado en la misma variable
//Y muestra en pantalla
modificarLanzamientos = function() {
    lanzamientos--;
    cambiarTexto("lblLanzamientos", lanzamientos);
    //Sí lanzamientos llega a 0
    //Mostrar en pantalla en mensaje GAME OVER
    if (lanzamientos === 0) {
        cambiarTexto("lblMeta", "¡GAME OVER!");
        limpiar();
    }
};
//Colocar puntaje en 0 y lanzamientos en 5
limpiar = function() {
    puntos = 0;
    lanzamientos = 5;
    cambiarTexto("lblPuntos", puntos);
    cambiarTexto("lblLanzamientos", lanzamientos);
    cambiarImagen("imgDado", "");
    
};
//Función mostrarCara, Recibe el número que quiere mostrar
//Muestra la imagen correspondiente al número que recibe
//No retorna nada
mostrarCara = function(numero) {
    if (numero === 1) {
        cambiarImagen("imgDado", "dados1.png");
    } else if (numero === 2) {
        cambiarImagen("imgDado", "dados2.png");
    } else if (numero === 3) {
        cambiarImagen("imgDado", "dados3.png");
    } else if (numero === 4) {
        cambiarImagen("imgDado", "dados4.png");
    } else if (numero === 5) {
        cambiarImagen("imgDado", "dados5.png");
    } else if (numero === 6) {
        cambiarImagen("imgDado", "dados6.png");
    }
};

lanzarDado = function() {
    let aleatorio = Math.random();
    let aleatorioMultiplicado = aleatorio * 6;
    let aleatorioEntero = Math.floor(aleatorioMultiplicado);
    let valorDado = aleatorioEntero + 1;
    return valorDado;
};
