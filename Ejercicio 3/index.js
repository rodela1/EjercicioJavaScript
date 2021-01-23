//Definimos el Array de búsqueda
const data = ['hola', 2, 5, 'adios']

//Determina cual de los dos números es mayor
var numero = 0;
var cadenaNum = [];
for (const elemento in data) {
    //console.log('el elemento es ' + elemento)
    if (typeof data[elemento] === 'number'){
        cadenaNum.push(data[elemento]);
        if (data[elemento] > numero){
            numero = data[elemento];
        }
    }
}
console.log('El número mayor del array es ' + numero)

//Ordenamos el array con todos los valores
cadenaNum.sort

//Realizamos las operaciones y las mostramos por consola
lonCadena = cadenaNum.length;
sumaCadena = cadenaNum[lonCadena-1]+cadenaNum[lonCadena-2];
restaCadena = cadenaNum[lonCadena-1]-cadenaNum[lonCadena-2];
prodCadena = cadenaNum[lonCadena-1]*cadenaNum[lonCadena-2];
cociCadena = cadenaNum[lonCadena-1]/cadenaNum[lonCadena-2];
resCadena = cadenaNum[lonCadena-1]%cadenaNum[lonCadena-2];

console.log('El resultado de la suma es '+ sumaCadena);
console.log('El resultado de la resta es '+ restaCadena);
console.log('El resultado del producto es '+ prodCadena);
console.log('El resultado del cociente es '+ cociCadena);
console.log('El resultado del resto es '+ resCadena);