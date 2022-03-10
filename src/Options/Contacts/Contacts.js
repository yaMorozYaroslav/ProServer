import React from 'react';
import styles from './Contacts.module.css';
export function Contacts(){
	const Number = () =>{
		return (<><h1 className={styles.label}>Number</h1>
			      <p className={styles.discr}>+48606259667</p></>)};

	const Email = () =>{
		return (<><h1 className={styles.label}>Email</h1>
		          <p className={styles.discr}>ya.moroz.yaroslav@gmail.com</p></>)};

	const LinkedIn = () =>{
		   return ( <><h1 className={styles.label}>LinkedIn</h1>
                      <p className={styles.discr}>
                             linkedin.com/in/yaroslav-moroz-4556a8225/</p></>)};

    const GitHub = () =>{
    	return (<><h1 className={styles.label}>GitHub</h1>
    	          <p className={styles.discr}>github.com/yaMorozYaroslav</p></>)};
 

 return(<div className={styles.can}>
                               <Number/>
                               <Email/>
                               <LinkedIn/>
                               <GitHub/>

        </div>)
}