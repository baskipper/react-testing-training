import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class StackForm extends Component {
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this);
    }

    state = {
        title: '',
        cards: []
    };

    addCard() {
        console.log('add card');
        console.log(this.state);
        const newCard = {id: this.state.cards.length, prompt: '', answer: ''};

        console.log(this.state);
        this.setState({cards: [...this.state.cards, newCard]});

    }

    render() {
        return (
            <div>
                <Link className='link-home' to='/'>
                    <h4>
                        Home
                    </h4>
                </Link>
                <h4>
                    Create a New Stack
                </h4>
                <br/>
                <Form inline>
                    <FormGroup>
                        <ControlLabel>
                            Title:
                        </ControlLabel>
                        <br/>
                        <FormControl/>
                    </FormGroup>
                </Form>
                <br/>
                <Button onClick={this.addCard}>
                    Add Card
                </Button>
            </div>
        )
    }
}

export default StackForm;