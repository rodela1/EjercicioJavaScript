//Definición de la clase Factura
class cliente {
    constructor(nombre, direccion, telefono, nif) {
      this.nombre = nombre;
      this.direccion = direccion;
      this.telefono = telefono;
      this.nif = nif;
    }
}

class elemento {
    constructor (descripcion, cantidad, precio) {
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precio = precio;
    }
}

class factura {
    constructor(cliente, elementos) {
        this.cliente = cliente;
        this.elementos = elementos;

        this.informacion = {
          baseImponible: 0,
          iva: 21,
          total:0,
          formaPago: "confirming 240"
        };
        
        this.calculo = function() {
            for (var i = 0; i <this.elementos.length; i++) {
                this.informacion.baseImponible += this.elementos[i].cantidad * this.elementos[i].precio;
            }
             this.informacion.total = this.informacion.baseImponible * (1+(this.informacion.iva/100));
        };
        
        this.muestra = function () {
            this.calculo();
            alert("Total = " + this.informacion.total + " euros");
        };
        
    };
};

//Proceso de instaciación de las clases
var cliente1 = new cliente("cliente1", "", "", "");
var element1 = new elemento ("elemento1","1","5");
var element2 = new elemento ("elemento2","2","12");
var elements = [element1,element2];
var bild = new factura(cliente1,elements);

//Ejecución del método Muestra
bild.muestra()