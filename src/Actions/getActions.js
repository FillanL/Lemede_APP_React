import {GET_ALL_USERS} from './types'

export const getAllUsers = ()=>{
    fetch('http://localhost:3000/api/v1/users')
    .then(res=> res.json())
    .then(console.log)
}