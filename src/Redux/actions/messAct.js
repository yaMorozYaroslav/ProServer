export const getMessages =()=> async(dispatch)=> {
	  try{
		    dispatch({type: 'FETCH'})
		  }
		  catch(error){
			    console.log(error)
			  }
	}
