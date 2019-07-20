// Scope

/* var musica = 'Rock';

if(musica){
    var musica = 'Crunge';
    console.log("dentro del if: ",musica);
}
console.log('Fuera del IF', musica); */

// scope con let

const musica = 'Rock';

if(musica){
    const musica = 'Crunge';
    console.log("dentro del if: ",musica);
}
console.log('Fuera del IF', musica);