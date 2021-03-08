
function numerosIncrementales(numero){
    let numeros = new Array();
    for (i=0;i<numero;i++){
        numeros.push(i);
    }
    return numeros;
};

//NumeroPedir = prompt("Ingresar largo de numero en arreglo :");
//Creo que estoy aplicando mal el prompt o la menos no me lo toma , lo ocupe en google si (pues tiene interfaz)
//y funca en la consola , por ahora lo dejare comentado y utilizare numeros cualquiera para probar.

arregloFinal = numerosIncrementales(7);

console.log(arregloFinal);



