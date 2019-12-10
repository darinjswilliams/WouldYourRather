export const SET_AUTHED_USER = "SET_AUTHED_USER"


export function setAuthUser(authUser) {
    return {
        type : SET_AUTHED_USER,
        authUser
    }
}