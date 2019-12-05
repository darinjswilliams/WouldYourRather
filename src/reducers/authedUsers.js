import  { SET_AUTHED_USER } from '../actions/authedUsers'

export function authedUser (state = null, action) {
    switch ( action.type) {
        case SET_AUTHED_USER:
            return action.authedUser
        default:
            return state
    }
}