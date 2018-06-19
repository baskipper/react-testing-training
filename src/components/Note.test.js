import React from 'react';
import {mount} from 'enzyme';
import Note from './Note';

describe("Note", () => {

    const testNote = 'test note';
    const props = {note: testNote};
    let note = mount(<Note {...props} />);

    it("should render the note text", () => {
        expect(note.find('p').text()).toEqual(props.note);
    })
});