
//Otros Arrow Methods

const  tecnologias=['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS']
const numeros = [10,20,30]

let nuevoArray

//Filter traer a todos los que cumplen la condicion
const nuevoArray2 = tecnologias.filter( tech => tech === 'React')

//Comprobar si un elemento existe en el array 
//const resultado = tecnologias.includes('GraphQL')

//Some - devuelve si al menos uno cumple la condicion
//const resultado = numeros.some(numero => numero > 15)

// Find - devuelve el primer elemento que cumpla la condición 
// const resultado = numeros.find( numero => numero > 15)

//Every - Retorna true o falase si todos cumplen la condicion
// const resultado = numeros.every(numero => numero >15)


//Reduce - acumula en  el total
// const resultado = numeros.reduce((total, numero) => numero + total , 0)

//Filter - crear un nuevo array con base a una condicion
// const resultado  = numeros.filter(numero => numero > 15 )

// froEach - Accede a cada elemento del array
tecnologias.forEach( (tech, index) => console.log(index))


//Crea un nuevi arregki cinkas iteracciones 
const arrayMap = tecnologias.map(tech => tech)

console.log(arrayMap)
