function saludar(){
    let nombre=recuperaraTexto("txtNombre");
    let apellido=recuperaraTexto("txtApellido");
    let edad =recuperarInt("txtEdad");
    let estatura =recuperarFloat("txtEstatura");
    let mensjeBienvenido ="Bienvenido " +nombre+" "+apellido;
    mostrarTexto("lblResultado",mensjeBienvenido);
    mostrarImagen("imgSaludo","./imgenes/GT.gif");
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
function mostrarTexto(idComponente,mensaje){
    let componente;
    componente=document.getElementById(idComponente);
    componente.innerText=mensaje;
}
function mostrarImagen(idComponente,rutaImagen){
    let componente;
    componente=document.getElementById(idComponente);
    componente.src = rutaImagen;

}