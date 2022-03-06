import React from 'react';
import styles from './PsFoot.module.css';
import pic from './git.png';
export function PsFoot(){
	return <div className={styles.container}>
	<img className={styles.foot} src={pic} />
          </div>

      }