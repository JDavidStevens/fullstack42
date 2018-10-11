import React, {Component} from 'react';
import logo from './communityBank.svg';
import './login.css';

class Login extends Component{

    login(){
let {REACT_APP_DOMAIN, REACT_APP_CLIENT_ID} = process.env;
let uri = `${encodeURIComponent(window.location.origin)}/auth/callback`

window.location = `https://${REACT_APP_DOMAIN}/authorize?client_id=${REACT_APP_CLIENT_ID}&scope=openid%20profile%20email&redirect_uri=${uri}&response_type=code`
    }


    render(){
        return(
            <div className="login">
                <div className="img-div">
                <img className='logo' src={logo} alt=""/>
                </div>
                <div>
                <button onClick={this.login}>Login</button>
                </div>
            </div>
        )
    }
}

export default Login;