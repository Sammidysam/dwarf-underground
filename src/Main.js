import React, { Component } from 'react'

import Article from './Article'
import Advertisement from './Advertisement'
import Other from './Other'

class Main extends Component {
    render () {
        return (
            <main className="expanded row">
        <Article />
        
        <Advertisement />

        <Other />
      </main>
        )
    }
}

export default Main