import React, {Component} from 'react';
import axios from 'axios';

class Confidential extends Component{
    constructor(){
        super()
        this.logout=this.logout.bind(this);
    }

logout(){
    axios.post('/api/auth/logout').then(res=>{
        this.props.history.push('/')
    })
}

    render(){
        return(
            <div>
             Confidential
             <div>
             <button onClick={this.logout}>Logout</button>
             </div>
            </div>
        )
    }
}

export default Confidential;