import React from 'react';
import MapContainer from './MapContainer';
import styled from 'styled-components';

const AppWrapper = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const App = () => {
  return (
    <AppWrapper>
      <Header>
        <h1>Google Maps: Un outil étonnant utilisé au quotidien !</h1>
      </Header>
      <MapContainer />
    </AppWrapper>
  );
};

export default App;
