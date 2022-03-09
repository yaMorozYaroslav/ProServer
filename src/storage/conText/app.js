import {ThemeContext, themes} from './theme-context';
import ThemedButton from './themed-button';

function Toolbar(props){
	return(
		<ThemedButton onClick={props.changeTheme}>
           Change Theme
		</ThemedButton>
		);
}
export default class Ap extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			theme: themes.light,
		};
	this.toggleTheme = () => {
		this.setState(state => ({
			theme: state.theme === themes.dark
			       ? themes.light
			       : themes.dark
		}));
	};
  }
render(){
	return(
   <Page>
     <ThemeContext.Provider value={this.state.theme}>
        <Toolbar changeTheme={this.toggleTheme} />
     </ThemeContext.Provider>
      <Section>
         <ThemedButton />
      </Section>
   </Page>
  );
 }
}