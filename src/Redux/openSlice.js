import {createSlice} from '@reduxjs/toolkit'

export const openSlice = createSlice({
	name: 'open',
	initialState: {alert:false, contact:false},
	reducers: {
		openAlert: state => {state.state = true},
		closeAlert: state => {state.state = false}
		}
	})
	console.log(openSlice.actions.openAlert())
	export const {openAlert, closeAlert} = openSlice.actions
	export default openSlice.reducer
