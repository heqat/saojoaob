// components/MapComponent.js

import { useState } from 'react';

const MapComponent = () => {
    const mapa1 = "https://www.google.com/maps/d/u/0/embed?mid=17ylFCMfPZAy4kWIwmMJBi6WriHAnsZg&ehbc=2E312F";
    const mapa2 = "https://www.google.com/maps/d/u/0/embed?mid=1Ew8I8KYBfbGzZkP5Zt77dYl4_w7v60A&ehbc=2E312F"; // Link para o segundo mapa

    const [mapaAtual, setMapaAtual] = useState(mapa1);

    const toggleMapa = () => {
        setMapaAtual(mapaAtual === mapa1 ? mapa2 : mapa1);
    };

    return (
        <section id='mapa'>
            <div className='d-flex flex-column justify-content-center align-items-center m-container-mapa'>
                <h2 className='m-titulo-secao mt-5 mb-5'>MAPA</h2>
                <iframe 
                    id="mapaFrame" 
                    loading='lazy' 
                    className='container mb-5' 
                    width="100%" 
                    height="400px" 
                    src={mapaAtual}>
                </iframe>
                <button 
                    id="toggleMapButton" 
                    className='mb-5' 
                    onClick={toggleMapa}>
                    {mapaAtual === mapa1 ? "Exibir mapa serra" : "Exibir mapa palco"}
                </button>
            </div>
        </section>
    );
};

export default MapComponent;
