//No se olvide de respirar, mantenga la calma y demuestre lo que sabe
function esMayuscula(caracter) {
    caracter = caracter.charCodeAt(0);
    if (caracter >= 65 && caracter <= 90) {
        return true;
    } else {
        return false;
    }
}
let palabraSecreta;
function guardarPalabra() {
    let palabraIngresad = document.getElementById('txtSecreta').value;
    if (palabraIngresad.length === 5 && esMayuscula(palabraIngresad)) {
        palabraSecreta = palabraIngresad;
        console.log("Palbara ingresada: ", palabraSecreta);
    }else{
        alert("Debe ingresar una palabra de 5 letras mayusculas");
    }
}