//Definimos el valor del DNI
const dni = prompt("Introduce el número de DNI:");

//Array con los valores de letra
letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']
//Comprobación del número introducido
if ((dni<=0)||(dni>99999999)||(dni===null)){
    alert('El número introducido no es correcto');
} else {
    //Calculamos el resto de la división por 23
    const resto = dni % 23;
    console.log('El valor del resto es '+resto);
    //Determinamos el valor de la letra
    letra = letras[(resto)];
    alert("El número es "+resto);
    alert("La letra resultado es "+letra);
}225684142256841422568514