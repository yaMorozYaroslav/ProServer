import React from 'react';
import styles from './App.module.css';

import {Contact} from '../comps/Contact/Contact'
import {Header} from'../comps/HeadFoot/Header/Header';
import {Main} from '../comps/Main/Main';

export function App(){
  return(
     <div className={styles.body}>
   <Contact />
  <Header />
  <Main />  
    </div>
    )
  }
