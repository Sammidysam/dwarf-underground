import React, { Component } from 'react'

import Article from './Article'
import Advertisement from './Advertisement'
import Other from './Other'

import articles from './articles.json'

class Main extends Component {
    constructor() {
        super()

        this.state = articles
    }

    render () {
        return (
            <main className="expanded row">
        <Article />
        
        <Advertisement />

        <div className="small-12 columns other-articles">
          <h2>From around the Realm</h2>

          {this.state.otherArticles.map(article => <Other text={article.text} imgsrc={article.imgsrc} imgalt={article.imgalt} />)}
        </div>
      </main>
        )
    }
}

export default Main