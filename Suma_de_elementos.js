// 1) Suma de elementos: Escribe una función que sume todos los elementos de un array numérico.

const prompt = require('prompt-sync')();

// Pedimos al usuario que ingrese cauntos numeros quiere ingresar.
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
console.log(numeros)

// Funcion para sumar numeros del array numeros.
function sumarLista(numeros){
    // Definimos la suma en 0 inicialmente.
    let suma = 0
    // For para recorrer la lista de numeros.
    for (let i = 0;i < numeros.length; i++){
        // Cada vez que itere, se sumara ese numero a la suma total acumulada.
        suma = suma + numeros[i]
    }
    // Mostramos el resultado total de la suma de los elementos del array.
    console.log(`Suma total: ${suma}`)
}

// Llamamos a la funcion para sumar los numeros de la lista.
sumarLista(numeros)