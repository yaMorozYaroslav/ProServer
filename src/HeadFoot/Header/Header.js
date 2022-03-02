import React from 'react';
import styles from './Header.module.css';
function DuoHead(props) {
	return(
   <div className={styles.double}>
    <div>{props.one}</div>
    <div>{props.two}</div>
   </div>
		)
}
export function Header(){
  return(
  <DuoHead
    one ={<div className={styles.head}>
           <div className={styles.block}>
           <h1 >Development</h1>
           <i className="fa fa-gear fa-3x"></i>
         </div>
        </div>}
         
   two={<div className={styles.nohead}>Something </div>} />
   )
}