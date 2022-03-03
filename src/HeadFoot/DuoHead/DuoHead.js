import React from 'react';
import styles from './DuoHead.module.css';
function TwinHead(props) {
	return(
   <div className={styles.double}>
    <div>{props.one}</div>
    <div>{props.two}</div>
   </div>
		)
}
export function DuoHead(){
  return(
  <TwinHead
    one ={<div className={styles.head}>
           <div className={styles.block}>
           <h1 >Development</h1>
           <i className="fa fa-gear fa-3x"></i>
         </div>
        </div>}
         
   two={<div className={styles.nohead}>Something </div>} />
   )
}