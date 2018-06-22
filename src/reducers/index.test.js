import rootReducer from '../reducers';
import * as types from '../actions/types';

import {stack, stacks} from '../data/fixtures';

describe('root reducer', () => {

    const INITIAL_STATE = {
        stack: {},
        stacks: []
    };

    it('should return the initial state', () => {
        expect(rootReducer({}, {})).toEqual(INITIAL_STATE)
    });

    it('should set the main stack', () => {
        expect(rootReducer({}, {type: types.SET_STACK, stack}).stack).toEqual({stack});
    });

    it('should load stacks', () => {
        expect(rootReducer({}, {type: types.LOAD_STACKS, stacks})).toEqual({stack: {}, stacks});
    });

    it('should add a stack', () => {
        expect(rootReducer({}, {type: types.ADD_STACK, stack}))
            .toEqual({stack: {}, stacks: [stack]});
    })

});
