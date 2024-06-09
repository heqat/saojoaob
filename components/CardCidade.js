import React from 'react';



export default function CardCidade({ nome, horario, data, dia }) {

  return (
      <div className="card-cidade palco-cidade m-1 border border-2">
          <div className="container-categoria">
              <span className="categoria palco">{data}</span>
          </div>
          <div className="card-body palco">
              <span className="dia palco">{dia}</span>
              {   
                  nome.map((nome, i) => {
                      return <h5 key={nome} className="card-title palco"><span className="horario">{horario[i] + " • "}</span>{nome}</h5>
                  })
              }

          </div>

      </div>
  )
}