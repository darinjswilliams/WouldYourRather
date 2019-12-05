import {
    _getUsers,
    _getQuestions,
    _saveQuestion,
    _saveQuestionAnswer,
  } from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }
  
  export function answerQuestion (info) {
    return _saveQuestionAnswer(info)
  }
  
  export function newQuestion (info) {
    return _saveQuestion(info)
  }