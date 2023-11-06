import React from 'react';
import PropTypes from 'prop-types';

class Student extends React.Component {
    static defaultProps = {
        id: "101331074",
        name: "Oluwatobi Hajarat Giwa",
        school: "George Brown College, Toronto"
    }
    
    render() {
        return (
            <>
                <h3>{this.props.id}</h3>
                <h4>{this.props.name}</h4>
                <h5>{this.props.school}</h5>
            </>
        )
    }
}

Student.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
}

export default Student