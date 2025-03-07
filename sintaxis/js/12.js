// Funciones - Function declaration

/* function sumar99(numero, numero2 = 0) {
    console.log( numero + numero2 )
    
}

sumar99(10, 20)
sumar99(2, 3)
sumar99(100) */

function sumar99(numero, numero2 = 0) {
    return [ numero + numero2, 'Hola ADSO' ]
}
const [resultado, holaADSO] = sumar99(10, 20)
console.log(resultado)
console.log(holaADSO)
