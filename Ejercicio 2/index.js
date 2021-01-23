//Definicion del objeto cumple
const cumple = {
    dia: 5,
    mes: 'marzo'
}

//Mostramos en la consola el resultado
console.log('Mi cumpleaños es el '+ cumple.dia + ' de ' + cumple.mes +'.');

//Definición del array de meses del año.
const meses = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']
const indice = meses.indexOf(cumple.mes) + 1

//Mostramos en la consola el mes siguiente al cumpleaños
console.log('El mes siguiente al cumpleaños es ' + meses[indice])