// Eventos del DOM - Inputs

const inputNombre = document.querySelector('.nombre')
inputNombre.addEventListener('input', function(e){
    console.log(e.target.value)
})

const inputPassword = document.querySelector('.password')
inputPassword.addEventListener('input', functionPassword)

function functionPassword(){
    inputPassword.type= 'text'

    setTimeout(() => {
        inputPassword.type = 'password'
    }, 100);
}