let notas = [];

function agregarElementos() {
    notas.push(5);
    notas.push(10);
    console.log(notas.length);
}

function recorrerArreglo() {
    let notaR;
    for (let indice = 0; indice < notas.length; indice++) {
        //recuperar el elemento 
        notaR = notas[indice];
        console.log(notaR);
    }
}

function probarAgregar() {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

function agregarNota(nota) {
    notas.push(nota);

}

function calcularPromedio() {
    let sumaNotas = 0;
    let promedio = 0;
    for (let sum = 0; sum < notas.length; sum++) {
        sumaNotas += notas[sum];
    }
    promedio = sumaNotas / notas.length;
    return promedio;
}

function ejecutarPromedio() {
    let promedio;
    promedio = calcularPromedio();
    mostrarTexto("lblPromedio", promedio);
}