import React from 'react';
import {mount} from 'enzyme';
import {Category} from './Category';
import {categories, clues} from "../data/fixtures/fixtures";
import {MemoryRouter} from 'react-router-dom';
import {fakeServer} from 'sinon';

const props = {category: categories[0]};

describe("category", () => {
    let server;
    beforeEach(() => {
        server = fakeServer.create();

        server.respondWith(
            'GET',
            `http://jservice.io/api/clues?category=${props.category.id}`,
            [
                200,
                {'Content-Type': 'application/json'},
                JSON.stringify(clues)
            ]
        )
    });

    describe('when creating a new category', () => {
        let category;
        let wrapper;

        beforeEach((done) => {
            wrapper = mount(
                <MemoryRouter>
                    <Category {...props}/>
                </MemoryRouter>
            );
            category = wrapper.find(Category).instance();

            server.respond();

            setTimeout(done);

        });

        it('should create the link to navigate home', () => {
            expect(wrapper.find('Link h4').text()).toEqual('Home');
        });

        it('should initialize the clues in state', () => {
            expect(category.state.clues).toEqual(clues);
        });

        it('renders the category title', () => {
            expect(wrapper.find('h2').text()).toEqual(props.category.title);
        });

        it('renders the correct number of clues', () => {
            wrapper.update();
            expect(wrapper.find('Clue').length).toEqual(clues.length);
        });

    });
});
