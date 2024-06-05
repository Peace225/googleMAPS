import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import styled from 'styled-components';

const MapWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const mapStyles = {
  height: '70vh',
  width: '80%'
};

const defaultCenter = {
  lat: 48.8566,
  lng: 2.3522
};

const MapContainer = () => {
  return (
    <MapWrapper>
      <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
      </LoadScript>
    </MapWrapper>
  );
};

export default MapContainer;
