import React from 'react';
export default class App extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         value: '',
         personGoing: true,
         numberOfPersons: 5
      };
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
   }
   handleSubmit(event){
      alert(this.state.value);
      event.preventDefault();
   };
   handleInputChange(event){
      this.setState({value: event.target.value})
   }
   render(){
      return(
     <form onSubmit={this.handleSubmit}>
        <h1>Input</h1>
        <label>   Form:
          <input 
              type="text" value={this.state.value} onChange={this.handleInputChange} />
        </label><br />

        <input type="submit" value="Submit" />
      </form>
         );
   }
}