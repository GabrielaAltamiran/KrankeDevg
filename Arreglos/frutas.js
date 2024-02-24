let frutas = ["Pera", "Manzana", "Banana"];

function probarBusquedad() {

    let frutaIngresada = recuperarTexto("lblFruta");
    let resultado = buscar(frutaIngresada);
    if (resultado == null) {
        alert("No existe la fruta");
    } else {
        alert(frutaIngresada + " " + "Existe la fruta");
    }
}

function buscar(fruta) {
    let elemento;
    let frutaEncontrada = null;
    for (let i = 0; i < frutas.length; i++) {
        elemento = frutas[i];
        if (fruta == elemento) {
            frutaEncontrada = elemento;
            break
        }
    }
    return frutaEncontrada;
}
function probar() {
    // for (let i = 0; i <= 10; i++) {
    //     let imprimir = i + 2;
    //     console.log(imprimir);

    // }

    // for (let i = 0; i < 1; i++) {
    //     console.log(i);
    // }

    // for (let i = 5; i <= 40; i+=5) {
    //     console.log(i);
    // }

    // let par=0;
    // for (let i = 2; i <=10 ; i+=2) {
    //     par+=i;    
    // }
    // console.log(par);

    // for (let i = 6; i > 0; i--) {
    //     i=i+2
    //     console.log(i);
    //     bluce infinito

    // }

    // for (let i = 9; i > 0; i--) {
    //     let imprimir=i-1;
    //     console.log(imprimir);

    // }




    // for (let i = 2; i <=10; i++) {
    //     let imprimir=i+2;
    //     console.log(imprimir);





    // for (let i = 5; i <=10; i++) {
    // console.log(i);

    // }


    // for (let i = 0; i <= 5; i++) {
    //     console.log(i);
    // }
}