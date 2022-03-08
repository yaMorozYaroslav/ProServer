import React from 'react';
import styles from './MainTogl.module.css'
import {MainCont} from '../MainCont/MainCont';
import {SideCont} from '../../DuoSide/SideCont/SideCont';
import {PsFoot} from '../../DuoSide/PsFoot/PsFoot';
import img from './touch.png';
//import {Hover} from '../../components/Hover';
export function MainTogl(){
   const [hover, setHover] = React.useState(false);
   const handHov = () => setHover(true);

   return <>{!hover
             ?<div className={styles.cont} >
             <img className={styles.red} onMouseEnter={handHov} src={img}/>
             </div>
             :
        
             <div className={styles.mainside}>

                  <div className={styles.unit1}><MainCont/></div>
             <div className={styles.sidecont}>
                  <div className={styles.unit2}><SideCont/></div>
                  <div className={styles.unit3}> <PsFoot/></div>
             </div>
                 
             </div>
       }
          </>
} 



