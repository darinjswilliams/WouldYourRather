export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION"


export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
};