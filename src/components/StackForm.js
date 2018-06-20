import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';

class StackForm extends Component {
    constructor(props) {
        super(props);
        this.addCard = this.addCard.bind(this);
        this.updateCard = this.updateCard.bind(this);
        this.addStack = this.addStack.bind(this);
    }

    state = {
        title: '',
        cards: []
    };

    addCard() {
        const newCard = {id: this.state.cards.length, prompt: '', answer: ''};

        this.setState({cards: [...this.state.cards, newCard]});

    }

    updateCard(value, index, field)
    {
        let items = [...this.state.cards];
        items[index][field] = value;
        this.setState({cards: items})
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
                        <FormControl onChange={event => this.setState({title: event.target.value})}/>
                    </FormGroup>
                    {
                        this.state.cards.map((card, index) => {
                            return (
                                <div key={card.id}>
                                    <br/>
                                    <FormGroup>
                                        <ControlLabel>
                                            Prompt:
                                        </ControlLabel>
                                        {' '}
                                        <FormControl
                                            onChange={(event) => this.updateCard(event.target.value, index, 'prompt')}
                                        />
                                        {' '}
                                        <ControlLabel>
                                            Answer
                                        </ControlLabel>
                                        <FormControl
                                            onChange={(event) => this.updateCard(event.target.value, index, 'answer')}
                                        />
                                    </FormGroup>

                                </div>
                            )
                        })
                    }
                </Form>
                <br/>
                <Button onClick={this.addCard}>
                    Add Card
                </Button>
                {" "}
                <Button onClick={() => this.addStack}> Save Stack</Button>
            </div>
        )
    }
}

export default StackForm;