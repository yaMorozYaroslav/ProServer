import React, {useEffect, useState} from 'react';

const Expire = props => {
	const [visible, setVisible] = useState(true);

	useEffect(()=>{
		setTimeout(()=>{
			setVisible(false);
		}, props.delay);
	}, [props.delay]);

  return visible ? <div>{props.children}</div>:<div/>;
};
export const Expired = () => <Expire delay="5000">Hooks are awesome!</Expire>