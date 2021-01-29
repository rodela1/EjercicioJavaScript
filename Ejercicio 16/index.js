'use strict'

//Definición de la clase Cuadrado
class cuadrado {
    constructor(lado) {
      this.perimeter = lado*4;
      this.area = lado**2;
  
      console.log("El cuadrado tiene " + lado + " cm de lado, perímetro " + this.perimeter +" cm y área " + this.area +" cm3");
    }
  };
  //Definición de cuadrado de 2 cm
  const primero = new cuadrado(2);
  //Definición de cuadrado de 5 cm
  const segundo = new cuadrado(5);
  //Definición de cuadrado de 10 cm
  const tercero = new cuadrado(10);