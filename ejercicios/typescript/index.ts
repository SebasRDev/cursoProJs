import { create } from "domain";

//Boolean
let muted: boolean = true;
muted = false;

//números
let numerador: number = 42;
let denominador: number  = 6;
let resultado = numerador / denominador;

//String
let nombre: string = 'Sebastian';
let saludo = `mi nombre es ${nombre}`

//Arreglos
let people: string[] = [];
people = ['Isable', 'Nicole', 'Sebas'];

// people.push(9000);

let peopleAndNumbers: Array< string| number > = [];

peopleAndNumbers.push('Sebastian');
peopleAndNumbers.push(3000);

//Enum
enum Color {
  Rojo = "Rojo",
  Verde = "Verde",
  Azul = "Azul",
  Amarillo = "Amarillo"
}
let colorFav: Color = Color.Verde;
console.log(`Mi color favorito es ${colorFav}`);

//Any puede cambiar de tipo de variable
let comodin: any = "Joker";
comodin = { type: "Wildcard" }

//Object
let someObject: object = { type: "Wildcard" }









//------------ FUNCIONES ---------------------

function add (a: number, b: number): number{
  return a + b;
}


const sum = add(4,6);

function createAdder (a: number): (number) => number {
  return function (b: number){
    return b + a
  }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);


//?: => esto antes del tipado permite que el valor sea undefined
// = => esto despues del tipado deja valor predefinido
function fullName(firstName: string, lastname : string = "Ramirez"): string{
  return `${firstName} ${lastname}`;
}

const name = fullName('Sebastian');

console.log(name);


//--------------- INTERFACES -------------------------
//?: => esto antes del tipado permite que el valor sea undefined
interface Rectangulo {
  ancho : number;
  alto : number;
  color ?: Color;
}

let rect: Rectangulo = {
  ancho : 4,
  alto : 6,
  color : Color.Rojo,
}

function area(r: Rectangulo){
  return r.alto * r.ancho
}

console.log(area(rect));
console.log(rect.toString());

rect.toString = function(){
  return `Un rectangulo ${this.color}, con dimensiones ${this.ancho}x${this.alto}`;
};

console.log(rect.toString());

