import React from 'react';
import * as actions from './index';
import {categories} from "../data/fixtures/fixtures";
import {PICK_CATEGORY, SET_CATEGORIES} from "./types";


describe("actions", () => {

    it('should create an action to set categories', () => {
        const expectedAction = {
            type: SET_CATEGORIES,
            categories
        };
        expect(actions.setCategories(categories)).toEqual(expectedAction)
    });

    it('should create an action to pick a category', () => {
        const category = categories[0];
        const expectedAction = {
            type: PICK_CATEGORY,
            category
        };

        expect(actions.pickCategory(category)).toEqual(expectedAction);
    })


});