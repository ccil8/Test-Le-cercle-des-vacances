import React from 'react';
//import {moncercle} from '../styles/index.css'; 

class Bouton extends React.Component{
    constructor(){
        super();
        this.state= {
            appel: false,
        };
        this.Appel= this.Appel.bind(this);
    }

    Appel(){
        this.setState(prevState => ({
            appel: !prevState.appel
        }));
        if (this.setState.appel = true ) {
            alert('Fermeture des portes');
        }
        
    }

    render(){
        if (this.setState.appel = true ) {
            alert('Fermeture des portes');
        }
        return(
            <div>
                <button onClick={this.Appel}>
                {this.state.appel? 'Ok' : 'Non'}
                </button>
            </div>
        )
    }
}




export default Bouton;