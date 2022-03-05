import React from 'react';

import styles from './Footer.module.css';

export function Footer(){

	const [click, setClick] = React.useState(false);
	const toggler = () => setClick(!click);

	const arrays= 
	[
      "You've got all the right moves.",
      "You are perfect just the way you are.",
      "You're someone's reason to smile."
	]

	const random = Math.floor(Math.random()*arrays.length);

	return  (<div className={styles.body}>
		    <div className={styles.psefoot}>
		    <div className={styles.push}></div>
            </div>
	        <div 
	           className={styles.footer}
	           onClick={toggler}>{!click
		                           ?<h1>{random, arrays[random]}</h1>
		                           :<h1>{random, arrays[random]}</h1>
		                       }
		    </div>
		    </div>
)
}


