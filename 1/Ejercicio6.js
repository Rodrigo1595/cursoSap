// 1 Iguales
function arrayIgual(a,b){
    //Al usar every se puede comparar directamente dentro de otra funcion con el otro array. 
    //retorna el elemento si es igual y en esta en el mismo indice exacto e itera cada uno de ellos.
    if(a.length == b.length && a.every(function(element,index){return element === b[index]})){
        return true;        
    }else{
        return false;
    }
}
// 2 Mas Largo
function arrayMasLargo(a,b){
    if(a.length > b.length){
        return ('X es mas largo que Y');
    }else{
        return ('Y es mas largo que X');
    }
}
//3 Caracteres en comun
function caracteresEnComun(a,b){
   let arrayfinal = new Array();
   for(i=0;i<a.length;i++){
    for(j=0;j<b.length;j++){
        if (a[i]==b[j] ){
            arrayfinal.push(a[i]);
            }
        }
    }
    //se utiliza filter y se itera en si mismo sus elementos para comparar si hay duplicados
    //Lo vi en el mdn de mozilla , esta re bueno.
    var arraySinRepetir = arrayfinal.filter(function(elemento, index, self) {
        return index === self.indexOf(elemento);
    })
    return arraySinRepetir.length;
 }
 

var X = ['a','l','f','a'];
var Y = ['a','l','f','a','j','o','r'];

//Verifica si son iguales o no
var parte1 = arrayIgual(X,Y);
// Cual de los dos es mas largo
var parte2 = arrayMasLargo(X,Y);
//Contador de caracteres iguales
var parte3 = caracteresEnComun(X,Y);
console.log(parte1);
console.log(parte2);
console.log(parte3);




