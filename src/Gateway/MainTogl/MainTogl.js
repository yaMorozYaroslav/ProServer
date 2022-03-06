import React from 'react';
import styles from './MainTogl.module.css'
import {MainCont} from '../MainCont/MainCont';
import {SideCont} from '../DuoSide/SideCont/SideCont';
import {PsFoot} from './DuoSide/PsFoor/PsFoor';
//import {Hover} from '../../components/Hover';
export function MainTogl(){
   const [hover, setHover] = React.useState(false);
   const handHov = () => setHover(true);

   return <>{!hover
             ?<div className={styles.red} onMouseEnter={handHov}>click</div>
             :<div className={styles.mainside}>

                  <div className={styles.unit1}><MainCont/></div>
                  <div className={styles.unit2}><SideCont/></div>
                  <div className={styles.unit3}><PsCont/></div>
              </div>}
          </>
} 



