import React from 'react';
import styles from './App.module.css';

import {Contact} from '../Contact/Contact'
import {DuoHead} from'../HeadFoot/DuoHead/DuoHead';
import {MainTogl} from '../Gateway/MainTogl/MainTogl';

export function App(){
  return(
     <div className={styles.body}>
   <Contact />
  <DuoHead />
  <MainTogl/>  
    </div>
    )
  }
