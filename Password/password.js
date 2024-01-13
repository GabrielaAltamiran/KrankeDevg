function validarPasword(password) {
    //variable para alamacenar mensajes de errores
    let errores = "";
    //Verifica la longitud minima
    if (password.length < 8) {
        errores += "La longitud del password debe ser minima de 8 Caracteres"
    }
    //Verifica la longitud maxima
    if (password.length > 16) {
        errores += "La longitud maxima no puede ser mayor a 16 CARACTERES"
    }
    //Verficar al menos una mayuscula 
    let tieneMayuscula = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i].toUpperCase() !== password[i]) {
            tieneMayuscula = true;
        }
    }
    if (!tieneMayuscula) {
        errores += "El password debe contener una letra MAYUSCULAS"

    }
    //Verificar al menos un digito
    let tieneUnDigito = false;
    for (let i = 0; i < password.length; i++) {
        if (!isNaN(password[i])) {
            tieneUnDigito = true;

        }
    }
    if (!tieneUnDigito) {
        errores += "El password debe contener al menos un DIGITO"
    }
    //Verificar al menos un caracter especial
    let tieneCaracterEspecial = false;
    const tieneCaracterEspeciales = ["*", "-", "_"];
    for (let i = 0; i < password.length; i++) {
        if (tieneCaracterEspeciales.includes(password[i])) {
            tieneCaracterEspecial = true;

        }
    }
    if (!tieneCaracterEspecial) {
        errores += "El passaword debe coneter al menos un caracer ESPECIAL "
    }
    //Retonar mensajes de error
    return errores;
}
function ejecutarValidacion() {
    const password = document.getElementById('password').value;
    const erroresValidacion = validarPasword(password);
    const resultadoDiv = document.getElementById('resultado');

    if (erroresValidacion.length === 0) {
        resultadoDiv.textContent = 'El password es válido.' ;
    } else {
        resultadoDiv.textContent = 'Errores de validación: ' + erroresValidacion;
    }
}