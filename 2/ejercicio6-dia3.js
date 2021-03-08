/* 6 
Construir un validador para un formulario de registro que, dado el HTML que se proporciona,
valide cada uno de los campos cuando el usuario ha terminado de introducir datos en cada uno de ellos, es decir, al perder el foco. 
Si el campo no cumple las restricciones, se mostrará una alerta al usuario, pero se le permitirá seguir introduciendo datos en el resto de campos.
En el momento en el que el usuario envíe el formulario (evento submit), se validarán todos los campos 
y el formulario no se enviará si alguno de los campos no es válido. Las restricciones a cumplir son las siguientes:
•	El nombre, email y comentarios son campos obligatorios.
•	El campo email debe ser una dirección de email válida.
•	El texto introducido en el campo de comentarios no debe exceder los 50 caracteres.
•	El password debe tener una longitud mínima de 6 caracteres, y contener al menos una letra minúscula, una letra mayúscula y un dígito.
Utilizar el HTML: Nota: Modificar lo que sea necesario*/


function validar() {

    let ready = true
    let nombre = document.getElementsByName('nombre')[0].value;
    let apellido = document.getElementsByName('apellido')[0].value;
    let email = document.getElementsByName('email')[0].value;
    let password = document.getElementsByName('password')[0].value;
    let textArea = document.getElementsByName('comentarios')[0].value;
    let checkbox = document.getElementById('registro_condiciones').checked;
    console.log(checkbox);

    //NOMBRE
    if (nombre == '') {
        document.getElementById('pNombre').style.visibility = 'visible';
        texto = 'El campo nombre es obligatorio.';
        document.getElementById('pNombre').innerHTML = texto;
        ready = false;

    } else {
        document.getElementById('pNombre').innerHTML = '';
        document.getElementById('pNombre').style.visibility = 'none';


    };
    //APELLIDO
    if (apellido == '') {
        document.getElementById('pApellido').style.visibility = 'visible';
        texto = 'El campo Apellido es obligatorio.';
        document.getElementById('pApellido').innerHTML = texto;
        ready = false;

    } else {
        document.getElementById('pApellido').innerHTML = '';
        document.getElementById('pApellido').style.visibility = 'none';

    }
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

    //PWD
    //revisa si hay minusculas mayusculas digitos
    regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    if (regPassword.test(password) != true) {
        document.getElementById('pPassword').style.visibility = 'visible';
        texto = 'El password no es valido (recuerda que debe ser de almenos 6 caracteres , 1 en mayusculas , 1 en minusculas y al menos 1 digito';
        document.getElementById('pPassword').innerHTML = texto;
        ready = false;
    } else {
        document.getElementById('pPassword').innerHTML = '';
        document.getElementById('pPassword').style.visibility = 'none';
    }

    //Caja de Texto
    if (textArea.length > 50) {
        document.getElementById('pComentarios').style.visibility = 'visible';
        texto = 'No se puede escribir mas de 50 caracteres';
        document.getElementById('pComentarios').innerHTML = texto;
        ready = false;
    } else {
        document.getElementById('pComentarios').innerHTML = '';
        document.getElementById('pComentarios').style.visibility = 'none';
    }
    //ChkBox
    if(checkbox == false){
        document.getElementById('pServicios').style.visibility = 'visible';
        texto = 'Debe aceptar los terminos y condiciones para continuar';
        document.getElementById('pServicios').innerHTML = texto;
        ready = false;
    }else{
        document.getElementById('pServicios').innerHTML = '';
        document.getElementById('pServicios').style.visibility = 'none';
    } 

    console.log('estado submit:  ' + ready);

    if(ready == false){
        return false
    }else{
        return true
    }

}

