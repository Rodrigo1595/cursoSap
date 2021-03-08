//1 Cual de los dos es mas viejo
function masViejo(fido,gervasio){
    if (fido[2]<gervasio[2]){
        return ('Gervasio es mayor que fido');
    }else{
        return('Fido es mayor que Gervasio');
    }
}
//2 Casado
function casado(fido,gervasio){
    let array = new Array();
    if(fido[4] == true){
        array.push('Fido esta casado');
    }else{
        array.push('Fido no esta casado');
    }
    if(gervasio[4] == true){
        array.push('Gervasio esta casado');
    }else{
        array.push('Gervasio no esta casado');
    }

    return array;
}
// Aumento
function calculoAumento(fido,gervasio){
    fidonuevo = (fido[3].toString());
    fidonuevo = fidonuevo.split(",");
    fidonuevo = parseInt(fidonuevo,10);
    console.log(fidonuevo);
    gervasionuevo = (gervasio[3].toString())
    gervasionuevo = gervasionuevo.split(",");
    gervasionuevo = parseInt(gervasionuevo,10);
    console.log(gervasionuevo);
    nuevosueldo = fidonuevo+gervasionuevo*0.15;
    return nuevosueldo
}

datos1 = ['Fido','Gomez',26,15000.78,true] ;
datos2 = ['Gervasio','Fernandez',32,28.550,false];

var uno = masViejo(datos1,datos2);
console.log(uno);
var dos = casado(datos1,datos2);
console.log(dos);
var tres = calculoAumento(datos1,datos2);
console.log('El nuevo sueldo de fido es:',tres);
