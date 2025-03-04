//Operaciones en los arreglos
const  tecnologias=['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']

//Añadir Elementos al array
//tecnologias.push('GraphQL') //Añade al final del Array
//tecnologias.unshift('GraphQL') //Añade al principio del Array
//const nuevoArreglo =['GraphQL',...tecnologias]


//Eliminar elementos del Array
//tecnologias.pop()//Elimina al final
//tecnologias.shift()//Elimina al principio
//tecnologias.splice(2,1) //Eliminar una posicion en especifica

/* const nuevoArray= tecnologias.filter(function(tech){
    console.log(tech)// Recorre todo el arreglo y lo imprime en patalla
})
 */

/* const nuevoArray= tecnologias.filter(function(tech){
    return tech === 'React'
}) */

//Remplazar elementos al array
//tecnologias[0]= 'GraphQL'
const nuevoArray = tecnologias.map(function(tech){
    if(tech === 'HTML'){
        return 'GraphQL'
    }else{
        return tech
    }
})


console.table(tecnologias)
// console.table(nuevoArreglo)
console.table(nuevoArray)