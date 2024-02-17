let clientes = [
    { cedula: "2222222", nombre: "Juan", edad: 20 },
    { cedula: "1457978", nombre: "Mario", edad: 50 },
    { cedula: "1452154", nombre: "Pepe", edad: 22 },
];

function guaradarCambios() {
    let valorNombre = recuperaraTexto("txtNombre");
    let valorCedula = recuperaraTexto("txtCedula");
    let valorEdad = recuperarFloat("txtedad");
    let datosCliente = {};
    datosCliente.cedula = valorCedula;
    datosCliente.nombre = valorNombre;
    datosCliente.edad = valorEdad;

    modificarCliente(datosCliente);
    //Muestra en tabla
    mostrarClientes();
}
function modificarCliente(cliente) {
    let clienteEncontrado = buscarCliente(cliente.cedula);
    if (clienteEncontrado != null) {
        clienteEncontrado.nombre = cliente.nombre;
        clienteEncontrado.edad = cliente.edad;
    }
}

function ejecutarBusquedad() {
    let valorCedula = recuperaraTexto("txtCedulaBusquedad");
    let cliente = buscarCliente(valorCedula);

    if (cliente == null) {
        alert("Cliente no encontrado");

    } else {

        mostrarTextoEnCaja("txtCedula", cliente.cedula);
        mostrarTextoEnCaja("txtNombre", cliente.nombre);
        mostrarTextoEnCaja("txtedad", cliente.edad);
    }
}


function agregarCliente(cliente) {
    let resultado;
    resultado = buscarCliente(cliente.cedula);
    if (resultado == null) {
        clientes.push(cliente);
        alert("Cliente agregado: ");
        mostrarClientes();
    } else {
        alert("Ya exite el cliente con la cedula: " + " " + cliente.cedula)
    }
}

function crearCliente() {
    let valorNombre = recuperaraTexto("txtNombre");
    let valorCedula = recuperaraTexto("txtCedula");
    let valorEdad = recuperarFloat("txtedad");
    let nuevoCliente = {};
    nuevoCliente.cedula = valorCedula;
    nuevoCliente.nombre = valorNombre;
    nuevoCliente.edad = valorEdad;


    agregarCliente(nuevoCliente);
}

function buscarCliente(cedula) {
    let elementoCliente;
    let clienteEncontrado = null;
    for (let i = 0; i < clientes.length; i++) {
        elementoCliente = clientes[i];
        if (elementoCliente.cedula == cedula) {
            clienteEncontrado = elementoCliente;
            break
        }
    }
    return clienteEncontrado;
}

function mostrarClientes() {
    let cmpTabla = document.getElementById("TablaClientes");
    let contenidoTabla = "<table><tr>" +
        "<th>Cedula</th>" +
        "<th>Nombre</th>" +
        "<th>Edad</th>" +
        "</tr>";
    let elementosClientes;
    for (let i = 0; i < clientes.length; i++) {
        elementosClientes = clientes[i];
        contenidoTabla +=
            "<tr><td>" + elementosClientes.cedula + "</td>"
            + "<td>" + elementosClientes.nombre + "</td>"
            + "<td>" + elementosClientes.edad + "</td>"
            + "</tr>"
    }
    contenidoTabla += "</table>"
    cmpTabla.innerHTML = contenidoTabla;
}