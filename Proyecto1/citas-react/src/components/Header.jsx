//Todos los componentes deben empezar con Mayuscula Header.jsx
// Un componente es una funcion

const Header = () => {
  return (
    <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
      Seguimiento Paciente {" "}
      <span className="text-indigo-600">Veterinaria</span>
    </h1>
    
  )
}

export default Header
