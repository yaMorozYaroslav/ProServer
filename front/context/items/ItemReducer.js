import {GET_ITEMS, START_LOADING, END_LOADING, ADD_ITEM,
	               UPDATE_ITEM, REMOVE_ITEM, ERROR} from "./ItemTypes"

const ItemReducer = (state, action) => {
  switch (action.type) {
	  
	case GET_ITEMS:
	  return {...state, items: action.payload }
		  
	case START_LOADING:
	return{...state,loading: true}
	case END_LOADING:
	return{...state,loading: false}

  
    case ADD_ITEM:
      if(!state.items.data){return state}
      else{return {...state, items: {...state.items,
		                data: [...state.items.data, action.payload]}  }}
		                
    case UPDATE_ITEM: 
      return{...state, items: {...state.items, 
			 data: state.items.data.map((item) =>
         (item._id === action.payload._id ? action.payload : item))}  }

    case REMOVE_ITEM:
    console.log(action.payload)
      return {...state, items: {...state.items,
		                   data: state.items.data.filter((item) =>
			                       item._id !== action.payload._id)}  }
    case ERROR:
	return{...state, error: action.payload, loading: false}
	
    default:
      return state;
  }
}

export default ItemReducer;
