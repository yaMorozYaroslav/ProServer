import React from 'react';
import styles from './Profile.module.css';
import photo from './Yaroslav.jpg';
export const Profile = () => {
	return( <div  className={styles.container}>
     <div className={styles.wrapper}>
	 <img className={styles.photo} src={photo} alt="yaro"/></div>
	    <div className={styles.name}><h1>Yaroslav Moroz, 23 years old</h1></div>
		<h5 className={styles.text}>I am a self-taught NodeJS developer who learns the
	 entire stack to understand the overall
	 development process. The ability to use JS for both the 
	 backend and the frontend inspires me to do this, because I 
	 can dive deeper while focusing on one language. Mainly 
	 interested in creating websites and applications. In the 
	 future, I wanna participate in the creation of AI web 
	 applications. It is a long way, but why not if there
	 is a lifetime. Waiting for new acquaintances and profitable
	  offers.</h5>

	  </div>);
}