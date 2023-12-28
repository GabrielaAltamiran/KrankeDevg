function calcularPromedioNotas(){
    let promedio;
    let promedioDecimales;
    let not1;
    let not2;
    let not3;
    let cmpRespuesta;
    not1=recuperarFloat("nota1");
    not2=recuperarFloat("nota2");
    not3=recuperarFloat("nota3");
    promedio=calcularPromedio(not1,not2,not3);
    promedioDecimales=promedio.toFixed(2);
    let respuesta="El promedio es de "+promedioDecimales;
    mostrarTexto("lblPromedio",respuesta);
    // Obtener el elemento por el id correcto ("lblrespuesta" en lugar de "lblRespuesta")
    cmpRespuesta = document.getElementById("lblPromedio");
    // Actualizar el contenido HTML del elemento con el resultado formateado
    cmpRespuesta.innerHTML, respuesta;
    if(promedioDecimales>= 7){ 
        mostrarImagen("gifImagenes","exito.gif");
    }else{
        mostrarImagen("gifImagenes","fracaso.gif");
    }
    if(promedioDecimales < 5 && promedioDecimales > 0 ){
        mostrarImagen("gifImagenes","reprobado.gif");
        mostrarTexto("lblResultados","REPROBADO");
    }else if(promedioDecimales >= 5 && promedioDecimales <= 8){
        mostrarImagen("gifImagenes","buenTrabajo.gif");
        mostrarTexto("lblResultados","BUEN TRABAJO");
    }else if (promedioDecimales > 8 && promedioDecimales <= 10){
        mostrarImagen("gifImagenes","exelente.gif");
        mostrarTexto("lblResultados","EXCELENTE");
    }else {
        mostrarImagen("gifImagenes","incorrecto.gif");
        mostrarTexto("lblResultados","DATOS INCORRECTOS");
    }
}

