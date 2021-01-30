'use strict'

//Array con los enlaces del documento
const enlaces = document.getElementsByTagName('a');

const resultado1 = document.querySelector('#numenlaces');
resultado1.innerHTML = "En esta página hay "+ enlaces.length + " enlaces";

//Dirección del penúltimo enlace
const penultenlace = enlaces[enlaces.length-1].href;

//console.log(penultenlace);

const nuevoParrafo = document.createElement('p');
const textParrafo = document.createTextNode(penultenlace);
nuevoParrafo.appendChild(textParrafo);

//console.log(nuevoParrafo);

const resultado2 = document.querySelector('.result');
resultado2.appendChild(nuevoParrafo);

//Número de enlaces del tercer párrafo
const parrafos = document.getElementsByTagName('p');
const numEnlaces = parrafos[2].getElementsByTagName('a').length;

const resultado3 = document.querySelector('#enlacesparr3');
resultado3.innerHTML = "En el tercero párrafo hay " + numEnlaces + " enlaces.";