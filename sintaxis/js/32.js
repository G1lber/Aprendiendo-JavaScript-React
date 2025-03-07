//Templates Strings

const producto = "Portatil de 15 pulgadas"
const precio = 250000
const marca = "HP"

function textoDeFuncion(){
    return "Este texto proviene de la funcion"
}

console.log(producto + " $"+  precio + "Pesos " + marca)
console.log(`${producto} $${precio} Pesos, Marca: ${marca}, ${textoDeFuncion()}`)
