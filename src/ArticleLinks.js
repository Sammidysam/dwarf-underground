import React, { Component } from 'react'

import Comments from './Comments'

class ArticleLinks extends Component {
  constructor () {
    super()

    this.state = {
        on: false
    }
}

toggleComments() {
    this.setState({ on: !this.state.on })
}

    render () {
        return (
            <div className="article-links">
            <a className="article-link" onClick={() => this.toggleComments()}>
              <i className="fa fa-comments-o"></i>
              <span className="article-link-text">Comments</span>
            </a>
            <a className="article-link" href="#">
              <i className="fa fa-share"></i>
              <span className="article-link-text">Share Post</span>
            </a>

            <Comments on={this.state.on} />
          </div>
        )
    }
}

export default ArticleLinks