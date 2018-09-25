"use strict";
//============================================VARIABLES
/*let mensaje = "hola";

if(true){
    let mensaje="adios";
}

console.log(mensaje);*/
function enviarMision(xmen) {
    console.log("Enviando a" + xmen.nombre);
}
let wolverine = {
    nombre: "Wolverine",
    poder: "Regeneracion"
};
//===============================================POO
class Avenger {
    constructor(nombre, equipo, nombreReal) {
        this.nombre = "dfffs";
        this.equipo = "fgffgfghfg";
        this.nombreReal = "hfhjfjhfjh";
        this.puedePelear = false;
        this.peleasGanadas = 0;
        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
        console.log("Se ejecuto el constructor");
    }
}
let antman = new Avenger("l", "ll", "lll");
console.log(antman);
