function validarEstructura(placa) {
    let validar = true;
    let longitud;
    longitud = placa.length;
    primerCaracter = placa.charAt(0);
    segundoCaracter = placa.charAt(1);
    tercerCaracter = placa.charAt(2);
    cuartoCaracter = placa.charAt(3);
    quintoCaracter = placa.charAt(4);
    sextoCaracter = placa.charAt(5);
    septimoCaracter = placa.charAt(6);
    octavoCaracter = placa.charAt(7);
    let mensajeError = " ";
    if (longitud == 7 || longitud == 8) {
        if (!esMayuscula(primerCaracter)) {
            validar = false
            mensajeError += "El primer caracter debe ser una MAYUSCULA";
        }
        if (!esMayuscula(segundoCaracter)) {
            validar = false
            mensajeError += "El segundo caracter debe ser una MAYUSCULA";
        }
        if (!esMayuscula(tercerCaracter)) {
            validar = false
            mensajeError += "El tercer caracter debe ser una MAYUSCULA";
        }
        if (!esGuion(cuartoCaracter)) {
            validar = false
            mensajeError += "El cuarto caracter debe ser un GUION";
        }
        if (!esDigito(quintoCaracter)) {
            validar = false
            mensajeError += "El quinto caracter debe ser un DIGITO";
        }
        if (!esDigito(sextoCaracter)) {
            validar = false
            mensajeError += "El sexto caracter debe ser un DIGITO";
        }
        if (!esDigito(septimoCaracter)) {
            validar = false
            mensajeError += "El septimo caracter debe ser un DIGITO";
        }
        if (longitud == 8 && !esDigito(octavoCaracter)) {
            validar = false
            mensajeError += "El octavo caracter debe ser un DIGITO";
        }
        if (validar) {
            return null;
        } else
            return mensajeError;
    } else {
        return mensajeError += "La longitud de la placa debe tener 7 u 8 CARACTERES";
    }
}
function obtenerProvincia(placaVehiculo) {
    primerCaracter = placaVehiculo.charAt(0);
    if (primerCaracter == "A") {
        return "Azuay";
    } else if (primerCaracter == "B") {
        return "Bolivar";
    } else if (primerCaracter == "C") {
        return "Carchi";
    } else if (primerCaracter == "E") {
        return "Esmeraldas";
    } else if (primerCaracter == "U") {
        return "Cañar";
    } else if (primerCaracter == "H") {
        return "Chimborazo";
    } else if (primerCaracter == "X") {
        return "Copotaxi";
    } else if (primerCaracter == "O") {
        return "El Oro";
    } else if (primerCaracter == "w") {
        return "Galápagos";
    } else if (primerCaracter == "G") {
        return "Guayas";
    } else if (primerCaracter == "I") {
        return "Imbabura";
    } else if (primerCaracter == "L") {
        return "Loja";
    } else if (primerCaracter == "R") {
        return "Los Ríos";
    } else if (primerCaracter == "M") {
        return "Manabí";
    } else if (primerCaracter == "V") {
        return "Morona Santiago";
    } else if (primerCaracter == "N") {
        return "Napo";
    } else if (primerCaracter == "Q") {
        return "Orellana";
    } else if (primerCaracter == "S") {
        return "Pastaza";
    } else if (primerCaracter == "p") {
        return "Pichincha";
    } else if (primerCaracter == "Y") {
        return "Salta Elena";
    } else if (primerCaracter == "J") {
        return "Santo Domigo de los Tsáchilas";
    } else if (primerCaracter == "K") {
        return "Sucumbíos";
    } else if (primerCaracter == "T") {
        return "Tungurahua";
    } else if (primerCaracter == "Z") {
        return "Zamora Chimchipe";
    } else {
        return null;
    }
}
function obtenerTipoVehiculo(placa) {

    segundoCaracter = placa.charAt(1);
    vehiculoPrivado = "DBCFGHIJKLNOPQRTUVWY";

    if (segundoCaracter === 'A' || segundoCaracter === 'Z') {
        return "Vehiculo Comercial";

    } else if (segundoCaracter === 'E') {
        return "Vehiculo Gubernamental";

    } else if (segundoCaracter === 'X') {
        return "Vehiculo de uso oficial";

    } else if (segundoCaracter === 'S') {
        return "Vehiculo del Gobierno Provincial";

    } else if (segundoCaracter === 'M') {
        return "Vehiculo Municipal";

    } else if (vehiculoPrivado.includes(segundoCaracter)) {
        return "Vehiculo Particular (privado)";

    } else {
        return null;
    }
}
function obtenertDiaPicoYPlaca(placa) {
    let ultimoCaracter = placa.length - 1;
    let digito = placa.charAt(ultimoCaracter);
    if (digito == 1 || digito == 2) {
        return "Lunes"
    }
    if (digito == 3 || digito == 4) {
        return "Martes"
    }
    if (digito == 5 || digito == 6) {
        return "Miercoles"
    }
    if (digito == 7 || digito == 8) {
        return "Jueves"
    }
    if (digito == 9 || digito == 10) {
        return "Viernes"
    }

}