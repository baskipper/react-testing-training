import React, {Component} from 'react';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
    state = {text: '', notes: []};

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit() {
        const {notes, text} = this.state;
        this.setState({
            notes: [...notes, text]
        })
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
                            <div key={index}>{note}</div>
                        )
                    })
                }
            </div>
        )
    }
}

export default App;