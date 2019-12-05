import React, { Component} from 'react';
import '../index.css'
import '../components/App.css';
import Login from './Login';
import NewQuestion from './NewQuestion';
import LeaderBoard from './LeaderBoard';
import PollDetailQuestion from './PollDetailQuestion'
import PollResult from './PollResults'
import { connect } from 'react-redux';
import { getInitialData } from '../actions/shared';
import {Route, BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUsers';
import  NavSys from './Nav';
import NoDataFound from './NoDataFound';
 

class App extends Component {
  componentDidMount(){
    this.props.dispatch(getInitialData());
  }

  PrivateRoute = ({ component: Component, ...rest}) => (
    <Route {...rest} render={({ location, ...props }) => (
      this.props.isLoggedIn
      ? <Component {...props} />
      : <Redirect to = {{
        pathname: "/login",
        state: { from: location }
      }} />
  )} />
)

  logout = () => {
    this.props.dispatch(setAuthedUser(null));
    return <Redirect to='/' />
  }

 render() {
     console.table(this.props)
      const { isLoggedIn, authedUser } = this.props;
      const { PrivateRoute } = this;
      
   return (
   
   <Router>
                <div>
                    <h3 className="center header"> React App </h3>
                    <NavSys loggedInUser={authedUser} />
                    <hr />
                    <div className="container center">
                        <Switch>
                            <PrivateRoute exact path="/" component={PollResult} />
                            <PrivateRoute path="/question/:id" component={PollDetailQuestion} />
                            <Route path='/logout' render={() => { return this.logout(); }} />
                            <Route path='/login' render={() => isLoggedIn ? <Redirect to="/" /> : <Login />} />
                            <PrivateRoute path="/add" component={NewQuestion} />
                            <PrivateRoute path="/leaderboard" component={LeaderBoard} />
                            <Route component={NoDataFound} />
                        </Switch>
                    </div>
                </div>
            </Router>
   );
 }
}



function mapStateToProps(state) {
  const authedUser = state.authedUser ? state.authedUser : null;
  return{
    authedUser,
    isLoggedIn: !!authedUser
  }
}
export default connect(mapStateToProps)(App)
