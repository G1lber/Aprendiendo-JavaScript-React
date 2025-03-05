

const autenticado = true

!autenticado ? 
    console.log('Usuario autenticado') : 
    console.log('No autenticado, Dirigir a login')


// Doble ternario
const saldo= 600000
const pagar = 90000
const trajeta = false

saldo > pagar ?
    console.log('Puede pagar con saldo'):
    trajeta ? 
        console.log('Puede pagar con tarjeta'):
        console.log('No, puede pagar')