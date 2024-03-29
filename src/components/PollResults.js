import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class PollResult extends Component {
    state = {
        setToAnswered: false
    }

    setToAnswered = () => {
        this.setState({ setToAnswered: true });
    }

    setToUnAnswered = () => {
        this.setState({ setToAnswered: false });
    }

    render() {

        return (<div>
            <div style={{ display: "flex" }}>
                <a href className={!this.state.setToAnswered ? "btn active" : "btn"} onClick={this.setToUnAnswered}>Unanswered Questions </a>
                <a href className={this.state.setToAnswered ? "btn active" : "btn"} onClick={this.setToAnswered}>Answered Questions </a>
            </div>
            <ul className="questions">
                {this.state.setToAnswered && this.props.answered
                    .map(id =>
                        <li key={id}> <Question key={id} id={id} /> </li>

                    )
                }
                {!this.state.setToAnswered && this.props.unanswered
                    .map(id =>
                        <li key={id}> <Question key={id} id={id} /> </li>

                    )
                }
            </ul></div>);
    }
}

function mapStateToProps(state) {
    const user = state.users[state.authUser];

    const answered = [...Object.keys(user.answers)]
        .sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp);
    const unanswered = [...Object.keys(state.questions)
        .filter(question => answered.indexOf(question) < 0)]
        .sort((a, b) => state.questions[b].timestamp - state.questions[a].timestamp);

    return {
        answered: answered,
        unanswered: unanswered
    }
}

export default connect(mapStateToProps)(PollResult);