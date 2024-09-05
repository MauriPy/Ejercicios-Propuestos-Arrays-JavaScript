// 2) Encontrar el número más grande: Encuentra el número más grande en un array de números.

// Para encontrar el numero mas grande en un array, utilizaremos el metodo burbuja.
// EL metodo burbuja compara el primer elemento su siguiente elemento, y asi hasta el final del array,
// Iterando las veces necesarias hasta que todos los elementos esten ordenados.
// De menor a mayor o mayor a menos segun uno lo defina.
// Si ordenamos de menor a mayor, mostramos el ULTIMO elemento de la lista para saber el mayor.
// Si ordenamos de mayor a menos, mostramos el PRIMER elemento de la lista para saber el mayor.

// Linea para poder poder inputs.
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
console.log(`Lista de numeros: ${numeros}`)

// Metodo de burbuja de mayor a menor.
// Primer For para iterar las veces necesarias el array.
for (let i=0; i < numeros.length - 1; i++){
    // Segundo For para iterar sobre el array.
    for(let j=0; j < numeros.length; j++){
        // Comparamos los elementos e intercambiamos si se cumple.
        if(numeros[j] < numeros[j+1]){
            let aux = numeros[j]
            numeros[j] = numeros[j+1]
            numeros[j+1] = aux
        }
    }
}
// Mostramos los numeros del array ordenado de menor a mayor.
console.log(`Lista de numeros ordenados de mayor a menor es: ${numeros}`)

// De la lista numeros tomaremos el primer elemento para saber el mas grande.
console.log(`El numero mas grande de la lista es: ${numeros[0]}`)