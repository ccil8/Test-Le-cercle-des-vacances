import React from 'react';
import {Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import actions from '../actions/login';

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email: '',
        password: '',
        connected: false,
      };
    }

    updateEmail(e) {
        this.setState({
            email: e.target.value,
        });
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value,
        });
    }

    login(e) {
        if (this.state.email.length > 0 && this.state.password.length > 0) actions.userLogin(this);
            e.preventDefault();
    }

    render(){
        return (
            <div>
                {this.state.connected ?
                <p>{this.state.isAdmin ?
                <Redirect to="/admin" /> :
            <Redirect to="/" /> }
            </p> :
          <div>
            <h2>CONNEXION</h2>
            <form method="POST" onSubmit={e => this.login(e)}>
                <input onChange={e => this.updateEmail(e)}
                    name="email"
                    floatingLabelText="Email"
                    type="text"/>
                    
                
                <br></br>
                <input
                    onChange={e => this.updatePassword(e)}
                    name="password"
                    floatingLabelText="Password"
                    type="password"
                    errorText={this.state.message}/>
                
                <br></br>
                <button type="submit" label="Envoyer" /><button label="Annuler" containerElement={<Link to="/" href="/"></Link>} />
            </form>
          </div>
          }
        </div>
        )
    }
}
export default Login;