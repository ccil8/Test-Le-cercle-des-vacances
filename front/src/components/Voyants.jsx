import React from 'react';
import {voyant, voyant1} from '../styles/index.css'; 

class Voyant extends React.Component{
    constructor(){
        super();
        this.state= {
            voyant: false,
            porte: false,
        };
        this.Voyant= this.Voyant.bind(this);
        this.Porte= this.Porte.bind(this);
    }

    Voyant(){
        this.setState(prevState => ({
            voyant: !prevState.voyant
        }));  
        if (this.setState.voyant == true) {
            voyant.style.backgroundColor="yellow";
        }
    }

    Porte(){
        this.setState(prevState => ({
            porte: !prevState.porte
        }));  
        if (this.setState.porte == true) {
            voyant1.style.backgroundColor="green";
        }
    }

    render(){
        return(
            <div>
                <div className={voyant} onChange={this.Voyant}>
                1</div>
                <div className={voyant1} onChange={this.Porte}>
                2</div>
            </div>
        )
    }
}



export default Voyant;