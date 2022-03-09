export const themes = {
	light: {
		foreground: 'white',
		background: 'black'
	},
	dark: {
		foreground: 'green',
		background: 'red'
	},
};
export const ThemeContext = React.createContext(themes.dark);