import React from 'react';

export function Footer(){
  const [state,setState] = useState(false);
	return(
<>
 <button onClick={toggle}>
 Open
 </button>
</>
		)
}