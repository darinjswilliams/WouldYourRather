import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { _getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../utils/_DATA'

export const RECEIVE_ANSWER = "RECEIVE_ANSWER";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const GET_INITIAL_DATA = "GET_INITIAL_DATA";


export function getInitialData() {
    return (dispatch) => {
        return Promise.all([
            _getUsers(),
            _getQuestions()]
        ).then(([users, questions ]) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions));
            })
    }
}

export function saveAnswer(authedUserId, questionId, answerId) {
    return (dispatch) => {
        //TO ADD SHOWLOADING
        console.log("saveAnswer");
        console.log(authedUserId);
        console.log(questionId);
        console.log(answerId);
        _saveQuestionAnswer(authedUserId, questionId, answerId).then(
            answer => {
                dispatch(receiveAnswer(authedUserId, questionId, answerId))
            }); 
    }
}

export function saveQuestion(textQuestionOne, textQuestionTwo, author) {
    return (dispatch) => {
        //todo showloading and hideloading
        _saveQuestion({ textQuestionOne, textQuestionTwo, author}).then(
            question => {
                dispatch(receiveQuestion(question));
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

