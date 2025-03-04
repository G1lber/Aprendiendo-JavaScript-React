//Objetos - Manipulación

const producto ={
    nombre:"Tablet",
    precio: 100000,
    disponible: true,
}
//Objeto inmodificable
// Object.freeze(producto)

//Permite editar"modificar" un valor pero no permite agregar ni eliminar
Object.seal(producto)

//Reescribir un valor del objeto
producto.nombre ="Monitor" //Editar una propiedad 

//Agregar un valor al objeto
producto.imagen = "imagen.png"

//Eliminar un valor de un objeto
delete producto.disponible


console.table(producto)