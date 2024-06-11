import React from 'react';
export default function CardSitio({ nome, horario, data, dia }) {

  return (
      <div className="card palco card-sitio m-1 border border-2">
          <div className="container-categoria">
              <span className="categoria palco-sitio">{data}</span>
          </div>
          <div className="card-body palco">
              <span className="dia-sitio palco">{dia}</span>
              {   
                  nome.map((nome, i) => {
                      return <h5 key={nome} className="card-title sitio"><span className="horario-sitio">{horario[i] + " • "}</span>{nome}</h5>
                  })
              }

          </div>

      </div>
  )
}