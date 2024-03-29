import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component  {
  render() {  
    const {loggedInUser} = this.props;
    const loggedIn = loggedInUser !== null;
    console.log("Navs component")
    console.table(this.props)
  return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to='/' exact activeClassName='active'> Home </NavLink>
                </li>
                <li>
                    <NavLink to='/add' exact activeClassName='active'>New Question </NavLink>
                </li>
                <li>
                    <NavLink to='/leaderboard' exact activeClassName='active'>Leader Board </NavLink>
                </li>
           {loggedIn &&
                 <li className="user-info">
                    <span className="user">Hello, {loggedInUser}</span>
                     <div className="avatar"  style={{ backgroundImage:  `url(${loggedInUser.avatarURL})`}}></div>
                 </li>}  
             {loggedIn && <li>
                    <NavLink to='/logout' exact activeClassName='active'>Logout</NavLink>
                </li>}
            </ul>
        </nav>
    )
  }
}