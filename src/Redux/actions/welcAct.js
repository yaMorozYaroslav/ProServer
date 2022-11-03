export const linkClick =()=> async(dispatch)=> {
	 try{
		   dispatch({type: 'OPENED'})
		 }
		 catch(error){
			 console.log(error)
		 }
	}
