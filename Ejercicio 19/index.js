'use strict'

//Función de guardado de datos
document.querySelector('#guardar').addEventListener('click', salvar);

function salvar() {
    alert("Se ha procedido a guardar los datos");
};

//Modificar el color
const entrada = document.querySelector("#nombre");
entrada.addEventListener('focus',cambioColor);

function cambioColor() {
    entrada.style.backgroundColor = '#fff666';
};

entrada.addEventListener('focusout', origenColor);

function origenColor() {
    entrada.style.backgroundColor = '#9999FF';
};

//Letra vocal en rojo Consonante en verde
const letra = document.querySelector('#variable');

letra.addEventListener('keypress', colorLetra);
function colorLetra(event){
  const selLetra = event.which;
  if (selLetra === 97 || selLetra === 101 || selLetra === 105 || selLetra === 111 || selLetra === 117) {
    letra.style.color = '#a8323e';
  } else {
    letra.style.color = '#32a836';
  }
};