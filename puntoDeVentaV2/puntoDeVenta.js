calcularValorTotal = function(){
    //variables para recuperar los valores de las cajas de texto
    let nombreProducto;
    let precioProducto;
    let cantidad;
    let porcentajeDescuento;
    //variables para almacenar los retornos de las funciones
    let valorSubtotal;
    let valorDescuento;
    let valorIVA;
    let valorTotal;
    //1. Recuperar el nombre del producto como String
    nombreProducto= recuperarTexto("txtProducto");
    //2. Recuperar el precio como float
    precioProducto = recuperarFloat("txtPrecio");
    //3. Recuperar cantidad como int
    cantidad = recuperarInt("txtCantidad");
    //4. Recuperar el porcentaje de descuento como int
   
    //4. Invocar a calcularSubtotal y el retorno guardar en la variable valorSubtotal
    valorSubtotal = calcularSubTotal(precioProducto,cantidad);
    //5. Mostrar valorSubtotal en el componente lblSubtotal
    mostrarTexto("lblResultado",valorSubtotal);
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10
                Subtotal esperado: 54
            Si el caso de prueba es exitoso, hacer un commit
         */
    //6. Invocar a calcularDescuento y lo que devuelve guardar en la variable valorDescuento
    valorDescuento = calcularDescuento(valorSubtotal,porcentajeDescuento);
    //7. Mostrar el resultado en el componente lblDescuento
    mostrarTexto("lblResultado",valorDescuento);
        /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
                Descuento esperado: 5.4
            Si el caso de prueba es exitoso, hacer un commit
         */
    //8. Invocar a calcularIVA y lo que devuelve guardar en la variable valorIVA
    valorIVA = calcularIVA(valorSubtotal,valorDescuento);
	//   El IVA debe calcularse sobre el valor del subtotal menos el descuento
    //9. Mostrar el resultado en el componente lblValorIVA
    mostrarTexto("lblResultado",valorIVA);
    /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 54
					--descuento:5.4
					--valorSubtotal - descuento: 48.6
                IVA esperado: 5.832
            Si el caso de prueba es exitoso, hacer un commit
        */
    //10. Invocar a calcularTotal y lo que devuelve guardar en la variable valorTotal
    valorTotal=calcularTotal(valorSubtotal,valorDescuento,valorIVA);
    //11. Mostrar el resultado en el componente lblTotal
    mostrarTexto("lblResultado",valorTotal);
     /*
            Caso de prueba: 
                precioProducto: 5.4  cantidad: 10 descuento: 10
					--valorSubtotal: 5.4
					--descuento: 5.4
					--IVA: 5.832
                Total esperado: 54.432
            Si el caso de prueba es exitoso, hacer un commit
        */
    //12. Mostrar un resumen en el componente lblResumen, si no existe debe agregarlo
    
        /*
            Ejemplo: 
                Valor a pagar por 20 cerveza corona con 10% de descuento: USD 48.75
            Si funciona, hacer un commit
        */ 
    
}   

function calcularDescuentoPorVolumen(subTotal,cantidad){
let descuento=0;
let valores = calcularValorTotal();
let validarNombreproducto=esNombreProductoValido();
let validarcantidad=esCantidadValida();
let validarP=validarProducto();
let validarprecio=esPrecioValido();

if (cantidad >= 3 && cantidad <= 5){
    //3% de descuento
    descuento = subTotal * 0.03;
}else if(cantidad >= 6 && cantidad <= 11){
    //4% de descuento
    descuento = subTotal * 0.04;
}else if(cantidad >= 12){
    //5% de descuento
    descuento = subTotal * 0.05;
}
return descuento;
}
// Variables
var nombreProducto = "";
var cantidad = 0;
var precio = 0;

// Función para validar el nombre del producto
function esNombreProductoValido() {
    if (nombreProducto === "") {
        alert("* CAMPO OBLIGATORIO");
        return false;
    }
    if (nombreProducto.length > 10) {
        alert("El nombre del producto no puede tener más de 10 caracteres");
        return false;
    }
    return true;
}
// Función para validar la cantidad
function esCantidadValida() {
    if (cantidad === 0) {
        alert("* CAMPO OBLIGATORIO");
        return false;
    }
    if (cantidad < 0 || cantidad > 100) {
        alert("La cantidad debe ser un número entero entre 0 y 100");
        return false;
    }
    return true;
}
// Función para validar el precio
function esPrecioValido() {
    if (precio === 0) {
        alert("* CAMPO OBLIGATORIO");
        return false;
    }
    if (precio < 0 || precio > 50) {
        alert("El precio debe ser un número entre 0 y 50");
        return false;
    }
    return true;
}

// Función para validar todos los campos
function validarProducto() {
    if (!esNombreProductoValido() || !esCantidadValida() || !esPrecioValido()) {
        return false;
    }
    return true;
}


limpiar=function(){
    /*
        Dejar todas las cajas de texto con el valor cadena vacía, 0 ó 0.0 según el tipo de dato
        Dejar todos los textos de los montos con el valor 0.0
        Si funciona, hacer un commit
     */
        mostrarTextoEnCaja("nombreDeProducto",);
        mostrarTextoEnCaja("cantidad","");
        mostrarTextoEnCaja("precio","");
        mostrarTexto("lblDescuento");
        mostrarTexto("lblResultado");
        mostrarTexto("lblResultado");
        mostrarTexto("lblResultado");
}
/* SI TODO FUNCIONA, HACER UN PUSH */ 