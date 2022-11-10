import React from 'react'
import {open, close} from '../Redux/alertSlice'
import {useDispatch, useSelector} from 'react-redux'

export const Alert = () => {
	const dispatch = useDispatch()
	const selectAlert = state => state.alert.state
	const alert = useSelector(selectAlert)
	console.log(alert)
	return(
	<section>
	<h1>You've sent the message</h1>
	<button onClick={()=>dispatch(close())}>close</button>
	</section>
	)
	}
