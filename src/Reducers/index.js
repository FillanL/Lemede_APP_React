import { combineReducers } from 'redux';
import campaignsReducer from './campaignsReducer';
import userReducer from './userReducer';

export default combineReducers({
    campaigns: campaignsReducer,
    user: userReducer
})