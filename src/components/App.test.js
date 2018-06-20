import React from 'react';
import {mount} from 'enzyme';
import App from './App';

describe("App", () => {
    let app = mount(<App/>);

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
    });

    describe("when creating a note", () => {
        let value = 'test note';

        beforeEach(() => {
            app.find('FormControl').simulate('change', {
                target: {value}
            })
        });

        afterEach(() => {
            app.find('#clearNotes').at(0).simulate('click');
        });

        it('should update the text in state', () => {
            expect(app.state().text).toEqual(value);
        });


        describe('and submitting a new note', () => {
            beforeEach(() => {
                console.log(app.find('#submitNotes'));
                app.find('#submitNotes').at(0).simulate('click');
            });

            it('should add the new note to state', () => {
                expect(app.state().notes[0]).toEqual(value)
            });

            describe('and remounting the component', () => {
                let app2;

                beforeEach(() => {
                    app2 = mount(<App />);
                });

                it('should have stored note cookies', () => {
                    expect(app2.state().notes).toEqual([value]);
                });

            });

            describe('and clicking the clear button', () => {

                beforeEach(() => {
                    app.find('#clearNotes').at(0).simulate('click')
                });

                it('should clear the notes in state', () => {
                    expect(app.state().notes).toEqual([])
                })
            })
        })
    })
});