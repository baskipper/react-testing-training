import React from 'react';
import rootReducer from './index';
import {categories} from "../data/fixtures/fixtures";
import {PICK_CATEGORY, SET_CATEGORIES} from "../actions/types";


describe("root reducer", () => {
    const category = categories[0];

    it('should set the initial state', () => {
        const initialState = {categories: [], category: {}};

        expect(rootReducer({}, {})).toEqual(initialState)
    });

    it('should set categories', () => {
        expect(rootReducer({}, {type: SET_CATEGORIES, categories})).toEqual({categories, category: {}})
    })

    it('should pick a category', () => {
        expect(rootReducer({}, {type: PICK_CATEGORY, category})).toEqual({categories: [], category})
    })


});