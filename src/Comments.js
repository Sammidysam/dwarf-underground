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

        comments.push({
            text: form.comment.value,
            time: Date.now()
        })

        this.setState({ comments })

        form.reset()
        form.comment.focus()
    }

    render () {
        if (this.props.on) {
        return (
            <div className="comments">
            <ul>
                {this.state.comments.map(comment => <li>{comment.text} at {new Intl.DateTimeFormat('en-GB', { 
    year: 'numeric', 
    month: 'long', 
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
}).format(comment.time)}</li>)}
                </ul>

            <form onSubmit={this.addComment}>
            <textarea name="comment"></textarea>
            <button type="submit">Submit</button>
            </form>
            </div>
        )
    } else {
        return null
    }
    }
}

export default Comments