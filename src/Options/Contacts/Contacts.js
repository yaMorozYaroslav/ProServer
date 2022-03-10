import React from 'react';
import styles from './Contacts.module.css';
export function Contacts(){
	const Number = () =>{return (<><h1>Number</h1><p>+48606259667</p></>)};

	const Email = () =>{return (<><h1>Email</h1><p>ya.moroz.yaroslav@gmail.com</p></>)};
	const LinkedIn = () =>{return (
		        <><h1>LinkedIn</h1><p>https://www.linkedin.com/in/yaroslav-moroz-4556a8225/</p></>)};
    const GitHub = () =>{return (<><h1>GitHub</h1><p>ya.moroz.yaroslav@gmail.com</p></>)};
 return(<div className={styles.can}>
                               <Number/>
                               <Email/>
                               <LinkedIn/>
                               <GitHub/>

        </div>)
}