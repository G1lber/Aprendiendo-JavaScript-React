// Alertas

const formulario = document.querySelector('#formulario')
formulario.addEventListener('submit', e => {
    e.preventDefault()

    //Es para selecionar .value es para el valor
    const nombre = document.querySelector('.nombre').value
    const password = document.querySelector('.password').value

    const alertaPrevia= document.querySelector('.alerta')
    if (alertaPrevia) {
        alertaPrevia.remove()
    }
    //'DIV' Se coloca en mayucula
    const alerta = document.createElement('DIV')
    alerta.classList.add('alerta') 

    if (nombre === '' || password === '') {
        alerta.textContent='Todos los campos son requeridos'
        alerta.classList.add('error')
    }else{
        alerta.textContent='Ok... Enviando...'
        alerta.classList.add('exito')
    }
    formulario.appendChild(alerta)
})
