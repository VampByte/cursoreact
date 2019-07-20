// Parametros por default en las funciones


//FUNCTION DECLARATION
/* function actividad(nombre = 'Walter White', actividad = 'Enseñar Química'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
} */

//FUNCTION EXPRESSION
const actividad = function (nombre = 'Walter White', actividad = 'Enseñar Química'){
    console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
}

actividad ('Juan', 'Aprender Javascript');
actividad ('Pedro', 'Creando un sitio web');
actividad ('Antonio');