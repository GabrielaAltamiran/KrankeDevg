//Paso2
function numeroEntreUnoYCien() {
    let numeroEntre = Math.floor(Math.random() * 100) + 1;
    return numeroEntre;
}
//paso 3
function generarAleatorio() {
    //literal a
    let aleatorio = [];
    //literal b
    let valorIngresado = recuperarInt("txtNumero");
    if (valorIngresado >= 5 && valorIngresado <= 20) {
        console.log("El número generado está entre 5 y 20: " + valorIngresado);
        //lietral c
        for (let indice = 0; indice < valorIngresado; indice++) {
            console.log(indice);
            //literal e
            let aleatorio2 = numeroEntreUnoYCien();
            aleatorio.push(aleatorio2)

        }
    } else {
        console.log("El número generado NO está entre 5 y 20: " + valorIngresado);
    }
    mostrarResultados(aleatorio);
}
//paso 4
function mostrarResultados(arregloNumeros) {
    let valores;
    let cmpTabla = document.getElementById("txtTabla")
    let contenidoTabla = "<table><tr><th>VALORES</th></tr>";
    for (let i = 0; i < arregloNumeros.length; i++) {
        valores = arregloNumeros[i];
        contenidoTabla += "<tr><td>";
        contenidoTabla += valores;
        contenidoTabla += "</td></tr>";
    }
    mostrarTexto =
        //paso 5
        contenidoTabla += "</table>";
    cmpTabla.innerHTML = contenidoTabla;
}
