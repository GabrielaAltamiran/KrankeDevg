function calcularTasaInteres(ingresoAnual){
    let tasaInteres;
    if(ingresoAnual<300.000){
    tasaInteres=0.16;
    }else if(ingresoAnual>300.000 && ingresoAnual<500.000){
    tasaInteres=0.15;
    }else if(ingresoAnual>500.000 && ingresoAnual<1000.000){
        tasaInteres=0.14;
    }else if(ingresoAnual>1000.000 && ingresoAnual<2000.000){
        tasaInteres=0.13;
    }else if(ingresoAnual>2000.000){
        tasaInteres=0.12;
    }
    return tasaInteres;
}
function calcularCapacidadPago(edad,ingresos,egresos){
let capacidadPago;
let excedentes= ingresos - egresos;
    if(edad>50){
        capacidadPago=0.3*excedentes;
    }else if(edad<=50){
        capacidadPago=0.4*excedentes;
    }
    return capacidadPago;
 }
function calcularDescuento(precio,cantidad){
   let descuento = 0;
    if(cantidad >= 3 && cantidad <= 5){
        descuento=0.02;
    }else if(cantidad >= 6 && cantidad <= 11){
        descuento=0.03;
    }else if(cantidad >= 12){
        descuento=0.04;
    }
    let valorConDescuento=precio * (1 - descuento);
    return valorConDescuento;
}
function determinarColesterolLDL(nivelColesterol){
    if(nivelColesterol < 100){
        return "Optimo";
    }else if (nivelColesterol >= 100 && nivelColesterol < 130){
        return "Normal";
    }else if (nivelColesterol >= 130 && nivelColesterol < 160){
        return "Ligeramente Elevado";
    }else if (nivelColesterol >= 160 && nivelColesterol < 190){
        return "Elevado";
    }else{
        return "Muy Elevado";
    }
}
function validarClave(clave){
    if(clave >= 8 && clave <= 16){
        return true;
    }else{
        return false;
    }
}
function esMayuscula(caracter){
    let codigoAscii=caracter.charCodeArt(0);
    if(codigoAscii >= 65 && codigoAscii <= 90){
        return true;//son mayusculas sin tilde 
    }else{
        return false;//NO son mayusculas y tiene tilde 
    }
}
function esMinuscula(caracter){
    let codigoAscii=caracter.charCodeArt(0);
    if(codigoAscii >= 97 && codigoAscii <= 122 || codigoAscii >= 160 && codigoAscii <= 163){//con el operador logico && son las minusculas sin tildes y con el operador logico || son con tilde las minusculas
        return true;//son minusculas con tilde y sin tilde 
    }else{
        return false;// NO son minusculas con tilde y sin tilde 
    }
}
function esDigito(caracter){
    let codigoAscii=caracter.charCodeArt(0);
    if(codigoAscii >= 48 && codigoAscii <= 57){
        return true;//es un digisto 
    }else{
        return false;//NO es un digito
    }
}
function darPermiso(notaMatematicas,notaFisica,notaGeometrica){
    if(notaFisica > 90 || notaGeometrica > 90 || notaMatematicas > 90 ){
        return true;
    }else{
        return false;
    }
}
function otorgarPermiso(notaMatematicas,notaFisica,notaGeometrica){
    if(notaFisica > 90 || notaMatematicas > 90 && notaGeometrica > 80){
        return true;
    }else{
        return false;
    }
}
function dejarSalir(notaMatematicas,notaFisica,notaGeometrica){
    if(notaFisica > 90 || notaGeometrica > 90 || notaMatematicas > 90 && notaFisica > notaMatematicas ){
        return true;
    }else{
        return false;
    }
}