//VARIABLES
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

//TIPOS
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

//Template Literales
let nombre:string ="Juan";
let apellido:string="Perez";
let edad:number=45;

//let texto:string="Hola "+nombre+" "+apellido+" ("+edad+")";
let texto=`Hola, ${nombre} ${apellido} (${edad})`;

let texto2:string=`${1+2}` //${aqui puede estar codigo de javascript}

console.log(texto2);