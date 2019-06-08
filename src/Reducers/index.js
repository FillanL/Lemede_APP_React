import { combineReducers } from 'redux';
import campaignsReducer from './campaignsReducer';

export default combineReducers({
    campaigns: campaignsReducer
})