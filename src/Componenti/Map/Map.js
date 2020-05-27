import React, { Component } from 'react';
import L from 'leaflet';
import userLocationURL from './pin.png';
import { Map, TileLayer, Marker } from 'react-leaflet';

import './Map.css';

const myIcon = L.icon({
    iconUrl: userLocationURL,
    iconSize: [40, 42]
});

let continente = '';
let stato = '';
let regione = '';
let localita = '';

class Mappa extends Component {
    state = {
        location: {
          lat: 51.505,
          lng: -0.09,
        },
        haveUserLocation: false,
        zoom: 2,
        isMounted: true,
    }

    componentWillUnmount() {
        this.setState({
            ...this.state,
            isMounted: false
        })
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition((position)=> {
            
            this.setState({
                location: {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude,
                },
                haveUserLocation: true,
                zoom: 14
            });

            console.log(this.state.location);

            fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.state.location.lat}&longitude=${this.state.location.lng}&localityLanguage=it`)
                .then(res=>res.json())
                .then(location=>{
                    console.log(location);
                    continente = location.continent;
                    stato = location.countryName;
                    regione = location.principalSubdivision;
                    localita = location.localityInfo.administrative[2].isoName;
                    console.log(continente, stato, regione, localita);
                    this.props.ottieniInfo(continente, stato, regione, localita)
                })


        },() => { 
            console.log('aaaaa');
            fetch('https://ipapi.co/json')
                .then(res => res.json())
                .then(location => {
                    console.log(location);
                    continente = location.continent_code;
                    stato = location.country;
                    regione = location.region;
                    console.log(continente,stato,regione);
                    this.setState({
                        location: {
                            lat: location.latitude,
                            lng: location.longitude,
                        },
                        haveUserLocation: true,
                        zoom: 10
                    });
                    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.state.location.lat}&longitude=${this.state.location.lng}&localityLanguage=it`)
                        .then(res=>res.json())
                        .then(location=>{
                            console.log(location);
                            continente = location.continent;
                            stato = location.countryName;
                            regione = location.principalSubdivision;
                            localita = location.localityInfo.administrative[3].name.split(' ')[0];
                            console.log(continente, stato, regione, localita);
                            this.props.ottieniInfo(continente, stato, regione, localita)
                    })
                 })
        });

    }

    render() {
        const position = [this.state.location.lat, this.state.location.lng];
        return (
            <>
            {this.state.isMounted && <div className="map">
                <Map
                className="map"
                worldCopyJump={true}
                center={position}
                zoom={this.state.zoom}>
                    <TileLayer
                     attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors and Chat location by Iconika from the Noun Project"
                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    { this.state.haveUserLocation &&
                        <Marker position={position} icon={myIcon} />   
                    }           
                </Map>
            </div>}
            </>
        );
    }



};

export default Mappa;