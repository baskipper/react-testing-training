import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe("App", () => {
    let app = mount(<App />);

    it("should render the app title", () => {
        expect(app.find('h2').text()).toEqual('Note to Self');
    });

    it('should render the clear button', () => {
        expect(app.find('.btn').at(1).text()).toEqual('Clear Notes')
    });

    describe("when rendering the form", () => {

        it('should create a Form component', () => {
            expect(app.find('Form').exists()).toBe(true);
        });

        it('should create a FormControl component', () => {
            expect(app.find('FormControl').exists()).toBe(true);
        });

        it('should create a submit Button', () => {
            expect(app.find('.btn').at(0).text()).toEqual('Submit');
        });
    })
});