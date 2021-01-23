console.log('hola');
// base 16 * 23 cm
// altura 13 cm

const volumen = 13 * 16 * 23;

console.log('Volumen', volumen + ' en cm3');

//area = al + 2ab

const areaLateral = 23*13;
const areaBase = 16*23;
const areaTotal = areaLateral + 2*areaBase;
console.log('areaTotal',areaTotal+' cm2');


//Generalizacion de los valores
const base = 23;
const altura = 13;
const ancho = 16;

const volumen2 = base * altura * ancho;
console.log('Volumen2', volumen2);

const area2 = base * altura + 2*base*ancho;
console.log('area2', area2);
