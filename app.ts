//============================================VARIABLES
/*let mensaje = "hola";

if(true){
    let mensaje="adios";
}

console.log(mensaje);*/

//CONSTANTES
/*
const OPCIONES="TODAS";

if(true){
    const OPCIONES="ninguna";
}

console.log(OPCIONES);*/

//============================================TIPOS
/*let nombre:string = "Peter";
let numero:number=123;
let booleano:boolean=true;

let hoy:Date=new Date();
hoy =new Date('2020-12-06');

let calquiera:any;

let spider= {
    nombre:'hhhhh',
    edad:12
}*/

//============================================TEMPLATE LITERALES
/*let nombre:string ="Juan";
let apellido:string="Perez";
let edad:number=45;

//let texto:string="Hola "+nombre+" "+apellido+" ("+edad+")";
let texto=`Hola, ${nombre} ${apellido} (${edad})`;

let texto2:string=`${1+2}` //${aqui puede estar codigo de javascript}

console.log(texto2);*/

//============================================FUNCIONES
//parametro por defecto: variable?:string

/*function activar(quien:string,objeto:string="batiseñal",momento?:string){
    let mensaje:string;

    if(momento){
        mensaje=`${quien} activó la ${objeto} en la ${momento}`;        
    }else{
        mensaje=`${quien} activó la ${objeto}`;
    }

    console.log(mensaje);
}

activar("Gordon,");*/

//============================================FUNCIONES FLECHAS
//cual es la principal ventaja de las funciones flechas => No modifica el objeto this al ser ejecutada.
/*let funcion=function(a:number,b:number){
    return a+b;
}

let funcinf=(a:number,b:number) => a+b;
*/

let nombre="perdro";

let hulk={
    nombre:"hulk",
    smash(){
        setTimeout(function(){
            console.log(this.nombre + " smash!!!");
        },1500);
    }
}
let hulk2={
    nombre:"hulk",
    smash(){
        setTimeout(()=> console.log(this.nombre + " smash!!!"),1500);
    }
}

hulk.smash();
hulk2.smash();

//============================================DESTRUCTURACION DE OBJETOS
//Objetos
/*let avenger={
    nombre:"Steve",
    clave:"Capitan america",
    poder:"dorga"
}
let{nombre,poder,clave}=avenger;
/*let nombre=avenger.nombre;
let clave=avenger.clave;
let poder=avenger.poder;*/
/*console.log(nombre,clave,poder);

//Arreglo
let avengers:string[]=["thor","steve","tony"];
let [var1,var2,var3]=avengers;
console.log(var1,var2,var3);*/

//============================================PROMESAS
/*let prom1 = new Promise( function(resolve,reject){

    setTimeout(()=>{
        console.log("Promesa Terminada");
        //Termina bien
        resolve();

        //termina mal
        //reject();
    },1500)
});

prom1.then(function(){
    console.log("Ejecutar si todo sale bien");
},
function(){
    console.log("Ejecutar si todo sale mal");
});*/

//============================================INTERFACES
/*interface Xmen{
    nombre:string,
    poder:string
}

function enviarMision(xmen:Xmen){
    console.log("Enviando a"+xmen.nombre);
}

let wolverine:Xmen={
    nombre:"Wolverine",
    poder:"Regeneracion"
};*/

//===============================================POO
/*class Avenger{
    nombre:string="dfffs";
    equipo:string="fgffgfghfg";
    nombreReal:string="hfhjfjhfjh";

    puedePelear:boolean=false;
    peleasGanadas:number=0;

    constructor(nombre:string, equipo:string, nombreReal: string){
        this.nombre=nombre;
        this.equipo=equipo;
        this.nombreReal=nombreReal;
        console.log("Se ejecuto el constructor");
    }
}

let antman:Avenger=new Avenger("l","ll","lll");
console.log(antman);*/