function validarPlaca() {
    let placa = document.getElementById('txtPlaca').value;
    let erroresEstructura = validarEstructura(placa);
    let provincia = obtenerProvincia(placa);
    let tipoVehiculo = obtenerTipoVehiculo(placa);
    let picoYPlaca = obtenertDiaPicoYPlaca(placa);

    if (erroresEstructura === null) {
        lblValidacion.innerText = "ESTRUCTURA VALIDA";
        document.getElementById("lblError").innerText = "";
        if (provincia != null) {
            document.getElementById("lblProvincias").innerText = "PROVINCIA: " + provincia;
        } else {
            document.getElementById("lblProvincias").innerText = "PROVINCIA INCORRECTA";
        }
        if (tipoVehiculo != null) {
            document.getElementById("lblTipoVehiculo").innerText = "TIPO DE VEHICULO: " + tipoVehiculo;
        } else {
            Document.getElementById("lblTipoVehiculo").innerText = "TIPO DE VEHICULO INCORRECTO";
        }
        if (picoYPlaca != null) {
            document.getElementById("lblPicoYplaca").innerText = "SU DÍA DE PICO Y PLACA ES:  " + picoYPlaca;
        }
    } else {
        document.getElementById("lblError").innerText = erroresEstructura;
        lblValidacion.innerText = "ESTRUCTURA INCORRECTA";
    }
}
function limpiar() {
    document.getElementById("txtPlaca").value = "";
    document.getElementById("lblProvincias").innerText = "";
    document.getElementById("lblTipoVehiculo").innerText = "";
    document.getElementById("lblPicoYplaca").innerText = "";
    document.getElementById("lblValidacion").innerText = "";
    document.getElementById("lblError").innerText = "";
}