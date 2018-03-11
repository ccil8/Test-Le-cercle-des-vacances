import React from 'react';
import Voyant from './Voyants';
import Bouton from './Boutons';
import '../styles/index.css'; 
import Elevateur1 from '../actions/elevateur1';
import Elevateur2 from '../actions/elevateur2';

class Immeuble extends React.Component {
    render() {
      return (
        <div>
          <table>
            <caption> Immeuble </caption>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Voyant</th>
                    <th>Bouton d'appel</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1er étage</td>
                    <td><Voyant /></td>
                    <td><Bouton /></td>
                </tr>
    
                <tr>
                    <td>2ème étage</td>
                    <td><Voyant /></td>
                    <td><Bouton /></td>
                </tr>
    
                <tr>
                    <td>3ème étage</td>
                    <td><Voyant /></td>
                    <td><Bouton /></td>
                </tr>
    
                <tr>
                    <td>4ème étage</td>
                    <td><Voyant /></td>
                    <td><Bouton /></td>
                </tr>
    
                <tr>
                    <td>5ème étage</td>
                    <td><Voyant /></td>
                    <td><Bouton /></td>
                </tr>
    
                <tr>
                    <td>6ème étage</td>
                    <td><Voyant /></td>
                    <td><Bouton /></td>
                </tr>
    
                <tr>
                    <td>7ème étage</td>
                    <td><Voyant /></td>
                    <td><Bouton /></td>
                </tr>
    
                <tr>
                    <td>8ème étage</td>
                    <td><Voyant /></td>
                    <td><Bouton /></td>
                </tr>
    
                <tr>
                    <td>9ème étage</td>
                    <td><Voyant /></td>
                    <td><Bouton /></td>
                </tr>
    
                <tr>
                    <td>10ème étage</td>
                    <td><Voyant /></td>
                    <td><Bouton /></td>
                </tr>
            </tbody>
  
          </table>  
        </div>
      )
    }}
export default Immeuble;