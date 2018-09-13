'use strict'// Modo estricto para las variables.

function sayHello(name, age){
    console.log("Hello "+name+" your age is "+age);
    console.log(`Hello ${name} your age is ${age}`);
}

sayHello("Vince",28); //"Hello Vince your age is 28"
sayHello();//"Hello undefined your age us undefined"

function sum (num1, num2){
    return num1+num2;
}

console.log(sum(3,8));//"11"
console.log(sum(3));//"NaN"

let mult = function (num1,num2){//Funcion anonima
    return num1*num2;
}

console.log(mult(6,5));//"30"
console.log(typeof mult);//"function"

function operate (n1,n2,operation){
    console.log("Result: "+operation(n1,n2));
}

operate(5,10,mult);//50 
operate(50,10,function(n1, n2){ return n1/n2; });//Funcion anonima mas chula. Devuelve "Result 5"

let multArrow = (n1,n2)=> {return n1*n2};//Mini labda
console.log(multArrow(5,5));//"25"

let multArrow2 = (n1,n2)=>  n1*n2;//Mini labda. Solo cuando es una instruccion y la devuelve.
console.log(multArrow2(5,5));//"25"

function sayHello2(name = "Anonymous"){
    console.log(`Hello ${name}`);
}

sayHello2();//"Anonymous"
sayHello2("Vince");//"Vince"








