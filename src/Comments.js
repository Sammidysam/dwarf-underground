import React, { Component } from 'react'

class Comments extends Component {
    constructor () {
        super()

        this.state = {
            comments: []
        }

        this.addComment = this.addComment.bind(this)
    }

    addComment(event) {
        const form = event.target
        event.preventDefault()

        const comments = [...this.state.comments]

        comments.push(form.comment.value)

        this.setState({ comments })

        form.reset()
        form.comment.focus()
    }

    render () {
        if (this.props.on) {
        return (
            <form onSubmit={this.addComment}>
            <textarea name="comment"></textarea>
            <button type="submit">Submit</button>
            </form>
        )
    } else {
        return null
    }
    }
}

export default Comments