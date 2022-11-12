import React from 'react';
import styles from './App.module.css';

import {Contact} from '../Contact/Contact'
import {Header} from'../coms/HeadFoot/Header';
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
