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
    let datosEmpleados;
    for (let i = 0; i < empleados; i++) {
        datosEmpleados = empleados[i];
        contenidoTabla +=
            "<tr><td>" + datosEmpleados.cedula + "</td>"
            + "<td>" + datosEmpleados.nombre + "</td>"
            + "<td>" + datosEmpleados.apellido + "</td>"
            + "<td>" + datosEmpleados.sueldo + "</td>"
            + "</tr>"
    }
    contenidoTablaEmple += "</table>"
    tablaEmpleado.innerHTML = contenidoTablaEmple;
}
function ejecutarDeNuevo() {
    habilitarComponente("txtCedula");
    habilitarComponente("txtNombre");
    habilitarComponente("txtApellido");
    habilitarComponente("txtSueldo");
    habilitarComponente("btnGuardar");
    esNuevo = true;
}