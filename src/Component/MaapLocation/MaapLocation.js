import React from 'react';
import {Map, GoogleMap} from 'google-maps-react';


const MaapLocation = () => {
    const mapStyles = {        
        height: "100vh",
        width: "100%"};
      
      const defaultCenter = {
        lat: 41.3851, lng: 2.1734
      }
    return (
        <Map googleMapsApiKey='AIzaSyDI82rl3N2EP961A93BwP2ixh1dEtnflcQ'>
        <GoogleMap
        mapContainerStyle={mapStyles} 
        zoom={8}
        center={defaultCenter}
        />
        </Map>
    );
};

export default MaapLocation;