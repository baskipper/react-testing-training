import {} from 'react-redux';
import {SET_STACK} from "../actions/types";

const INITIAL_STATE = {};

export const stack = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_STACK:
            return {...state, stack: action.stack};
        default:
            return state;
    }
};