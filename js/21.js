// Scope  Alcance de las variables a nivel global y local

const precio = 300 


function unaFunction(){
    const precio = 600
    console.log(precio)
}

console.log(precio)

unaFunction()