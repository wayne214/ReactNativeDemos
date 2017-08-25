import {combineReducers} from 'redux';
import login from './login';
import contact from './contact';

const reducers = combineReducers({
    login,
    contact,
});

export default reducers;