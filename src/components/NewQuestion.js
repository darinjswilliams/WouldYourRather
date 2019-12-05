import React, { Component } from 'react';
import { connect } from 'react-redux';
import {saveQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {

    state = {
        questionA: "",
        questionB: "",
        homeBase: false
    }
    handleChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        this.setState((prevState) => ({...prevState, [name]: val}));
    }

    addQuestion = (e) => {
        e.preventDefault();
        const { questionA, questionB } = this.state;
        this.props.dispatch(saveQuestion(questionA, questionB, this.props.authedUser));
        this.setState({
            questionA: "",
            questionB: "",
            homeBase: true
        });
    }

    disabled = () => {
        return !(this.state.questionA && this.state.questionB);
    }

    render() {
        if (this.state.homeBase === true) {
            return <Redirect to='/' />
        }
        return (
            <form onSubmit={this.addQuestion} className='new-question'>
            <h3 className = "center header">New Question</h3>
                <div className="new-question-body">
                    <p>Answer Question</p>
                    <strong>Would you rather...</strong>
                    <input type="text" value={this.state.questionA} name="questionA" placeholder="Enter Question A Information" onChange={this.handleChange} />
                    <span className="border-center"> or </span>
                    <input type="text" value={this.state.questionB} name="questionB" placeholder="Enter Question B Information" onChange={this.handleChange} />
                    <button disabled={this.disabled()} className="btn" type="submit">Submit Answer</button>
                </div>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        authedUser: state.authedUser
    }
}
export default connect(mapStateToProps)(NewQuestion)