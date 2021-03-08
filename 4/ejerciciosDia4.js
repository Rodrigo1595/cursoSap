/*Crear un programa para gestionar usuarios.
El programa debe venir ya con una lista de usuarios precargados, con los siguientes datos:

Debe tener un menú que permita realizar las siguientes operaciones (con su respectivo flujo):
Buscar un usuario:

Debe pedir seleccionar por qué dato se va a buscar: id, nombre, celular o email.
A continuación debe pedir ingresar el valor que se va a buscar.
Si el usuario existe debe mostrar la información del usuario con todos sus datos.
Si el usuario no existe debe mostrar un mensaje informándolo.
A continuación debe pedir si se desea realizar nuevamente el procedimiento:
Si la respuesta es afirmativa, debe volver a realizar el procedimiento
Si la respuesta es negativa, debe llevar al menú de operaciones
Listar todos los usuarios:

Debe mostrar un listado con todos los usuarios y todos sus datos:
Id
Nombre
Teléfono
Email
Luego debe llevar al menú de operaciones.

Salir del programa:
Debe preguntar si desea confirmar la operación :
Si la respuesta es afirmativa debe mostrar un mensaje de despedida y salir del programa
Si la respuesta es negativa debe volver al menú de operaciones
Todos los mensajes que se requieran son libres (pueden poner lo que mejor les parezca).

Se deben validar los datos que se ingresan. Por ejemplo, si en vez de ingresar un número de celular se ingresa un dato no válido, como una palabra.
Si se ingresa una opción incorrecta, el programa nos debe avisar del hecho, y debe tomar una acción por defecto (por ejemplo, volver al menú).*/

var nombresObj =
    [{ id: '0', nombre: 'Carla', telefono: '1545628984', email: 'carla@gmail.com' },
    { id: '1', nombre: 'Pedro', telefono: '1545251245', email: 'pedro@gmail.com' },
    { id: '2', nombre: 'Lucas', telefono: '1523357849', email: 'lucas@gmail.com' },
    { id: '3', nombre: 'Ana', telefono: '15789456', email: 'ana@gmail.com' }];

function buscador() {
    document.getElementById('parrafobuscar').hidden = false;
    document.getElementById('botonListar').hidden = true;
    document.getElementById('botonSalir').hidden = true;
}

function listar() {
    document.getElementById('parrafobuscar').hidden = true;
    document.getElementById('botonListar').hidden = false;
    document.getElementById('botonSalir').hidden = true;
    document.getElementById('botonBuscar').hidden = true;
    document.getElementById('divListar').hidden = false;
    document.getElementById('menu').hidden = false;

    var array = ['id', 'nombre', 'telefono', 'email'];

    for (i = 0; i < nombresObj.length; i++) {
        let fila = document.createElement('tr');
        for (j = 0; j < array.length; j++) {
            let td = document.createElement('td');
            attribute = array[j];
            td.appendChild(document.createTextNode(nombresObj[i][`${attribute}`]));
            fila.appendChild(td);
            document.getElementById('tablaListado').appendChild(fila);
        }
    };
}
function menu() {
    location.reload();
}

function filtrarXNombre() {
    //Valores Iniciales para creat tabla con datos
    let valorTipo = document.getElementById('tipoBusqueda').value;
    let valorBusqueda = document.getElementById('valorBusqueda').value;
    let resultado = nombresObj.filter(
        function (encontrar) {
            let encontrado = encontrar[valorTipo];
            encontrado = encontrado.toLowerCase()
            valorBusqueda = valorBusqueda.toLowerCase()
            return encontrado === valorBusqueda;
        });
    //Resultados rescatados del objeto
    if (resultado.length != 0) {
        //agregar
        let id = resultado[0].id;
        let nombre = resultado[0].nombre;
        let telefono = resultado[0].telefono;
        let email = resultado[0].email;
        //ordenados en 1 array
        let array = [id, nombre, telefono, email];
        alert(`Los datos que se encontraron son :` + `
    ID : ${array[0]}
    Nombre : ${array[1]} 
    Telefono: ${array[2]} 
    Email: ${array[3]} `)
    } else {
        alert('No se encontro datos con estos parametros.')
    }
    let seguir = confirm('Quiere buscar otro usuario?');

    if (!seguir) {
        location.reload();
    }

};


function salir() {
    if (confirm("Esta seguro de salir?")) {
        location.replace('about:blank')
    }
};