import React from 'react';
export default function CardCidade({ nome, horario, data, dia }) {

  return (
      <div className="card palco card-cidade m-1 border border-2">
          <div className="container-categoria">
              <span className="categoria palco-cidade">{data}</span>
          </div>
          <div className="card-body palco">
              <span className="dia-cidade palco">{dia}</span>
              {   
                  nome.map((nome, i) => {
                      return <h5 key={nome} className="card-title cidade"><span className="horario-cidade">{horario[i] + " • "}</span>{nome}</h5>
                  })
              }

          </div>

      </div>
  )
}