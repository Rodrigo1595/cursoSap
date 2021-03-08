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

//[Ford Fiesta,11450,1350344,5],[Ford Focus,11451,1750502,10]

function calcularAuto(Auto) {
    if (typeof Auto =='') {    
        Auto = Auto.toLowerCase();
        Auto = Auto.replace(/\s/g, "");
    }

    let detallesAuto = new Object()

    if (Auto == 'fordfiesta' || Auto == 11450) {
        let total = Math.floor(1350344-(1350344 * 0.05));
        detallesAuto = {
            coche: 'Ford Fiesta',
            codigo: '11450',
            precio: '1350344',
            descuento: '5%',
            totalFinal: '$'+total
        }
        return detallesAuto;

    } else if (Auto == 'fordfocus' || Auto == 11451) {
        let total = Math.floor(1750502-(1750502 * 0.1));
        detallesAuto = {
            coche: 'Ford Focus',
            codigo: '11451',
            precio: '1750502',
            descuento: '10%',
            totalFinal: '$'+total
        }
        return detallesAuto;
    }else{
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

