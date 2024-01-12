function esMayuscula(caracter) {
    caracter = caracter.charCodeAt(0);
    if (caracter >= 65 && caracter <= 90) {
        return true;
    } else {
        return false;
    }
}
function esDigito(caracter) {
    caracter = caracter.charCodeAt(0);
    if (caracter >= 48 && caracter <= 57) {
        return true;
    } else {
        return false;
    }
}
function esGuion(caracter) {
    caracter = caracter.charCodeAt(0);
    if (caracter == 45) {
        return true;
    } else {
        return false;
    }
}