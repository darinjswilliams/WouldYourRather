import React, { Component } from 'react'
import { connect } from 'react-redux';
import  CurrentLeader  from './CurrentLeader';

class LeaderBoard extends Component {


    render() {

        return (
            <div className='leaderboard'>{
               this.props.ids.map(id => <CurrentLeader  key={id} id={id} />)
            }</div>
        )
    }
}

function mapStateToProps(state) {
    const users = Object.keys(state.users);
    return {
        ids: users
             .sort((a, b) => (Object.keys(state.users[b].answers).length + state.users[b].questions.length) -
                       (Object.keys(state.users[a].answers).length + state.users[a].questions.length) )
    }
}

export default connect(mapStateToProps)(LeaderBoard);