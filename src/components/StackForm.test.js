import React from 'react';
import {shallow} from 'enzyme';
import {StackForm} from './StackForm';
import { stacks } from '../data/fixtures'

const props = {stacks};

describe("StackForm", () => {

    const stack = shallow(<StackForm {...props} />);

    it("should render the form title", () => {
        expect(stack.find('h4').at(1).text()).toEqual('Create a New Stack');
    });

    it("should render a link Home", () => {
        expect(stack.find('h4').at(0).text()).toEqual('Home');
    });

    it("should render a form component", () => {
        expect(stack.find('Form').exists()).toBe(true);
    });

    it("should render a button to add a new card", () => {
        expect(stack.find('Button').at(0).props().children).toEqual('Add Card');
    });

    it("should render a button to submit the form", () => {
        expect(stack.find('Button').at(1).props().children).toEqual('Save Stack');
    });

    describe("and updating the title", () => {

        beforeEach(() => {
            stack.find('FormControl').simulate('change', { target: { value: 'change title'}})
        });

        it("should update the title in state as a result", () => {
            expect(stack.state().title).toEqual('change title');
        });
    });

    describe("when adding a new card", () => {
        beforeEach(() => {
            stack.find('Button').at(0).simulate('click');
        });

        it('should add a new card to the state', () => {
            expect(stack.state().cards.length).toEqual(1);
        });

        it("should render the prompt section", () => {
            expect(stack.find('ControlLabel').at(1).props().children).toEqual('Prompt:')
        });
        it("should render the answer section", () => {
            expect(stack.find('ControlLabel').at(2).props().children).toEqual('Answer:')
        });

    });

    it("should", () => {

    });
    it("should", () => {

    });
    it("should", () => {

    });
    it("should", () => {

    });

});