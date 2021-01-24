//Definición del arrya de notas
const notas = [6,7,2,9,3,4,5,8,2];

//Realizacion la suma de los valores del array
suma = 0
for (let i=0; i<(notas.length); i++){
    suma+=notas[i];
}
console.log('El resultado de la suma es '+suma);

//Nueva ejecución, pero con un bucle For of
suma2 = 0
for (const nota of notas){
    suma2+=nota
}
console.log('El resultado de la suma es '+suma2);
