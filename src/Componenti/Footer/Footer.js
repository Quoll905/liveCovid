import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faMugHot } from '@fortawesome/free-solid-svg-icons';

import './Footer.css';

const Footer = props => {
    return (
        <footer className='contenitore_footer'>
            <p className='levare_mobile'>Tutte le informazioni sono prese da fonti ufficiali</p>
            
            <p>Copyright®MarcoMarazzi</p>
            
            <p>Fatto con <FontAwesomeIcon icon={faHeart} style={{marginLeft:'4px', marginRight:'4px'}} /> e <FontAwesomeIcon icon={faMugHot} style={{marginLeft:'6px', marginRight:'5px', transform:'scale(1.2)'}}  /> da Viterbo, Lazio, Italia </p>
        </footer>
    );
};

export default Footer;