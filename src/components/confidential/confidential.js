import React, { Component } from 'react';
import axios from 'axios';
import { updateUser } from '../../ducks/reducer';
import { connect } from 'react-redux';

class Confidential extends Component {
    

    async componentDidMount() {
        let res = await axios.get('/api/user-data');
            //invoke action creator
            this.props.updateUser(res.data)
    }

    // balance(){

    // }

    

    render() {
        let {
            customer_name,
            customer_auth_id,
            customer_email,
            customer_picture
        } = this.props.user;

        console.log("props:", this.props)
        return (
            <div>
                <h1>Account Information</h1>
                <hr></hr><hr></hr><hr></hr>
                {
                    customer_name ? (
<div>
<p>Account Holder:{customer_name}</p>
<p>Email:{customer_email}</p>
<p>Account Number:{customer_auth_id}</p>
{/* <p>Balance:{`$${this.balance()}.00`}</p> */}
<img className="picture" src={customer_picture} alt=''/>
</div>
                    ):(
<div>
    <p>Please Log In.</p>
</div>
                    )
                }
                <a href='http://localhost:4000/auth/logout'>
                    <button>Logout</button>
                </a>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { updateUser })(Confidential);
//invoke connect which is a function. A function is then returned and is then invoked with Confidential