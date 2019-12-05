import React from 'react';

import './styles.css';


class Chip extends React.Component {
    constructor(props){
        super(props);
        this.state = {

        }

        console.log(this.props.avatar)
    }

    render(){
        return(
            <div className="chip">
                <img src={this.props.avatar} width="200" alt="teste" height="200"/>
            </div>
        )       
    };
}

export default Chip;
