import React from 'react';
import styles from './App.module.css';

import {Header} from'../comps/Header/Header';
import {Main} from '../comps/Main/Main';

export function App(){
  return(
  
     <div className={styles.body}>
  <Header />
  <Main />  
     </div>
   
    )
  }
