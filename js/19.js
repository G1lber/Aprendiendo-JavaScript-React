
const saldo= 600000
const pagar = 90000
const trajeta = true

// || - Al menos una debe cumplirse 'Or'
// && - Las dos deben cumplirse  'And'
if (saldo > pagar && trajeta ) {
    console.log('Puede pagar con su saldo')
}else{
    console.log('No, no puede pagar')
}