import React from 'react';
import {shallow} from 'enzyme';
import {StackForm} from './StackForm';

const changeTitle = 'change title';
const changePrompt = 'change prompt';
const changeAnswer = 'change answer';

describe("StackForm", () => {

    const stack = shallow(<StackForm />);

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
            stack.find('FormControl').simulate('change', { target: { value: changeTitle}})
        });

        it("should update the title in state as a result", () => {
            expect(stack.state().title).toEqual(changeTitle);
        });
    });

    describe("when adding a new card", () => {
        beforeEach(() => {
            stack.find('Button').at(0).simulate('click');
        });

        afterEach(() => {
           stack.setState({cards: []});
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

        describe("And updating the card prompt", () => {
            beforeEach(() => {
                stack.find('FormControl').at(1).simulate('change', {target: {value: changePrompt}});
            });

            it("should update the prompt in the state", () => {
                expect(stack.state().cards[0].prompt).toEqual(changePrompt)
            });
        });

        describe("And updating the card prompt", () => {
            beforeEach(() => {
                stack.find('FormControl').at(2).simulate('change', {target: {value: changeAnswer}});
            });

            it("should update the prompt in the state", () => {
                expect(stack.state().cards[0].answer).toEqual(changeAnswer)
            });
        });
    });
});