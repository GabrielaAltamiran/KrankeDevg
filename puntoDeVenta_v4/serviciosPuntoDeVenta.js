calcularValorDescuento=function(monto, porcentajededescuento){
   descuento= (monto*porcentajededescuento)/100;
   return descuento;
}

calcularIva=function(monto){
   iva=(monto*12)/100;
   return iva;
}

calcularSubtotal=function(precio,cantidad){
   totalapagar=precio*cantidad;
   return totalapagar;
}

calcularTotal=function(subtotal,descuento,iva){
   valorTotalaPagar=subtotal-descuento+iva;
   return valorTotalaPagar;
}