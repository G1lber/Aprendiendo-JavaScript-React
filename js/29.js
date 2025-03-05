// Fetch API y Promises, lo que remplaza el AJAX

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = () =>{
    fetch(url)
    .then(respuesta=> respuesta.json())
    .then( resultado =>{
        resultado.forEach(comentarios => {
            console.log(comentarios)
        });
    })
}

consultarAPI()