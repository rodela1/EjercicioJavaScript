'use strict'

//Definimos el array de análisis
const times = [60,75,79,80,55,59];

const suma = times.reduce((acum,actual)=>acum+actual,0);
const resultado = suma / times.length

console.log("Valor medio:",resultado)