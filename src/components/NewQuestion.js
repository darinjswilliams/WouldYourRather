import React, { Component } from 'react';
import { connect } from 'react-redux';
import {saveQuestion } from '../actions/shared';
import { Redirect } from 'react-router-dom';

class NewQuestion extends Component {

    state = {
        optionOne: "",
        optionTwo: "",
        homeBase: false
    }
    handleChange = (e) => {
        const val = e.target.value;
        const name = e.target.name;
        this.setState((prevState) => ({...prevState, [name]: val}));
    }

    addQuestion = (e) => {
        e.preventDefault();
        const { optionOne, optionTwo } = this.state;
        this.props.dispatch(saveQuestion(optionOne, optionTwo, this.props.authUser));
        this.setState({
            optionOne: "",
            optionTwo: "",
            homeBase: true
        });
    }

    disabled = () => {
        return !(this.state.optionOne && this.state.optionTwo);
    }

    render() {
        if (this.state.homeBase === true) {
            return <Redirect to='/' />
        }
        return (
            <form onSubmit={this.addQuestion} className='new-question'><center>
            <h3 className = "center header">New Question</h3>
                <div className="new-question-body">
                    <p>Answer Question</p>
                    <strong>Would you rather...</strong><br />
                    <input type="text" size="70" value={this.state.optionOne} name="optionOne" placeholder="Enter Question A Information" onChange={this.handleChange} />
                    <span className="border-center"> or </span>
                    <input type="text" size ="70" value={this.state.optionTwo} name="optionTwo" placeholder="Enter Question B Information" onChange={this.handleChange} />
                    <button disabled={this.disabled()} className="btn" type="submit">Submit Answer</button>
                </div></center>
            </form>
        )
    }
}

function mapStateToProps(state){
    return {
        authUser: state.authUser
    }
}
export default connect(mapStateToProps)(NewQuestion)