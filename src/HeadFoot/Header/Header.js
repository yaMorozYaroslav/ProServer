import React from 'react';
import styles from './Header.module.css';
export const Header = () => {
	return(
   <div className={styles.head}>
      <div className={styles.block}>
     <h1 >Development</h1>
     <i className="fa fa-gear fa-3x"></i>
     </div>
   </div>
		)
}