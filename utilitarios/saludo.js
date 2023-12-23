function saludar(){
    let nombre=recuperaraTexto("txtNombre");
    let apellido=recuperaraTexto("txtApellido");
}
function recuperaraTexto(idComponente){
let componente;
let valorIngresado;
componente=document.getElementById(idComponente);
valorIngresado=componente.value;
return valorIngresado;
}