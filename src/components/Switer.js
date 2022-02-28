import React from 'react';
export const UserContext = React.createContext();
export default function App(){
	return(
		<UserContext.Provider value="Reed">
		)
}