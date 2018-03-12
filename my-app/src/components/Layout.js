import React from 'react';

import Footer from './Footer';
import Header from './Header';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
        title: "Welcome",
    };
}
    render(){    
        const title = "Welcome Cindy!"; 

        return (
            <div>
                {this.state.name}                
                 <Header title={"Other Title"}/>
                 <Footer />

            </div>
                 
        );
    } 
}