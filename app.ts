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
/*let nombre:string ="Juan";
let apellido:string="Perez";
let edad:number=45;

//let texto:string="Hola "+nombre+" "+apellido+" ("+edad+")";
let texto=`Hola, ${nombre} ${apellido} (${edad})`;

let texto2:string=`${1+2}` //${aqui puede estar codigo de javascript}

console.log(texto2);*/

//FUNCIONES
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

//funciones flechas
/*let funcion=function(a:number,b:number){
    return a+b;
}

let funcinf=(a:number,b:number) => a+b;
*/

//let nombre="perdro";

let hulk={
    nombre:"hulk",
    smash(){
        setTimeout(function(){
            console.log(hulk.nombre + " smash!!!");
        },1500);
    }
}
let hulk2={
    nombre:"hulk",
    smash(){
        setTimeout(()=> console.log(hulk.nombre + " smash!!!"),1500);
    }
}

hulk.smash();
hulk2.smash();