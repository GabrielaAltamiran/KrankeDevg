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

function generarTabla() {
    let contenidoTabla = "";
    let cmpTabla = document.getElementById("divTabla");
    contenidoTabla += "<table><tr><td>UNO</td></tr></table>" +
        "<tr><td>DOS</td></tr></table>";
    cmpTabla.innerHTML = contenidoTabla;
}

function mostrarNotas() {
    let cmpTabla = document.getElementById("divTabla");
    let contenidoTabla = "<table><tr><th>NOTA</th></tr>"
    let miNota;
    for (let i=0; i < notas.length; i++) {
        miNota = notas[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += miNota;
        contenidoTabla += "</tr></td>";
    }
    contenidoTabla += "</table>";
    cmpTabla.innerHTML=contenidoTabla;
}


function probarAgregar() {
    let notaRecuperada;
    notaRecuperada = recuperarInt("txtNota");
    agregarNota(notaRecuperada);
}

function agregarNota(nota) {
    notas.push(nota);
    mostrarNotas();

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