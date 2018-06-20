import {combineReducers} from 'redux';
import {SET_STACK, LOAD_STACKS} from "../actions/types";

const INITIAL_STATE = {};

const stack = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_STACK:
            return {...state, stack: action.stack};
        default:
            return state;
    }
};

const stacks = (state = [], action) => {
    switch (action.type) {
        case LOAD_STACKS:
            return action.stacks;
        default:
            return state
    }
};

export default combineReducers({stack, stacks});
