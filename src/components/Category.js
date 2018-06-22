import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class Category extends Component {
    render() {
        return (
            <div>
                <Link className='link-home' to='/'>
                    <h4>
                        Home
                    </h4>
                </Link>
                <h2>
                    Category Title
                </h2>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const {category} = state;
    return {category};
};

export default connect(mapStateToProps, null)(Category);
