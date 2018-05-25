import React from 'react';
import Header from './Header';

export default class Layout extends React.Component {

    handleChange(e){
        const input = e.target.value;
        this.props.changeDescription(input);
    }

    render(){     
        return (
            <div>                     
                 <h1> Markdown Previewer</h1>  
                 <input value = {this.props.value} onChange = {this.handleChange.bind(this)}/>
            </div>           
        );
    } 
}

