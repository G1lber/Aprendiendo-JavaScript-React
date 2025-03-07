//Objetos - Destructuring con 2 o más objetos

const producto ={
    nombre:"Tablet",
    precio: 100000,
    disponible: true,
}

const cliente = {
    nombreCliente : "Pedro",
    premiun : true,
}

const{nombre, precio, disponible} = producto
const {nombre: nombreCliente, premiun}= cliente // es un apodo o alias

console.log(nombre, precio, disponible)
console.log(nombreCliente, premiun)
