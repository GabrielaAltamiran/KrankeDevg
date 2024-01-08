calcularDescuento = function(monto,porcentajeDescuento){
    let montoEntero=parseFloat(monto);
    let enteroDescuento=parseInt(porcentajeDescuento);
    let resultadoporcentaje=(montoEntero*enteroDescuento)/100;
    return resultadoporcentaje;
}
calcularIVA=function(monto,descuento){
   let montoEntero=parseFloat(monto);
     let resultadoConIva=((montoEntero-descuento)*12)/100;
   return resultadoConIva;
}
calcularSubTotal =function (precio,cantidad){
   let totalPagar;
   let resultadoPagar=precio*cantidad;
   totalPagar=resultadoPagar
   return totalPagar;

}
calcularTotal = function(subtotal,descuento,IVA){
   let valorTotal;
   let resultadovalorTotal=subtotal-descuento+IVA;
   valorTotal=resultadovalorTotal
   return valorTotal;
}
