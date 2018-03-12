import React from 'react';
import Title from './components/Title';

export default class Header extends React.Component {
    render(){
        return (
            <div>
                <Title title = {this.props.title}/>

                </div>

        )
    }
}