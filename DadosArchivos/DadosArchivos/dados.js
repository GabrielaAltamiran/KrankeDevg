jugar = function(){
    let aleatorio;
    aleatorio=lanzarDado();
    lanzarDado();
    cambiarTexto("lblNumero",aleatorio)
    if(aleatorio>3){
        cambiarTexto("lblMensaje"," FELICIDADES GANASTE!!");
    }
    else{
        cambiarTexto("lblMensaje"," LO SIENTO NO ESTAS DE SUERTE");
    }
}

// Crear una funcion llamda lanzar dado
//No recibe parámetros
//Retorna un número aleatorio entre 1 y 6
lanzarDado=function(){
    let aletorio;
    let numeroMultiplicado;
    let numeroEntero;
    let valorDado;
    aletorio=Math.random();// enre 0 y 1
    numeroMultiplicado=aletorio*6;
    numeroEntero=parseInt(numeroMultiplicado);
    valorDado=numeroEntero+1;
    return valorDado;
    }