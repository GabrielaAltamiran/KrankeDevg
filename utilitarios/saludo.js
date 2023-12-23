function saludar(){
    let nombre=recuperaraTexto("txtNombre");
    let apellido=recuperaraTexto("txtApellido");
    let edad =recuperarInt("txtEdad");
    let estatura =recuperarFloat("txtEstatura");
}
function recuperaraTexto(idComponente){
let componente;
let valorIngresado;
componente=document.getElementById(idComponente);
valorIngresado=componente.value;
return valorIngresado;
}
function recuperarInt(idComponente){
    let valorCaja=recuperaraTexto(idComponente);
    let valorEntero=parseInt(valorCaja);
    return valorEntero;
}
function recuperarFloat(idComponente){
    let valorCaja=recuperaraTexto(idComponente);
    let valorFlotante=parseFloat(valorCaja);
    return valorFlotante;
}