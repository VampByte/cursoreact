// Objetos

// Object Literal

const persona = {
    nombre: 'Juan',
    profesion: 'Desarrollador Web',
    edad: 500
}
/* let nombrePersona = 'Juan';
let profesion = 'Desarrollador Web'; */

console.log(persona);

/* console.log(persona.nombre);
console.log(persona.profesion);
console.log(persona.edad);
console.log(persona['edad']); */

//Object Constructor
function Tarea(nombre, urgencia){
    this.nombre = nombre;
    this.urgencia = urgencia;
}

//crear una nueva tarea:
const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente');
const tarea2 = new Tarea('Preparar café y React', 'Urgente');
const tarea3 = new Tarea('Pasear al perro', 'Media');
const tarea4 = new Tarea('Conocer a mis suegros', 'Baja');
console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);