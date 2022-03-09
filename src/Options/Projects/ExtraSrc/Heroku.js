import React, {useEffect} from 'react';

export function Heroku(){
	useEffect(()=>{
		window.location
		    .href="https://mernpackapp.herokuapp.com/";
	}, []);
   return <></>
}