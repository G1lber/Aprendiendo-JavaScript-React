import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

//Props ->Propiedades - para pasar variables o funciones de otros componentes
//Ejemplo - <Header nombreProp= {datos o Funciones}/>

function App() {
  const[pacientes , setPacientes]= useState([]);
  const [paciente, setPaciente] = useState({});
  return (
    // Toda etiqueta debe tener un cierre 
    //Fragment <>, </>
    <div className="container mx-auto mt-20"> 
      <Header/>

      <div className="mt-12 md:flex">
      <Formulario
        pacientes={pacientes}
        setPacientes={setPacientes}
        paciente={paciente}

      />
      <ListadoPacientes
        pacientes={pacientes}
        setPaciente={setPaciente}
      />
      </div>
    </div>
  )
}

export default App
