let esNuevo = false;
let empleados = [
    { cedula: "1714616123", nombre: "John", apellido: "Cena", sueldo: 500.0 },
    { cedula: "0914632123", nombre: "Luisa", apellido: "Gonzalez", sueldo: 900.0 },
    { cedula: "8512479305", nombre: "Genesis", apellido: "Mendoza", sueldo: 750.30 }
]
function mostrarOpcionEmpleado() {
    mostrarComponente("divEmpleado");
    ocultarComponente("divRol");
    ocultarComponente("divResumen");
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
    mostrarEmpelado();
}
function mostaraOpcionRol() {
    mostrarComponente("divRol");
    ocultarComponente("divResumen");
    ocultarComponente("divEmpleado");
}
function mostaropcionResumen() {
    mostrarComponente("divResumen");
    ocultarComponente("divRol");
    ocultarComponente("divEmpleado");
}
function mostrarEmpelado() {
    let tablaEmpleado = document.getElementById("tablaEmpleados");
    let contenidoTablaEmple = "<Table><tr>" +
        "<th>Cedula</th>" +
        "<th>Nombre</th>" +
        "<th>Apellido</th>" +
        "<th>Sueldo</th>" +
        "</tr>";
    let datosEmpleados = "<Table><tr>"
    for (let i = 0; i < empleados.length; i++) {
        datosEmpleados = empleados[i];
        contenidoTablaEmple +=
            "<tr><td>" + datosEmpleados.cedula + "</td>" 
            + "<td>" + datosEmpleados.nombre + "</td>" 
            + "<td>" + datosEmpleados.apellido + "</td>" 
            + "<td>" + datosEmpleados.sueldo + "</td>"
            "</tr>"
    }
    contenidoTablaEmple += "</table>"
    tablaEmpleado.innerHTML = contenidoTablaEmple;
    deshabilitarComponente("txtCedula");
    deshabilitarComponente("txtNombre");
    deshabilitarComponente("txtApellido");
    deshabilitarComponente("txtSueldo");
    deshabilitarComponente("btnGuardar");
}
function ejecutarDeNuevo() {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}
function buscarEmpleado(cedula) {
    let datosEmpleado;
    let empleadoEncontrado = null;
    for (let i = 0; i < empleados.length; i++) {
        datosEmpleado = empleados[i];
        if (datosEmpleado.cedula == cedula) {
            return empleadoEncontrado;
        } else {
            return null;
        }
    }


}
function agregarEmpleado(empleado) {
    let agregar = buscarEmpleado(empleados.cedula);
    if (agregar == null) {
        empleados.push(empleado);
        return true;
    } else {
        alert("Ya existe el empleado con la cedula:" + " " + empleado.cedula);
        return false;
    }
}


function guardar() {
    let valorCedula = recuperarTexto("txtCedula");
    let valorNombre = recuperarTexto("txtNombre");
    let valorApellido = recuperarTexto("txtApellido");
    let valorSueldo = recuperarFloat("txtSueldo");
    //-----------Validacion de la cedula------------
    cedulaValidacion = false
    if (valorCedula.length != 10) {
        cedulaValidacion = true;
    }
    //-----------Validacion del nombre------------
    let nombreMayuscula = 0;
    for (let i = 0; i < valorNombre.length; i++) {
        let letra = valorCedula.charCodeAt(i)
        if (letra >= 65 && letra <= 90) {
            nombreMayuscula++;
        }
    }
    //-----------Validacion del apellido------------
    let apellidoMasyuculas = 0;
    for (let i = 0; i < valorApellido.length; i++) {
        let letra = valorApellido.charCodeAt(i)
        if (letra >= 65 && letra <= 90) {
            apellidoMasyuculas++;
        }
    }
    //-----------Validacion del sueldo------------
    let validarSueldo = false
    if (validarSueldo >= 400 && validarSueldo <= 5000) {
        validarSueldo = true
    }
    //---------Si hubo un error--------
    if (cedulaValidacion == true) {
        mostrarTexto("lblErrorCedula", "Error debe ingresar 10 digitos");
    } else {
        mostrarTexto("lblErrorCedula", "");
    }
    if (nombreMayuscula != valorNombre.length || nombreMayuscula == 0 || valorNombre.length < 3) {
        mostrarTexto("lblErrorNombre", "Error debe tener 3 carcteres en mayuscula");
    } else {
        mostrarTexto("lblErrorNombre");
    }
    if (apellidoMasyuculas != valorApellido.length || apellidoMasyuculas == 0 || valorApellido.length < 3) {
        mostrarTexto("lblErrorApellido", "Error debe tener 3 carcteres en mayuscula");
    } else {
        mostrarTexto("lblErrorApellido");
    }
    if (validarSueldo == false) {
        mostrarTexto("lblErrorSueldo", "Error debe ingresar digitos, sueldo entre 400 y 5000");
    } else {
        mostrarTexto("lblErrorSueldo", "");
    }
    //-----------Si todo valida correctamente continuar con el codigo---------
    if (cedulaValidacion == true && nombreMayuscula == valorNombre.length && valorNombre.length >= 3 && apellidoMasyuculas == valorApellido.length && valorApellido.length >= 3 && validarSueldo == true) {

    } if (esNuevo == true) {
        let nuevo = {}
        nuevo.cedula = valorCedula;
        nuevo.nombre = valorNombre;
        nuevo.apellido = valorApellido;
        nuevo.sueldo = valorSueldo;
        let agregar = agregarEmpleado(nuevo);
        mostrarEmpelado();
        alert("Empleado se guardo correctamente");
        agregarEmpleado();
        habilitarComponente("txtCedula");
        habilitarComponente("txtNombre");
        habilitarComponente("txtApellido");
        habilitarComponente("txtSueldo");
        habilitarComponente("btnGuardar");
    }
}
