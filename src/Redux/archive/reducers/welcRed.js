 const welcRed = function (state = false, action) {
	switch(action.type){
		case 'OPENED':
		      return true
		case 'CLOSED':
		      return false
		 default:
		       return state
		       }
		 }
export default welcRed
