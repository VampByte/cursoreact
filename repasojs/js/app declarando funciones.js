// Creando una funcion

//Function Declaration
function saludar(nombre){
    console.log ('Bienvenido ' + nombre);
}

saludar('Juan');
/* saludar('Alejandra');
saludar('Miguel'); */


//Function expression
const cliente = function (nombreCliente){
    console.log('Mostrando datos del cliente:' + nombreCliente);
}
cliente('Juan');