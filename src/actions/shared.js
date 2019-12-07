import {showLoading, hideLoading } from 'react-redux-loading'
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'
import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const GET_INITIAL_DATA = "GET_INITIAL_DATA";


export function getInitialData() {
    return (dispatch) => {
        dispatch(showLoading())
        return Promise.all([
            _getUsers(),
            _getQuestions()]
        ).then(([users, questions ]) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
                dispatch(hideLoading())
            });
    }
}

export function saveAnswer(username, questionId, answerId) {
    return (dispatch) => {
        //TO ADD SHOWLOADING
        dispatch(showLoading())
        _saveQuestionAnswer(username, questionId, answerId).then(
            answer => {
                dispatch(receiveAnswer(username, questionId, answerId))
                dispatch(hideLoading())
            }); 
    }
}

export function saveQuestion(optionOneText, optionTwoText, author) {
    return (dispatch) => {
        //todo showloading and hideloading
        dispatch(showLoading())
        _saveQuestion({ optionOneText, optionTwoText, author}).then(
            question => {
                dispatch(receiveQuestion(question));
                dispatch(hideLoading())
            }
        );
    }
}

export function receiveAnswer(username, questionId, answer){
    return {
        type: RECEIVE_ANSWER,
        username,
        questionId,
        answer
    }
}

export function receiveQuestion(question) {
    return {
        type: RECEIVE_QUESTION,
        question
    }
}

