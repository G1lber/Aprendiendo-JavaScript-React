// Comparación y Operador estricto en JS

const numero1 = 30
const numero2 = "20"

/* 
== - comparacion pero no es estricta 
=== - comparación estrita , revisa valor y tipo de dato
*/

console.log(typeof numero1)
console.log(typeof numero2)

if (numero1 === numero2) {
    console.log('Si!, Son iguales')
}else{
    console.log('No!,no son iguales')
}

const autenticado = true

if (autenticado) {
    console.log('Si esta autenticado')
}
