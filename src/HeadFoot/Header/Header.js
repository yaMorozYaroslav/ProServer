import React from 'react';
import styles from './Header.module.css';
export const Header = () => {
	return(
   <div className={styles.head}>
     <h1 className={styles.comp}>Development</h1>
     <i className="fa fa-gear fa-3x"></i>
   </div>
		)
}