import React from 'react'

export default class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Name: ''};
      this.state = {Surname: ''};
      this.state = {Email: ''};

      
  
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
      event.preventDefault();

    }

  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            
            </label><br />

            <label>
            Surname:
            <input type="text" value={this.state.value} onChange={this.handleChange} /><br />
            
            </label>
            <label>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            
            </label>
         
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }