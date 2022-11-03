const initial = {messages:[1,2,3], loading:true}
export const messRed = (state=initial, action)=> {
	          switch(action.type){
				  case 'FETCH':
				        return {...state, messages: action.payload}
				   default: 
				        return state
				  }
	}
