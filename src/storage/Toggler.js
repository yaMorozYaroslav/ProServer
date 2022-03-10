import React from 'react';

export function Toggler(){
	const [click, setClick] = React.useState(false);
	const handClick = () => setClick(!click);
	return <h1 onMouseEnter={handClick} onMouseOut={handClick}>{click?'open':'close'}</h1>
}