import {createSlice} from '@reduxjs/toolkit'

export const alertSlice = createSlice({
	name: 'alert',
	initialState: {state:false},
	reducers: {
		open: state => {state.state = true},
		close: state => {state.state = false}
		}
	})
	console.log(alertSlice.actions.open())
	export const {open, close} = alertSlice.actions
	export default alertSlice.reducer
