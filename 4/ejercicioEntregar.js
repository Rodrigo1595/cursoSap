var nombreTienda = document.getElementById('nombreTienda').value;
var productos = [['producto1', 200], ['producto2', 400]];
document.getElementById('primerProdID').textContent = 'Producto 1';
document.getElementById('segundoProdID').textContent = 'Producto 2';


function validar() {
    let ready = true;
    let dni = document.getElementsByName('dni')[0].value;
    let nombre = document.getElementsByName('nombre')[0].value;
    let email = document.getElementById('mail').value;
    //Nombre
    if (nombre.length > 30) {
        document.getElementById('pNombre').style.visibility = 'visible';
        texto = 'El campo nombre no puede pasar los 30 caracteres';
        document.getElementById('pNombre').innerHTML = texto;
        ready = false;
    } else {
        document.getElementById('pNombre').innerHTML = '';
        document.getElementById('pNombre').style.visibility = 'none';
    };

    //EMAIL
    if (email == '') {
        document.getElementById('pEmail').style.visibility = 'visible';
        texto = 'El campo Email es obligatorio.';
        document.getElementById('pEmail').innerHTML = texto;
        ready = false;
    } else {
        //Expresion regular para email
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let pruebaEmail = regEmail.test(email);
        if (pruebaEmail == false) {
            document.getElementById('pEmail').style.visibility = 'visible';
            texto = 'El email no es valido.';
            document.getElementById('pEmail').innerHTML = texto;
            ready = false;
        } else {
            document.getElementById('pEmail').innerHTML = '';
            document.getElementById('pEmail').style.visibility = 'none';
        }
    }

    //DNI
    if (dni == '') {
        document.getElementById('pDNI').style.visibility = 'visible';
        texto = 'El campo DNI no puede estar vacio';
        document.getElementById('pDNI').innerHTML = texto;
        ready = false;
    } else {
        document.getElementById('pDNI').style.visibility = 'none';
        document.getElementById('pDNI').innerHTML = '';
    }

    //Verificar fecha de nacimiento toma el valor que se ingresa por input y con una formula matematica saca el aproximado de la edad , con math floor la redondeamos.
    let Bdate = document.getElementById('fecha').value;
    let Bday = new Date(Bdate);
    let edad = Math.floor((Date.now() - Bday) / (31557600000));

    if (edad < 18 || edad == '' || isNaN(edad)) {
        document.getElementById('pFecha').style.visibility = 'visible';
        texto = 'Debes ser mayor de edad +18.';
        document.getElementById('pFecha').innerHTML = texto;
        ready = false;
    } else {
        document.getElementById('pFecha').style.visibility = 'none';
        document.getElementById('pFecha').innerHTML = '';
    }
    // Si todas las validaciones son correctas , se esconde este form y se abre otro
    if (ready) {
        document.getElementById('datos').style.visibility = 'collapse';
        document.getElementById('productos').style.visibility = 'visible';
        document.getElementById('cantProdPrimero').style.visibility = 'visible';
        document.getElementById('cantProd1').style.visibility = 'visible';
        document.getElementById('cantProdSegundo').style.visibility = 'visible';
        document.getElementById('cantProd2').style.visibility = 'visible';
    }

}

function compra() {

    let agregarInputProd1 = document.querySelector('input[name="primerProducto"]:checked').value;
    let agregarInputProd2 = document.querySelector('input[name="segundoProducto"]:checked').value;
    // Revisa si el usuario quiero o no llevar el producto 1 o 2 , y su cantidad
    if (agregarInputProd1 == 'yes') {
        document.getElementById('cantProdPrimero').style.visibility = 'visible';
        document.getElementById('cantProd1').style.visibility = 'visible';

    } else {
        document.getElementById('cantProdPrimero').style.visibility = 'hidden';
        document.getElementById('cantProd1').style.visibility = 'hidden';
    }

    if (agregarInputProd2 == 'yes') {
        document.getElementById('cantProdSegundo').style.visibility = 'visible';
        document.getElementById('cantProd2').style.visibility = 'visible';
    } else {
        document.getElementById('cantProdSegundo').style.visibility = 'hidden';
        document.getElementById('cantProd2').style.visibility = 'hidden';

    }
    // Sumar totales
    let sumatotales = 0
    let sumaproducto1 = 0
    let sumaproducto2 = 0

    if (document.querySelector('input[name="primerProducto"]:checked').value == 'yes') {
        let productovalor = productos[0];
        let cantidadprod = parseInt(document.getElementById(cantProd1).value);
        sumaproducto1 = productovalor[0] * cantidadprod
        sumatotales = sumatotales + sumaproducto1;
    }
    if (document.querySelector('input[name="segundoProducto"]:checked').value == 'yes') {
        let productovalor = productos[1];
        let cantidadprod = parseInt(document.getElementById(cantProd2).value);
        sumaproducto2 = productovalor[1] * cantidadprod
        sumatotales = sumatotales + sumaproducto2
    }
    //Pegar resultados en un parrafo
    document.getElementById('sumaTotales').textContent(` 
    El producto 1 tiene un valor de : ${sumaproducto1}
    El producto 2 tiene un valor de : ${sumaproducto2}
    La suma Total de productos es ${sumatotales}`);

    //TO-DO
    //REPETIR ESTILO RADIOS PARA DECIR SI QUIERE ABONAR EN CUOTAS CON S/N  y abrir un input text pidiendondo en cuantas.   
    //Mas de lo mismo abajo con el descuento de las validaciones arriba
    //mas de lo mismo de agregar detalles finales en un parrafo
    //Dar un saludo de despedida , usando alert , despues de apretar el alert  se hace location.reload() para recargar la pagina

}


