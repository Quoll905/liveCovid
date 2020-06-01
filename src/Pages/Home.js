import React from 'react';
import {Link} from 'react-router-dom';

import Mappa from '../Componenti/Map/Map';

import Card from '../Componenti/Cards/Card';

import Modal from '../Componenti/Modal/Modal';

import './Home.css';


const urlProvincie = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-province-latest.json';
const urlRegioni = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-regioni-latest.json';
const urlItalia = 'https://raw.githubusercontent.com/pcm-dpc/COVID-19/master/dati-json/dpc-covid19-ita-andamento-nazionale-latest.json';

function invertiData(data){
    const arrayData = data.split('-');
    const dataGiusta = `${arrayData[2]}.${arrayData[1]}.${arrayData[0]}`
    return dataGiusta;
}

async function fetchAsync (url) {
    let response = await fetch(url);
    let data = await response.json();
    return data;
}


class Home extends React.Component {

    constructor(props){
        super(props);
        this.ottieniInfo.bind(this)
    }

    state = {
        continente: '',
        stato: '',
        regione:'',
        localita:'',
        numeri: {
            numeriStato: 0,
            numeriRegione: 0,
            numeriProvincia:0,
        },
        statoOggetto: {
        },
        regioneOggetto: {
        },
        localitaOggetto: {
        },
        isMounted: true,
    }

    componentWillUnmount(){
        this.setState({
            ...this.state,
            isMounted: false
        })
    }

    ottieniInfo = (continente, stato, regione, localita) => {
        this.setState({
            continente: continente,
            stato: stato,
            regione: regione,
            localita: localita
        })
        console.log(this.state.continente, this.state.regione);
        
        fetchAsync(urlItalia)
            .then(data => {
                console.log(data)
                this.setState({
                    numeri:{
                        ...this.state.numeri,
                        numeriStato: data[0].totale_positivi
                    },
                    statoOggetto: data[0]
                })
                console.log(this.state.numeri.numeriStato);
                stato = data[0];
                console.log('stato: ',this.state.statoOggetto);
                
            })
        
        fetchAsync(urlRegioni)
        .then(data => {
            console.log(data)

            data.forEach(element => {
                if (element.denominazione_regione === this.state.regione) {
                    this.setState({
                        numeri:{
                            ...this.state.numeri,
                            numeriRegione: element.totale_casi
                        },
                        regioneOggetto: element,
                    })
                    console.log('reegione: ', this.state.regioneOggetto);                    
                    return;
                }
            });
            console.log(this.state.numeri.numeriRegione);
            
        })


        fetchAsync(urlProvincie)
        .then(data => {
            console.log(data)

            data.forEach(element => {
                if (element.denominazione_provincia.split(' ')[0] === this.state.localita) {
                    this.setState({
                        numeri:{
                            ...this.state.numeri,
                            numeriProvincia: element.totale_casi
                        },
                        localitaOggetto: element,
                    })
                    console.log('provincia: ', this.state.localitaOggetto);
                    return;
                }
            });
            console.log(this.state.numeri.numeriProvincia);
            
        })


    }

    render() {
        return ( 
            <React.Fragment>

                {this.state.isMounted && <div className='contenitore_uno'>

                    <div className='contenitore-mappa'> 
                        {this.state.isMounted && <Mappa ottieniInfo={this.ottieniInfo} />}
                    </div>
                    
                    { this.state.continente !== '' ?
                        <Card className='carta_nomi_paesi'>
                            <h1>
                                Ultimo aggiornamento:{" "}
                                {this.state.statoOggetto.data
                                    ? invertiData(this.state.statoOggetto.data.substring(0, 10))
                                    : null}{" "}
                                alle ore:{" "}
                                {this.state.statoOggetto.data
                                    ? this.state.statoOggetto.data.substring(11,16)
                                    : null}{" "}
                            </h1>
                            <h2>{this.state.stato}: {this.state.numeri.numeriStato} <b className='variazione' style={this.state.statoOggetto.variazione_totale_positivi < 0 ? {color: '#158232'} : {color: 'red'}}>({this.state.statoOggetto.variazione_totale_positivi})</b> positivi</h2>
                            <h2>{this.state.regione}: {this.state.regioneOggetto.totale_positivi} <b className='variazione' style={this.state.statoOggetto.variazione_totale_positivi < 0 ? {color: '#158232'} : {color: 'red'}}>({this.state.regioneOggetto.variazione_totale_positivi})</b> positivi</h2>
                            <h2>{this.state.localita}: {this.state.numeri.numeriProvincia} totali</h2>
                        </Card> : 
                        <Card className='carta_loading' />    
                    }

                </div>}

                {this.state.isMounted && <div className='contenitore_due'>
                    <Link to='/situazioneGenerale'>
                        <Card className='piu_info_uno piu_info'>
                            { this.state.stato === '' ?
                                <h1>Sto caricando...</h1> :
                                <div>
                                    <h1>{this.state.stato}</h1>
                                    <h3>Casi totali: {this.state.statoOggetto.totale_casi}</h3>
                                    <h3>Deceduti: {this.state.statoOggetto.deceduti} </h3>
                                    <h3 style={{color:'#B3001B'}}>Nuovi positivi: {this.state.statoOggetto.nuovi_positivi} </h3>
                                    <h3>Terapia intensiva: {this.state.statoOggetto.terapia_intensiva} </h3>
                                    <h3 style={{color:'#255C99'}}>Positivi attuali: {this.state.statoOggetto.totale_positivi} </h3>
                                    <h3 style={this.state.statoOggetto.variazione_totale_positivi > 0 ? {color:'#B3001B'}:{color:'#158232'}} >Variazione giornaliera: {this.state.statoOggetto.variazione_totale_positivi} </h3>
                                </div>
                                
                            }
                        </Card>
                    </Link>
                    <Link to='/situazioneGenerale'>
                        <Card className='piu_info_due piu_info'>
                            { this.state.regione === '' ?
                                <h1>Sto caricando...</h1> :
                                <div>
                                    <h1>{this.state.regione}</h1>
                                    <h3>Casi totali: {this.state.regioneOggetto.totale_casi}</h3>
                                    <h3>Deceduti: {this.state.regioneOggetto.deceduti} </h3>
                                    <h3 style={{color:'#B3001B'}}>Nuovi positivi: {this.state.regioneOggetto.nuovi_positivi} </h3>
                                    <h3>Terapia intensiva: {this.state.regioneOggetto.terapia_intensiva} </h3>
                                    <h3 style={{color:'#255C99'}}>Positivi attuali: {this.state.regioneOggetto.totale_positivi} </h3>
                                    <h3 style={this.state.regioneOggetto.variazione_totale_positivi > 0 ? {color:'#B3001B'}:{color:'#158232'}}>Variazione giornaliera: {this.state.regioneOggetto.variazione_totale_positivi} </h3>
                                </div>
                            }
                        </Card>
                    </Link>
                    <Card className='piu_info_tre piu_info'>
                        { this.state.localita === '' ?
                            <h1>Sto caricando...</h1> :
                            <div>
                                <h1>{this.state.localita}</h1>
                                <h3>Casi totali: {this.state.localitaOggetto.totale_casi}</h3>
                            </div>
                        }
                    </Card>
                </div>}

                {/**<div className='cerca_google' >
                    <a target='_blank' rel="noopener noreferrer" href={`https://www.google.com/search?q=coronavirus+${this.state.localita}`}>
                        {  this.state.localita === '' ? 
                            'Cerca informazioni su google...' :
                            `Cerca informazioni su Coronavirus ${this.state.localita}`
                        }   
                    </a>
                    </div>**/}

                

            </React.Fragment>
        );
    
    };

};

export default Home;