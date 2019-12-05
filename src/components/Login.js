import React, { Component }  from 'react';
import logo from '../assets/logo.svg';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUsers';
import { withRouter } from 'react-router-dom'

class Login extends Component {
    state = {
        user: null
    }

    setAuthedUser = (e) => {
        e.preventDefault()
        this.props.dispatch(setAuthedUser(this.state.user));
        const { from } = this.props.location.state || { from: { pathname: "/"}};
        this.props.history.replace(from);
    }

    handleUser = (e) => {
        const val = e.target.value;
        this.setState({ user: val})
    }

    render() {
        const users = Object.keys(this.props.users).map(id => this.props.users[id]);
        return (
            <div className='login'>
                {/* todo load image */}
                <h1>Welcome to Would You Rather Be</h1>
             
                <div className='login-info'>
                    <img
                    src={logo}
                    alt={`Logo of react`}
                    className='logo'
                    />
                    <form onSubmit={this.setAuthedUser}>
                    <select className="select" placeholder='Choose Name'
                     onChange={this.handleUser}>
                     <option name="none" key="none" value=""></option>
                      {users.length > 0 && users.map(user => <option name={user.id} key={user.id} value={user.id}> {user.name}</option>)}
                    </select>
                    <button className="btn" type="submit">Submit</button>                    </form>      
                </div>
            </div>
         ); 
    }
}


function mapStateToProps( state ){
    return {
        users: state.users
    };
}

export default withRouter(connect(mapStateToProps)(Login));