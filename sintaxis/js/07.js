//Unir 2 objetos o mas

const producto ={
    nombre:"Tablet",
    precio: 100000,
    disponible: true,
}

const cliente = {
    nombre: "Pedro",
    premiun : true,
}

/* const nuevoObjeto = Object.assign(producto, cliente) No
console.log(nuevoObjeto)
console.log(cliente)
console.log(producto) */

/* const nuevoObjeto2 = {...producto, ...cliente}
console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)
 */

//Unir dos objetos
const nuevoObjeto2 = {
    producto: {...producto},
    cliente:{ ...cliente}
}
console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)

