'use strict'// Modo estricto para las variables.

/** LOOPS */
let n=0;

while(n<10){
    console.log(`While ${n++}`);
}

for(var i = 0;i<10;i++){
    console.log(`For ${i}`);
}

console.log(`i = ${i}`); // Var se mantiene fuera de los loops y los condicionales.