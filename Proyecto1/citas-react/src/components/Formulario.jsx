//rfce para mas rapido lo auto completa y hace la funcion
const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
        <p className="text-lg mt-5 text-center mb-10">
          Añade Paciente y {' '}
          <span className="text-indigo-600 font-bold">Administralos</span>
        </p>
        <form className="bg-white shadow-md rounded-lg py-10 px-5">
          <label className="block text-gray-700 uppercase font-bold">Nombre Macota</label>

          <input 
          type="text" 
          placeholder="Nombre de la Mascota"
          className="border-2 w-full mt-2 placeholder-gray-400 rounded-md" 
          />
        </form>
    </div>
  )
}

export default Formulario


