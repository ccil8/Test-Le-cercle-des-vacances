import React from 'react';
import Voyant from './Voyants';
import Bouton from './Boutons';
//import {panneau} from '../styles/index.css'; 

class Panneau extends React.Component {
    render() {
      return (
        <div >
          <table>
            <caption> Panneau interne </caption>
            <tbody>
                <tr>
                    <td>
                        <Voyant />
                    </td>
                </tr>
                <tr>
                <td>
                    <p>1</p>
                    <Bouton />
                </td>
                <td>
                    <p>2</p>
                    <Bouton />
                </td>
                <td>
                    <p>3</p>
                    <Bouton />
                </td>
                </tr>
    
                <tr>
                <td>
                    <p>4</p>
                    <Bouton />
                </td>
                <td>
                    <p>5</p>
                    <Bouton />
                </td>
                <td>
                    <p>6</p>
                    <Bouton />
                </td>
                </tr>

                <tr>
                <td>
                    <p>7</p>
                    <Bouton />
                </td>
                <td>
                    <p>8</p>
                    <Bouton />
                </td>
                <td>
                    <p>9</p>
                    <Bouton />
                </td>
                </tr>

                <tr>
                <td>
                    <p>10</p>
                    <Bouton />
                </td>
                </tr>
            </tbody>
          </table>  
          
        </div>
      )
    }}
export default Panneau;