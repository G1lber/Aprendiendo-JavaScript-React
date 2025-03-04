//Objetos

/* const nombre = "Tablet"
const precio = 100000
const disponible = true */

const producto ={
    nombre:"Tablet",
    precio: 100000,
    disponible: true,
}
console.log(producto)
console.table(producto)

console.log(producto.nombre)
console.log(producto.precio)
console.log(producto.disponible)

//Destructuring

const {precio , nombre , disponible} = producto
console.log(precio)
console.log(nombre)
console.log(disponible)

//Object Literal Enhacemnet

const autenticado2 = true
const usuario2 = "Pedro"

const nuevoObjeto = {
    // autenticado: autenticado,
    // usuario: usuario
    autenticado2,
    usuario2
}

console.table(nuevoObjeto)