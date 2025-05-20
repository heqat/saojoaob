import Image from 'next/image'
import marcaCircuitos from '../public/marca-circuitos.png'
import marcaPrefeitura from '../public/marca-prefeitura.png'

export default function () {
    return (
        <footer className='m-footer'>
            <div className="container m-auto row row-cols-1 row-cols-sm-2 row-cols-md-5 py-3">

                <div className="col mb-3 d-flex justify-content-center">
                    <a href="https://bezerros.pe.gov.br/" className="mt-2 m-marca" target="_blank">
                        <Image src={marcaPrefeitura} alt='marca prefeitura' height={85} />
                    </a>
                </div>

                <div className="col mb-3">
                    <h5 className='m-titulo-informacoes'>Endereço</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 m-texto-informacoes">Praça Duque de Caxias, 88 - Térreo - Centro, Bezerros - PE.</li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5 className='m-titulo-informacoes'>Horário de Funcionamento</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 m-texto-informacoes">Segunda a Sexta-feira, 07h às 13h.</li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5 className='m-titulo-informacoes'>Contato</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2 m-texto-informacoes">Telefone: (81) 3728-6700.</li>
                    </ul>
                </div>

                <div className="col mb-3 d-flex justify-content-center">
                    <Image src={marcaCircuitos} alt='marca circuitos das estações' height={85} />
                
                </div>

            </div>
            <div className='m-container-barras'>
                <div className='m-barra-colorida'>

                </div>
                <div className='m-barra-colorida'>

                </div>
                <div className='m-barra-colorida'>

                </div>
                <div className='m-barra-colorida'>

                </div>
            </div>
            <div className='container text-center'>
                <p className='m-texto-copy'>&copy; Copyright - 2025 Prefeitura Municipal de Bezerros - PE. | Desenvolvido por T.I.C. Bezerros.</p>
            </div>
        </footer>
    )
}