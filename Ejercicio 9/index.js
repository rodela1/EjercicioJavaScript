'use strict'

//Definimos el array del ejercicio
const topics = ['JavaScript','Variables','funciones','condicionales','bucles'];

//Convertimos el array en mayúsculas
const mayusculas = topics.map(function(cadena){
    return cadena.toUpperCase()
});

// Revertimos el orden
mayusculas.reverse();

//Mostramos en consola los valores
console.log ("Array original:",topics);
console.log ("Array mayúsculas:",mayusculas);
