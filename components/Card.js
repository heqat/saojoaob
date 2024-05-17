export default function Card({ nome, dia, horario, categoria, localizacao, mapa }) {
    return (
        <div className="card border border-2 m-1">
            <div className="container-categoria">
            <span className="categoria">{categoria}</span>
            </div>
            <div className="card-body">
                <span className="dia">{dia}</span>
                <h5 className="card-title">{nome}</h5>
                <h6 className="card-subtitle text-white"><i className='text-white bx bx-time'></i> {horario}</h6>
                <h6 className="card-subtitle text-white"><i className='text-white bx bx-map-pin'></i> <a className="text-white" href={mapa} target="_blank"> {localizacao}</a></h6>
            </div>
        </div>
    )
}

