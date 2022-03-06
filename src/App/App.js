import React from 'react';
import styles from './App.module.css';

import {DuoHead} from'../HeadFoot/DuoHead/DuoHead';
import {MainTogl} from '../Gateway/MainTogl/MainTogl';


export function App(){
  return(

    <div className={styles.body}>

      <div className={styles.wrapper}>
  <DuoHead />
  <MainTogl/>
        <div className={styles.push}></div>
    </div>

 
    </div>
    )
  }