function maxRepite(arr){
    let maximo = Math.max.apply(null,arr);
    let cantidadRepeticiones = 0;
    let arregloFinal = new Array();
    for(i=0;i<arr.length;i++){
        if(arr[i] == maximo){
            cantidadRepeticiones++;
        } 
    }
    arregloFinal.push(maximo,cantidadRepeticiones);
    return arregloFinal;
 }

var arreglo = [10,24,36,7,98,11,14,20,98,14,10];

mostrar=maxRepite(arreglo);

console.log(mostrar);

