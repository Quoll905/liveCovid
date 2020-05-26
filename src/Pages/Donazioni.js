import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMugHot, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import './Donazioni.css';

const Donazioni = (props) => {
    return (
        <div className='contenitore_totale'>
            <div className='contenitore_donazioni'>
                <div className='donazioni'>
                    <h1>Offrimi un caffè <FontAwesomeIcon icon={faMugHot} style={{color:'green',paddingLeft:'20px',paddingBottom:'8px'}} /></h1>
                    <p>Se ti piace il progetto e vuoi contribuire per poterlo migliorare cliccando qui sotto sarà possibile effettuare una donazione!</p>
                    <form className="form-donazioni" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="GRD4E46W7ZQSC" />
                        <input type="image" src="https://www.paypalobjects.com/it_IT/IT/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Fai una donazione con il pulsante PayPal" />
                        <img alt="" border="0" src="https://www.paypal.com/it_IT/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </div>
                <div className='contatti'>
                    <h1>Contatti <FontAwesomeIcon icon={faAddressCard} style={{color:'#255C99',paddingLeft:'20px'}} /></h1>
                    <p>Per qualsiasi informazione, consiglio e offerte non esitate a contattarmi per email</p>
                    <h2> marazzi.marco@yahoo.com</h2>
                </div>
            </div>
        </div>
    );
};

export default Donazioni;