import React from 'react';
import {shallow} from 'enzyme';
import Clue from './Clue';
import {clue} from "../data/fixtures/fixtures";

const props = clue;

describe("clue", () => {
    const clue = shallow(<Clue {...props}/>);

    it('renders the clue value', () => {
        expect(clue.find('h4').text()).toEqual(props.clue.value.toString());
    });

    it('renders the clue question', () => {
        expect(clue.find('h5').at(0).text()).toEqual(props.clue.question);
    });

    it('renders the clue answer', () => {
        expect(clue.find('h5').at(1).text()).toEqual(props.clue.answer);
    });

    it('sets the answer with the `text-hidden` class', () => {
        expect(clue.find('h5').at(1).hasClass('text-hidden')).toBe(true);
    });

    it('initializes the reveal state to be false', () => {
        expect(clue.state().reveal).toBe(false);
    })

});