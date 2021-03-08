function valorMax(numero){
    let max = Math.max.apply(null,numero);
    let posicion = numero.indexOf(max);
    let resultadofinal = new Array();
    resultadofinal.push(max,posicion) ;
    return resultadofinal;
}
var x = [10,24,36,7,98,11,14,20];

final = valorMax(x);

console.log(final);