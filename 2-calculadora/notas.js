calcularPromedio = function (nota1, nota2, nota3) {
    let promedio;
    promedio = (nota1 + nota2 + nota3) / 3;
    return promedio;
}


calcular1 = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    nota1 = recuperarFloat("txtNota1");
    if (isNaN(nota1)) {
        alert("Error")
    } else {
        nota2 = recuperarFloat("txtNota2");
        if (isNaN(nota2)) {
            alert("Error")
        } else {
            nota3 = recuperarFloat("txtNota3");
            if (isNaN(nota3)) {
                alert("Error")
            } else {
                resultado = calcularPromedio(nota1, nota2, nota3);
                resultadoFormato = resultado.toFixed(2);
                mostrarTexto("lblResultado", resultadoFormato);
            }
        }
    }
}

calcular = function () {
    let nota1;
    let nota2;
    let nota3;
    let resultado;
    let resultadoFormato;
    let existeError = false;

    nota1 = recuperarFloat("txtNota1");

    nota2 = recuperarFloat("txtNota2");

    nota3 = recuperarFloat("txtNota3");

    if (esNotaValida(nota1, "lblError1") & esNotaValida(nota2, "lblError2") & esNotaValida(nota3, "lblError3")) {
        resultado = calcularPromedio(nota1, nota2, nota3);
        resultadoFormato = resultado.toFixed(2);
        mostrarTexto("lblResultado", resultadoFormato);
    } else {
        mostrarTexto("lblResultado", "0.0");
    }

}
function esNotaValida(nota, idComponeteError) {
    let hayErrores = flase;
    if (isNaN(nota)) {
        mostrarTexto(idComponeteError, "DEBE INGRESAR UN NÚMERO");
        hayErrores = true;
    }
    if (nota >= 0 && nota <= 10) {
        mostrarTexto(idComponeteError, "El numero debe estar esntre 0 y 10");
        hayErrores = true;

    }
    if (hayErrores == false) {
        mostrarTexto(idComponeteError, " ");
    }
    return !hayErrores;

}
