import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Card from "./Card";

class Stack extends Component {
    render()
    {
        const {title, cards} = this.props.stack;
        return (
            <div>
                <Link to='/'> Home</Link>
                <h3>
                    {title}
                </h3>
                <br />
                {
                    cards.map(card => {
                        return(
                            <Card key={card.id} card={card}/>
                        )

                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const {stack} = state;
    return {stack};
};

export default connect(mapStateToProps)(Stack);