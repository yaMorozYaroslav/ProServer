import React from 'react';
export function Footer(){
	const [click, setClick] = React.useState(false);
	const handClick = () => {setClick(!click)};
	return (
  <div onClick={handClick}>{click?'open':'close'}</div>
	)
}