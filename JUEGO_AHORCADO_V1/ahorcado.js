//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
function esMayuscula(caracter) {
    caracter = caracter.charCodeAt(0);
    if (caracter >= 65 && caracter <= 90) {
        return true;
    } else {
        return false;
    }
}