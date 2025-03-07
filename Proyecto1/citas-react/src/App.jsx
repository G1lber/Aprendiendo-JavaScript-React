import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
function App() {
  return (
    // Toda etiqueta debe tener un cierre 
    //Fragment <>, </>
    <> 
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
    </>
  )
}

export default App
