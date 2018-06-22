import React from 'react';
import {shallow} from 'enzyme';
import {StackList} from './StackList';
import { stacks } from '../data/fixtures'

const props = {stacks};

describe("StackList", () => {
    const stack = shallow(<StackList {...props} />);

    it("should render the correct number of links", () => {
        expect(stack.find('Link').length).toEqual(props.stacks.length);
    });
});