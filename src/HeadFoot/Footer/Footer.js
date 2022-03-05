import React from 'react';

function useSome(){
	const [click, setClick] = React.setState(0);
    const roadRef = React.useRef(null);
    const toggler = () => setClick(!click);
}

export function Footer(){

	const [click, setClick] = React.setState(0);
	const roadRef = React.useRef(null);
	const toggler = () => setClick(!click);

	const arrays= 
	[
      "You've got all the right moves.",
      "You are perfect just the way you are.",
      "You're someone's reason to smile."
	]
	
	const random = Math.floor(Math.random()*arrays.length);

	return  
	        <div 
	           onClick={toggler}
	           ref={roadRef}>{click
		                           ?<h1>{random, arrays[random]}</h1>
		                           :'null'}
		    </div>
}

