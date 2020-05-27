import React from 'react';

import './FalsiMiti.css';

const arrayMiti = [
    {
        titolo: 'Attualmente non ci sono farmaci testati per il trattamento o la prevenzione del Covid-19',
        breveDescrizione: 'Mente si stanno sperimentando molti farmaci e vaccini, attualmente non è ancora disponibile nessun farmaco per la cura e prevenzione del Covid-19. L\'organizzazione mondiale della sanità si sta impegnando per coordinare medici e ricercatori per trovare una cura il prima possibile.'
    },
    {
        titolo: 'Ingerire la candeggina o qualche altro disinfettante non protegge affatto dal coronavirus, ma può solamente essere pericoloso per la salute',
        breveDescrizione: 'Non introdurre in nessun modo disinfettanti nel tuo corpo. Può essere velenoso e causare irritazione e danni alla pelle e al corpo. Devono essere spruzzati per disinfettare le superfici.'
    },
    {
        titolo: 'Il covid-19 non viene trasmesso dalle mosche o dale zanzare',
        breveDescrizione: 'Al momento non ci sono prove che le mosche possano trasmettere il virus. Puoi infettarti toccando una superficie infetta e toccandoti gli occhi, il naso o la bocca prima di esserti lavato le mani, ma non tramite insetti. '
    },
    {
        titolo: 'Bere etanolo, metanolo o alcol etilico NON previene dal coronavirus',
        breveDescrizione: 'Etanolo o alcol etilico sono molto velenosi e possono facilmente portare alla morte. Possono essere usati come disinfettanti per le superfici ma non deve assolutamente essere ingerito. '
    },
    {
        titolo: 'Il 5G non influisce sul coronavirus',
        breveDescrizione: 'I virus non possono viaggiare attraverso le onde radio o le reti mobili. Il coronavirus infatti si è espanso molto anche in paesi che non hanno una connessione 5G.'
    },
    {
        titolo: 'Esporre il proprio corpo a temperature superiori ai 25 gradi C NON previene il coronavirus',
        breveDescrizione: 'Continenti molto caldi hanno riportano comunque molti contaggi da covid-19. '
    },
    {
        titolo: 'Essere in grado di trattenere il respiro per più di 10 secondi senza tossire NON significa che tu non abbia il coronavirus o altre malattie polmonari',
        breveDescrizione: 'Questa è un falso mito che girava su whatsapp. L\'unico modo attualmente disponibile per determinare se si ha il virus è con i test in laboratorio.'
    },
]

const FalsiMiti = (props) => {
    return (
        <React.Fragment>

            <h1 className='titolo_falsi_miti'>Ecco una lista dei falsi miti che hanno ottenuto più successo in rete riguardo il coronavirus</h1>
            <h3 className='fonte_falsi_miti'>Fonte: <a target='_blank' href='https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/myth-busters'>Organizzazione Mondiale della Sanità</a> </h3>

            <div className='contenitore_falsi-miti'>
                            
                {
                    arrayMiti.map((mito, index)=>
                        <div key={index} className='mito'>
                            <h1>{mito.titolo}</h1>
                            <p>{mito.breveDescrizione}</p>
                        </div>
                    )
                }

            </div>

        </React.Fragment>
    );
};

export default FalsiMiti;