import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';
import {bake_cookie, read_cookie, delete_cookie} from 'sfcookies';
import Note from './Note';

const cookie_key = "NOTES";

class App extends Component {
    state = {text: '', notes: []};

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.clear = this.clear.bind(this);
    }

    componentDidMount(){
        const notes = read_cookie(cookie_key);

        this.setState({notes});
    }

    submit() {
        const {notes, text} = this.state;
        this.setState({
            notes: [...notes, text]
        },() =>{ bake_cookie(cookie_key, this.state.notes)});


    }
    clear() {
        delete_cookie(cookie_key);
        this.setState({notes: []});
    }

    render() {
        return (
            <div>
                <h2>Note to Self</h2>
                <Form inline>
                    <FormControl onChange={event => {
                        this.setState({text: event.target.value})
                    }}/>
                    <Button onClick={this.submit}>Submit</Button>
                </Form>
                {
                    this.state.notes.map((note, index) => {
                        return (
                            <Note key={index} note={note}/>
                        )
                    })
                }
                <hr />
                <Button onClick={this.clear}>Clear Notes</Button>
            </div>
        )
    }
}

export default App;