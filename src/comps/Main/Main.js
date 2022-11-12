import React from 'react';
import styles from './Main.module.css'
import {Router} from '../Router/Router';
import {SideCont} from '../SideCont/SideCont';
import img from './touch.png';

export function Main(){

   return <> 
        
             <div className={styles.mainside}>

                   <div className={styles.unit1}><Router/></div>
                  
                        <div className={styles.sidecont}>
                            <div className={styles.unit2}><SideCont/></div>
                        </div>
                 
             </div>
       }
          </>
} 



