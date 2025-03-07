// Eventos del DOM - Submit

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    if (nombre === '' || password === '') {
        console.log('Todos los campos son requeridos')
    }else{
        console.log('ok, Enviando...')
    }
    console.log('Enviaste un formulario')
})
