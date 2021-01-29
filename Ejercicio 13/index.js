'use strict'

//Definimos el array de análisis
const meses =["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];

const mesesMay = meses
    .filter(name => name.length>6)
    .map(name=>name.toUpperCase());

console.log(mesesMay);