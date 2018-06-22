import React from 'react';
import {shallow} from 'enzyme';
import App from './App';

describe('App', () => {
    const app = shallow(<App />);
    it('renders the `FlashCard Pro` title', () => {
        expect(app.find('h2').text()).toEqual('FlashCard Pro')
    })
});