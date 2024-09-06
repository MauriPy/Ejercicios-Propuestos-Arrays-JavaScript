// 3) Encontrar elementos pares: Filtra un array de números para obtener solo los números pares.

// Linea para poder poner inputs.
const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese cuantos numeros quiere ingresar.
let cantidad = prompt('Ingrese cuantos numeros agregara a la lista: ')

// Creamos la lista vacia.
numeros = []

// For para que el usaurio ingrese los numeros e ir agregando cada numero a la lista numeros.
for (let i = 0; i < cantidad; i++){

    // Pedimos al usuario que ingrese el numero.
    let n = parseFloat(prompt(`Ingresa el numero ${i+1}: `))

    // Agregamos el numero a la lista de numeros.
    numeros.push(n)
}

// Mostramos la lista para verificar que los numeros se agregaron correctamente.
console.log(`Lista de numeros: ${numeros}`)

// Debemos encontrar los numeros pares de la lista.
// Primero debemos preguntarnos cuando un numero es par?
// Un numero es par cuando al dividirlo en 2 el resto es 0.
// Como debemos encontrar los numeros pares en un array.
// Debemos primero recorrer el array y verificar cada elemento si al dividirlo en 2 su resto es 0.

// Recorrer el array y ver que numero es par y a su vez agregarlo a una lista nueva.
// Creamos una lista vacia para los numeros pares.
numeros_pares = []

// For para recorer la lista.
for(let i=0; i < numeros.length; i++){
    //Verificar si el elemento actual es par.
    if (numeros[i] % 2 == 0){
        numeros_pares.push(numeros[i])
    }
}

// Mostramos la lista con los numeros pares.
console.log(`Numeros pares: ${numeros_pares}`)

