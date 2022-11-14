import React from 'react';
import styles from './Main.module.css'
import {Router} from '../Router/Router';
import {SideCont} from '../SideCont/SideCont';
//import img from './touch.png'
import {Contact} from '../Contact/Contact'

import {useSelector} from 'react-redux'

export function Main(){
    
    const selectContact = state => state.open.contact
    const contact = useSelector(selectContact)
    
   return <> 
        
             <div className={styles.mainside}>

                   <div className={styles.unit1}><Router/></div>
                  
                        <div className={styles.sidecont}>
                            
                            <div className={styles.unit2}>{contact?<Contact />:<SideCont/>}</div>
                        </div>
             </div>
       }
          </>
} 



