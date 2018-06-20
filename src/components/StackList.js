import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {setStack, loadStacks} from '../actions';

class StackList extends Component {

    componentDidMount() {
        const {stacks, loadStacks} = this.props;
        if (stacks.length === 0) {
            loadStacks(stacks)
        }
    }

    render() {
        return (
            <div>
                {
                    this.props.stacks.map(stack => {
                        return (
                            <Link
                                to='/stack'
                                key={stack.id}
                                onClick={() => this.props.setStack(stack)}
                            >
                                <h4>{stack.title}</h4>
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {stacks: state.stacks};
};


export default connect(mapStateToProps, {setStack, loadStacks})(StackList);