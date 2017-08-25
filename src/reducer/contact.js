
import *as types from '../constants/actionType';


const init = {
    msg:{},
    userList: []

}

const contacts = (state = init, action) => {

    switch (action.type) {
        case types.REQUEST_FETCH:
            return {...state}
        case types.RECEIVE_FETCH:
            return {...state, msg: action.payload}

        case types.GET_CTS_SUCCESS:
            return {...state, userList: action.payload}

        case types.GET_CTS_FAIL:
            return {...state}


        default:
            return state
    }
}

export  default  contacts