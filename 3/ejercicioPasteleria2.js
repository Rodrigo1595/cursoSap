/*El cliente tiene una pastelería. Quiere ofrecer descuentos a las empresas que compran sus productos (en este caso, tortas) en cantidad.  
Estos descuentos dependen de la cantidad de tortas compradas por cada empresa precargada en el sistema.

Si una empresa compra más de 100 tortas, tienen un 10% de descuento en sus próximas compras.
Si una empresa compra más de 500 tortas, tienen un 15% de descuento.
Independientemente de cuántas tortas compre, si compra más de 10 tortas, recibe 1 torta extra cada 15 tortas compradas.
Al cliente le gustaría saber en cada pedido de las empresas que tiene precargadas cuánto debería cobrarles, teniendo en cuenta si tienen descuentos o
no y si debería darle tortas extras y cuántas.

Requerimientos

Hacer un programa que modele los descuentos y tortas extras. - Listo
Utilizar los descuentos y tortas extras a la hora de hacer un pedido y que en base a ellos indique cuánto cobrarle a la empresa y cuántas tortas enviarle.*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Empresas pre-cargadas en arreglo de 2 dimensiones
var arrayEmpresas = [['empresa 1', 16], ['empresa 2', 510], ['empresa 3', 300] , ['empresa 4', 9]];
// valor x torta
var torta = 100;

function calcularPrecioTortas(nombre, cantidad) {
    var descuento = 0;
    if (cantidad > 10) {
        var tortasExtra = Math.floor(cantidad / 15);
    } else{
        tortasExtra = 0;
    }
    if (cantidad > 500) {
        descuento = 0.15;
    } else if (cantidad > 100) {
        descuento = 0.1;
    }
    let totalSinDescuento = (torta * cantidad);
    let totalConDescuento = totalSinDescuento - (totalSinDescuento * descuento);

    if (descuento == 0) {
        console.log('La empresa : ' + nombre + ' ' + 'no accede a descuento. La cantidad de tortas pedida fue : ' + cantidad + ' ' + ' Paga en total : ' + totalSinDescuento);
        console.log('Tortas extra:'+tortasExtra+' '+'Total de tortas : '+(cantidad+tortasExtra));
    } else {
        console.log('La empresa : ' + nombre + ' ' + 'sin descuento pagaría : ' + totalSinDescuento);
        console.log('Al pedir: '+' '+cantidad+' '+'tortas.'+' '+'Esta empresa obtendra : ' + ' ' + tortasExtra + ' ' + 'tortas extra ')
        console.log('Debe enviarle a la empresa: ' + (cantidad + tortasExtra) + ' ' + 'tortas en total.')
        console.log('Al aplicar el descuento del : '+(descuento*100)+'%  '+'debe pagar : ' + totalConDescuento + '. ' );
        
    };
    console.log('');
}

//Pedir arrayEmpresas[i][j]
for(i=0;i<4;i++){
    calcularPrecioTortas(arrayEmpresas[i][0], arrayEmpresas[i][1]);
}
