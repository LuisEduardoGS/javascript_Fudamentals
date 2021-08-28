"use strict";
document.querySelector("button").onclick = function () {
  alert("Hola mundo");
};
/*
function clicBoton(){
    alert("Hola mundo")
}
*/

let nameUser = "Eduardo";
const PI = 3.14;

//PI=2
nameUser = "Luis";
nameUser = "Sebas";

console.log(nameUser);

/////////////////////////////////////////////////////////

//VARIABLES

let nameUser = "Eduardo";
const PI = 3.14;
let dog = "chihuahua";

console.log("dog", dog); //CHIHUAHUA

{
  let dog = "doberman";
  console.log("dog", dog); //DOBERMAN
}

console.log("dog", dog); //CHIHUAHUA

/*TIPOS DE DATOS*/

let userName = "Eduardo Gonzales"; //string
let userAge = 35; //number
let isMan = true; //boolean (true o false) // 1,0
let amount = null; //null
let married; //undefined
let account= symbol("123456"); //symbol
let usuario = {
name:"Eduardo",
lastname: "Gonzales",
age: 35,
sexo:"m",
isPeruvian: true,
isMarried: false,
}; // object

//typeof= Indentificar tipo de dato
console.log(typeof userName); //string
console.log("userAge", typeof userAge); //number
console.log(typeof isMan); //number
console.log(typeof amount); //object
console.log(typeof married); //undefined
console.log(typeof account); //symbol
console.log(typeof usuario); //object

//Cambiar tipo de dato de numero a string y de string a numero

console.log("userAge")









