'use strict'

//Definimos el array de análisis
const numeros = [253,8575,1,20,562,1233,25,27,258,254,7485,2683];

//Definimos el array de números pares
const numPares = numeros.filter(function(num){
    if (num%2===0){
        return num;
    }
})
console.log("Array de pares:",numPares);

//Definimos el array de números impares
const numImpares = numeros.filter(function(num){
    if (num%2 != 0){
        return num;
    }
})
console.log("Array de impares:",numImpares);