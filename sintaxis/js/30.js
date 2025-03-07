// Fetch API Async Await

const url = "https://jsonplaceholder.typicode.com/comments"

const consultarAPI = async() =>{
    const respuesta = await fetch(url)
    const resultado =  await respuesta.json()
   
  /*   resultado.forEach(comentarios => {
        console.log(comentarios)
    });
     */
    /* .then(respuesta=> respuesta.json())
    .then( resultado =>{
        resultado.forEach(comentarios => {
            console.log(comentarios)
        });
    }) */
   console.log(resultado)
}

consultarAPI()