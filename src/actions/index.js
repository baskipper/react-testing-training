import {} from 'react-redux';
import {SET_STACK} from "./types";

export const setStack = (stack) => {
    return {
        type: SET_STACK,
        stack
    };
};

