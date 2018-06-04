
import React from 'react';


export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Name: '',
      Surname:'',
      Email:''};
    
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({Name: event.target.value});
      this.setState({Surname:event.target.value})
      this.setState({Email:event.target.value})
      
    }
   
    handleSubmit(event) {
      alert('Details submitted: ' + this.state.Name);
      // event.preventDefault();

    }
   
    render() {
      return (
        
        <form onSubmit={this.handleSubmit}>
        <h1 center> Get to honor me</h1>
        <h2> Q&A</h2>
          <label >
            Name and Surname:
            <input  placeholder="" type="text" value={this.state.value} onChange={this.handleChange} />
            
            </label><br />

            <label>
            Where were you born:
            <input placeholder="" type="text" value={this.state.value} onChange={this.handleChange} /><br />
            
            </label>
            <label>
            How Tall Are You:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            
            </label>
         
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }