import React, {Component} from 'react';

class Note extends Component {
    render() {
        const {note} = this.props;
        return (
            <div style={styles.noteStyle}>
                <p>
                    {note}
                </p>
            </div>
        )
    }
}

const styles= {
    noteStyle:{
        border: '1px solid',
        borderColor: 'lightgray',
        borderRadius: '5px',
        fontStyle: 'italic',
        textAlign: 'left',
        padding: '8px',
        margin: '30px'
    }
};

export default Note;