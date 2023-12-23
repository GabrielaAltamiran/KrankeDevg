function saludar(){
    let nombre=recuperaraTexto("txtNombre");
    let apellido=recuperaraTexto("txtApellido");
    let edad =recuperarInt("txtEdad");
    let estatura =recuperarFloat("txtEstatura");
    let mensjeBienvenido ="Bienvenido " +nombre+" "+apellido;
    mostrarTexto("lblResultado",mensjeBienvenido);
    mostrarImagen("imgSaludo","./imgenes/GT.gif");
    mostrarTextoEnCaja("txtNombre"," ")
}