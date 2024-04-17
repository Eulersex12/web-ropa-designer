import { useState } from "react"

//import datos from '../../../data.json';
//const { calzadoDama } = datos
const Zapatos = ( { damas, caballeros }) => {
  return (
    <div>
      <h1>fama2</h1>
      <img src="/images/calzados/taco1.png" alt="" />
      <div className="w-full grid grid-cols-4 ">
      {damas.map((dato) => (
          <div className="w-full flex" key={dato.id}>
              <div className="w-6/12"><img className="w-4/5" src={dato.url} alt={dato.descripcion} /></div>
              <div className="w-6/12">
                <h2>{dato.title}</h2>
                <p>{dato.descripcion}</p>
                <p>{dato.precio}</p>
              </div> 
          </div>
        ))
      }
      </div>
    </div>
  )
}

export default Zapatos
