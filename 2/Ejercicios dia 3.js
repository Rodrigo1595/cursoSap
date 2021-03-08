//Completar las condiciones de los if del siguiente script para que los mensajes se muestren siempre de forma correcta:
var numero1 = 5;
var numero2 = 8;

if (numero2 > numero1) {

  console.log("numero1 no es mayor que numero2");

}

if (numero2 > 0) {

  console.log("numero2 es positivo");

}

if (numero1 != 0) {

  console.log("numero1 es negativo o distinto de cero");

}

if (numero1 + 1 < numero2) {

  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");

}

/* A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];

1 Determinar cual de los dos elementos de texto es mayor
2 Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos*/

var valores = [true, 5, false, "hola", "adios", 2]

//1
if (valores[3].length > valores[4].length) {
  console.log('El valor : ' + valores[3], 'es mayor.');
} else {
  console.log('El valor : ' + valores[4], 'es mayor.')
};

valoresMatematicos(valores[1], valores[5]);
//2
function valoresMatematicos(a, b) {
  console.log('Suma : ' + (a + b));
  console.log('Resta : ' + (a - b));
  console.log('Multiplicacion : ' + (a * b));
  console.log('Division : ' + (a / b));
}

/*Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa 
cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.*/


console.log(upperLowerMix('CAdDE'));

function upperLowerMix(cadena) {
  let arrayPruebas = new Array();
  let upperCase = /[A-Z]/.test(cadena);
  if (upperCase == true) {
    arrayPruebas.push(cadena + ' Esta en mayusculas');
  };

  let lowerCase = /[a-z]/.test(cadena);
  if (lowerCase == true && arrayPruebas.length == 0) {
    arrayPruebas.push(cadena + ' Esta en minusculas');
  };

  if (upperCase == true && lowerCase == true) {
    arrayPruebas.shift()
    arrayPruebas.push(cadena + ' Es un mix de ambas Mayusculas y minusculas.')

  };


  return arrayPruebas;
};

/*
El factorial de un número entero n es una operación matemática
que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. 
Así, el factorial de 5 (escrito como 5!) es igual a: 5! = 5 x 4 x 3 x 2 x 1 = 120
Utilizando la estructura for, crear un script que calcule el factorial de un número entero.
 */

var numeroFactorial = 2.3;

if (Number.isInteger(numeroFactorial)) {
  var numeroFinal = numeroFactorial
  for (i = 1; i < numeroFactorial; i++) {
    numeroFinal = numeroFinal * (numeroFactorial - i)
  };
  console.log(numeroFinal);
} else {
  console.log('El numero no es entero');
}

// WORD EJERCICIOS 03 03.docx
//1
function valorDado() {
  let randomNumberDado = Math.floor(Math.random() * 7);
  if (randomNumberDado < 3) {

    let body = document.querySelector("body");
    body.textContent('MENSAJE A');
    document.body.appendChild(body);
    return 'MENSAJE A | ' + randomNumberDado

  } else {
    let body = document.querySelector("body");
    body.textContent('MENSAJE B');
    document.body.appendChild(body);
    return 'MENSAJE B | ' + randomNumberDado
  }
}


new Promise(function (resolve, reject) {
  setTimeout(() => {
    try {
      var valorFinal = valorDado();
      resolve(valorFinal);
    } catch (error) {
      reject(error);
    }

  }, 1000);
}).catch(console.log).then(console.log);

//2
//[Ford Fiesta,11450,1350344,5],[Ford Focus,11451,1750502,10]

function calcularAuto(Auto) {
  if (typeof Auto == 'number') {
    console.log(Auto)
  } else {
    Auto = Auto.toLowerCase();
    Auto = Auto.replace(/\s/g, "");
  }

  let detallesAuto = new Object()

  if (Auto == 'fordfiesta' || Auto == 11450) {
    let total = Math.floor(1350344 - (1350344 * 0.05));
    detallesAuto = {
      coche: 'Ford Fiesta',
      codigo: '11450',
      precio: '1350344',
      descuento: '5%',
      totalFinal: '$' + total
    }
    return detallesAuto;

  } else if (Auto == 'fordfocus' || Auto == 11451) {
    let total = Math.floor(1750502 - (1750502 * 0.1));
    detallesAuto = {
      coche: 'Ford Focus',
      codigo: '11451',
      precio: '1750502',
      descuento: '10%',
      totalFinal: '$' + total
    }
    return detallesAuto;
  } else {
    console.log('No existe ese coche');
  }
}

new Promise(function (resolve, reject) {
  setTimeout(() => {
    try {
      var respuestaSistema = calcularAuto('ford focus');
      resolve(respuestaSistema);
    } catch (err) {
      reject(err);
    }
  }, 1000);
}).catch(console.log).then(console.log);



//3 revisar ejercicio-3.js y ejercicio HTML.html

//4

/*Supongamos que se desea invertir una cantidad X de pesos en un sistema de ahorro que otorga el 33.5% Anual de interés efectivo, realice un programa que informe 
¿cuál es el interés en pesos que se va a ganar por mes? y ¿cuál es el total que debe recibirse por 3 meses?*/


function calcularInteres(pesos) {
  pesosInteres = ((pesos * 33.5) / 100) / 12;
  return ('Se ganara por mes en pesos: ' + pesosInteres + ' y recibira en total por 3 meses : ' + pesosInteres * 3);

}
console.log(final = calcularInteres(10000));

/*5
El cálculo de la letra del Documento Nacional de Identidad (DNI) es un proceso matemático sencillo que se basa en obtener 
el resto de la división entera del número de DNI y el número 23. A partir del resto de la división, se obtiene la letra seleccionándola dentro de un array de letras.
El array de letras es:
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
Por tanto si el resto de la división es 0, la letra del DNI es la T y si el resto es 3 la letra es la A. Con estos datos, elaborar un pequeño script que:
1.	Almacene en una variable el número de DNI indicado por el usuario y en otra variable la letra del DNI que se ha indicado.

2.	En primer lugar (y en una sola instrucción) se debe comprobar si el número es menor que 0 o mayor que 99999999. Si ese es el caso, 
se muestra un mensaje al usuario indicando que el número proporcionado no es válido y el programa no muestra más mensajes.

3.	Si el número es válido, se calcula la letra que le corresponde según el método explicado anteriormente.

4.	Una vez calculada la letra, se debe comparar con la letra indicada por el usuario. Si no coinciden, se muestra un mensaje
 al usuario diciéndole que la letra que ha indicado no es correcta. En otro caso, se muestra un mensaje indicando que el número y la letra de DNI son correctos.
*/

var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
calcularLetra(5, 'D')
function calcularLetra(numero, letra) {
  let DNI = numero;
  let letraAux = '';
  if (DNI < 0 || DNI > 99999999 || DNI == '') {
    console.log('El numero proporcionado no es valido')
  } else {
    letrapos = DNI % 23;
    letraAux = letras[letrapos]
    if (letraAux == letra) {
      console.log('El numero y letra son correctos.')
    } else {
      console.log('La letra proporcionada no es correcta.')
    }
  }
}

/* 6 revisar index.html y ejercicio6-dia3*/

//7

new Promise(function (resolve, reject) {
  setTimeout(() => {
    try {
      var valorFinal = valorAzar();
      resolve(valorFinal);
    } catch (error) {
      reject(error);
    }

  }, 1000);
}).catch(console.log).then(console.log());

function valorAzar() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {

    throw new Error('El numero fue 0!')

  } return ('El numero es : ' + random);
}

//8

var array = new Array();

function cargarArray(elemento) {
  if (elemento != '' && typeof elemento != 'undefined') {
    array.push(elemento);
    console.log(array);
  } else {
    throw new Error('El elemento esta vacio o indefinido!');
  }
  return array;
}


new Promise(function (resolve, reject) {
  setTimeout(() => {
    try {
      var item = cargarArray(2);
      resolve(item);
    } catch (error) {
      reject(error);

    }
  }, 3000)
}).catch(console.log).then();

//9
var array = new Array();
function functionCarga(elemento) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (elemento == '' && typeof elemento == 'undefined') {
        resolve(array.push(elemento));
      } else {
        reject('Error , el tipo de item no es valido');
      }
    }, 3000);
  }).catch(console.log()).then();
}

async function cargarArray2() {
  try {
    let promise = await functionCarga(2);
    promise = await functionCarga('k');
  } catch (e) {
    console.log(e)

  }
}
cargarArray2(3);