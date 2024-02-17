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

    } else if (producto1.stock == producto2.stock) {
        console.log("Ambos stocks son iguales");
    } else {
        console.log("No es ninguna de las sentencias");
    }
}

function modificarAtributos() {
    let cuenta = {
        numeros: "5323423423",
        saldo: 0.0
    }
    cuenta.saldo = 100;
    cuenta.saldo += 10;

    console.log(cuenta.saldo);
}

function crearCliente() {
    let cliente = {
        cedula: "1755841002",
        nombre: "Juan"
    }
    let cliente1 = {}
    cliente1.nombre = "Romen";
    cliente1.apellido = "Salcedo";
    cliente1.cedula = "178754952";

}

function probrarIncrementoSlado() {
    let cuenta = { numero: "23424", saldo: 34.0 }
    incrementarSaldo(cuenta, 100);
    console.log(cuenta.saldo);
}
function probarDeterminarMayor() {
    let per1 = { nombre: "Dniel", edad: 45 }
    let per2 = { nombre: "Daniela", edad: 48 }
    let mayor;
    mayor = determinarMayor(per1, per2);
    if (mayor != null) {
        console.log("El mayor es: " + mayor.nombre);
    }
}

//usar un objeto como parametro
//aqui incrementamos
function incrementarSaldo(cuenta, monto) {
    cuenta.saldo += monto;
}

function determinarMayor(persona1, persona2) {
    if (persona1.edad > persona2.edad) {
        return persona1;
    } else if (persona2.edad > persona1.edad) {
        return persona2;
    } else {
        return null;
    }
}