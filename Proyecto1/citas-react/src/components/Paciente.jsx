import React from 'react'

const Paciente = () => {
  return (
    <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
          Nombre: {''}
          <span className="font-normal normal-case">Coco</span>
        </p> 
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
          Propietario: {''}
          <span className="font-normal normal-case">Juan Esteban Garcia</span>
        </p> 
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
          Email: {''}
          <span className="font-normal normal-case">juan@gmail.com</span>
        </p> 
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
          Fecha Alta: {''}
          <span className="font-normal normal-case">2 Agosto 2025</span>
        </p> 
        <p className="font-bold mb-3 text-gray-700 uppercase"> 
          Sintomas: {''}
          <span className="font-normal normal-case">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error aperiam et accusantium voluptates hic modi assumenda quibusdam, quae dolores cupiditate. Molestiae dolores, adipisci rerum illo hic quam saepe quidem alias?</span>
        </p> 
      </div>
      
  )
}

export default Paciente