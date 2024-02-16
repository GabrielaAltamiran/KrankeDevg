function probarAtributos() {
    let persona = {
        nombre: "Pedro",
        apellido: "Morales",
        edad: 24,
        estaVivo: true

    }
    console.log(persona.nombre);
    console.log(persona.edad);
    if (persona.estaVivo == false) {
        console.log("No esta vivo");
    } else {
        console.log("Esta vivo")
    }
}
function crearProducto() {
    let producto1 = {
        nombre: "Valeria",
        precio: 0.0,
        stock: 7
    }
    console.log(producto1.nombre);
    let producto2 = {
        nombre: "Yudid",
        precio: 3.2,
        stock: 10
    }
    console.log(producto2.precio);
    if (producto1.stock > producto2.stock) {
        console.log("Stock de producto 1 es mayor a stock de producto 2");

    } else if (producto1.stock < producto2.stock) {
        console.log("Stock de producto 2 es mayor al stock de producto 1");

    } else if (producto1.stock == producto2.stock){
        console.log("Ambos stocks son iguales");
    }else{
        console.log("No es ninguna de las sentencias");
    }
}