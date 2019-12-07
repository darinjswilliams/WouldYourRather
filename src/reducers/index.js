import { users } from './users';
import { questions } from './questions';
import { authUser } from './authedUsers';
import { combineReducers } from 'redux';

export default combineReducers({
    users,
    questions,
    authUser
});