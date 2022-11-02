import React from 'react'

export class Welcome extends React.Component {
    render () {
        return <p>Welcome, {this.props.name}</p>
    }
}

// Setting default value for props
Welcome.defaultProps = {
    name: 'User'
};

