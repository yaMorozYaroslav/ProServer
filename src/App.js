import React from 'react';
import {Container,Numbers} from './styles/AppStyle.js';
import {DropMenu} from './components/DropMenu';
import {Header} from './components/Header';
import {Switer} from './components/Switer';
//import ForRef from './components/ForRef';
import {MapKey} from './components/MapKey'
export const App = () => {
  return (
    <Container>
  <div className="App">
    <DropMenu />
    <Header />
    <Numbers><Switer /></Numbers>
    <MapKey />
  </div>
    </Container>
    );
}