import React, { Component } from 'react'

class Comments extends Component {
    

    render () {
        if (this.props.on) {
        return (
            <textarea></textarea>
        )
    } else {
        return null
    }
    }
}

export default Comments