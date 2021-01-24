'use strict';

const frase = prompt('Escribe la frase aqui:');

function analisis (frase2) {
    if (frase2===frase2.toUpperCase()) {
        return ('La frase tiene solo mayúsculas');
    } else if (frase2===frase2.toLowerCase()) {
        return ('La frase tiene solo minúsculas');
    } else {
        return ('La frase tiene mayúsculas y minúsculas')
    }
}
alert(analisis(frase));