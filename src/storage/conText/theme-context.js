import React from 'react';
export const themes = {
	light: {
		color: 'white',
		background: 'black'
	},
	dark: {
		color: 'green',
		background: 'red'
	},
};
export const ThemeContext = React.createContext(themes.light);