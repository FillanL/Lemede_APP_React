import {GET_ALL_USERS, VIEW_USER} from './types'

export const getAllUsers = ()=> dispatch=>{
    fetch('http://localhost:3000/api/v1/users')
    .then(res=> res.json())
    .then(users => dispatch({
        type:GET_ALL_USERS,
        payload:users
    }))
}

export const handleProfileClicked=(useId)=>dispatch=>{
dispatch({
    type: VIEW_USER,
    payload:useId
})
}