function ejecutarPrueba1() {
    let mensaje;
    mensaje = recuperarTexto("txtCdena");
    recorrerCadena(mensaje);
}
function ejecutarPrueba2() {
    let mensaje;
    let cadenaIverida;
    mensaje = recuperarTexto("txtCdena");
    cadenaIverida = recorrerCadenaInversa(mensaje);
    console.log(mensaje);
    mostrarTexto("txtCadena2", cadenaIverida);

}

function recorrerCadena(cadena) {
    //0123456
    //JUANITO
    let caracter;
    for (let posicion = 0; posicion < cadena.length; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("Caracter " + caracter + " " + "posicion " + posicion);
    }


    for (let posicion = 0; posicion <= cadena.length - 1; posicion++) {
        caracter = cadena.charAt(posicion);
        console.log("CARACTER " + caracter + " " + "POSICION " + posicion);
    }
}
//Lo contrario
function recorrerCadenaInversa(cadena) {
    let resultado = "";
    for (let posicion = cadena.length - 1; posicion >= 0; posicion--) {
        resultado += cadena[posicion];
    }
    return resultado;
}
//Buscar letras 
function buscarLetra(cadena, letra) {
    let letras;
    let exieteLetra = false;
    for (let i = 0; i < cadena.length; i++) {
        letras = cadena.charAt(i);
        if (letras == letra) {
            exieteLetra = true;
        }
    }
    if (exieteLetra == true) {
        return true;

    } else {
        return false;

    }
}
function contarMayuscula(cadena) {
    let letra;
    let contadorMayusculas;
    for (let i = 0; i < cadena.length; i++) {
        letra = cadena.charAt(i);
        if(esMayuscula(letra)){
            contadorMayusculas++;
        }

    }
    console.log(contadorMayusculas);
}