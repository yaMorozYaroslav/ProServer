import React, {Fragment} from 'react';
import styles from'./MainCont.module.css';

import {BrowserRouter, Switch, Routes, Route}from "react-router-dom";


export const MainCont = () => {
   return(
     <div className={styles.mainCont}>

      <div className={styles.unit}>Profile</div>
      <div className={styles.unit}>Projects</div>
      <div className={styles.unit}>Contacts</div>

     </div>
      )
}