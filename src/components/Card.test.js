import React from 'react';
import {shallow} from 'enzyme';
import Card from './Card';

const props = {card: {prompt: 'test prompt', answer: 'test answer'}};

describe('Card', () => {
    const card = shallow(<Card {...props} />);

    it("should set `reveal` to be `false`", () => {
        expect(card.state().reveal).toBe(false);
    });

    it("should render the card prompt", () => {
        expect(card.find('.card-prompt h4').text()).toEqual(props.card.prompt)
    });

    it("should render the card answer", () => {
        expect(card.find('.card-answer h4').text()).toEqual(props.card.answer)
    });

    it("should apply the `text-hidden` class to the card answer", () => {
        expect(card.find('.card-answer h4').hasClass('text-hidden')).toBe(true)
    });

    describe("when clicking on the card", () => {
        beforeEach(() => {
            card.simulate('click')
        });
        it("should update `reveal` to be `true`", () => {
            expect(card.state().reveal).toBe(true)
        });

        it("should apply the `text-revealed` class to the card answer", () => {
            expect(card.find('.card-answer h4').hasClass('text-revealed')).toBe(true)
        });

    });
});