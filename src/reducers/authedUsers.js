import  { SET_AUTHED_USER } from '../actions/authedUsers'

export function authUser (state = null, action) {
    switch ( action.type) {
        case SET_AUTHED_USER:
            return action.authUser
        default:
            return state
    }
}