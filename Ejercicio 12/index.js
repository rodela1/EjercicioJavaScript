'use strict'

//Definimos el array de análisis
const words = ["Environmental","Systems","Research","Institute"];

const resultado = words.reduce(function(mayor,acc){
    if (mayor.length > acc.length){
        return mayor
    } else {
        return acc
    }
});

console.log("La palabra más larga es " + resultado);