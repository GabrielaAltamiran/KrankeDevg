function obtenerAleatorio() {
    return Math.floor(Math.random() * 3) + 1;
}
function generarElementos(){
    let numeroAleatorio = obtenerAleatorio();
    if(numeroAleatorio === 1){
        return "PIEDRA";
    }else if(numeroAleatorio===2){
        return "PAPEL";
    }else{
        return "TIJERAS";
    }
}