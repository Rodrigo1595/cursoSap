
function numerosIncrementales(numero){
    var numeros = new Array();
    for (i=0;i<numero;i++){
        if (i%2 == 0){
        numeros.push(0);
        }else{
            numeros.push(i)
        }

    }
    return numeros;
};

//NumeroPedir = prompt("Ingresar largo de numero en arreglo :");

arregloFinal = numerosIncrementales(4);

console.log(arregloFinal);