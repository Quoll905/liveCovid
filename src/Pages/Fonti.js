import React from 'react';

import './Fonti.css';

const Fonti = (props) => {
    return (
        <div className='fonti'>
            <h1>Fonti sui numeri del coronavirus</h1>
            <ul>
                <li>
                    <a href='https://github.com/pcm-dpc/COVID-19/tree/master/dati-json'>Vai al sito</a>
                </li>
                <li>
                    Informazioni della protezione civile, aggiornate ogni giorno alle 18.
                </li>
            </ul>
            <h1>Fonti sui falsi miti</h1>
            <ul>
                <li>
                    <a href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters'>
                        Vai al sito 
                    </a>
                </li>
                <li>
                    Pagina dell'organizzazione mondiale della sanità WHO.
                </li>
            </ul>
        </div>
    );
};

export default Fonti;