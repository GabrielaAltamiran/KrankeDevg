function mostarNumeros() {
    console.log("ANTES DEL FOR");
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }


    console.log("depues delfor");
}
function mostarNumeros2() {
    console.log("ANTES DEL FOR");
    for (let indice = 1; indice <= 5; indice++) {
        console.log(indice);
    }
    console.log("Despues del for")
}
function numeroPares() {
    console.log("ANTES DEL FOR");
    for (let x = 2; x <= 10; x += 2) {
        console.log(x);
    }
    console.log("Despues del for");
}
function mostarInverso() {
    console.log("ANTES DEL FOR");
    for (let i = 10; i > 0; i--) {
        console.log(i);
    }
    console.log("Despues del for");
}
function hackearNasaPelis() {
    //hackeando la nasa 0%......100
    for (let porcentaje = 0; porcentaje <= 100; porcentaje += 10) {
        console.log("HACKEANDO NASA: " + porcentaje + "%");
    }
    console.log("NASA HA SIDO HACKEADA")
}
function mostarImpares() {
    console.log("ANTES DEL FOR");
    for (let impares = 1; impares <= 21; impares += 2) {
        console.log(impares);
    }
    console.log("DESPUES DEL FOR")
}