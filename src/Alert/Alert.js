import React from 'react'
import {close} from '../Redux/alertSlice'
import {useDispatch, useSelector} from 'react-redux'

export const Alert = () => {
	const dispatch = useDispatch()
	
	return(
	<section>
	<h1>You've sent the message</h1>
	<button onClick={()=>dispatch(close())}>close</button>
	</section>
	)
	}
