import React, { Component } from 'react'

import Article from './Article'
import Advertisement from './Advertisement'
import Other from './Other'

class Main extends Component {
    constructor() {
        super()

        this.state = {
            otherArticles: [
                {
                    text: "Single Orcs in Indianapolis",
                    imgsrc: "https://www.enclavepublishing.com/wp-content/uploads/2015/11/tumblr_inline_mtvwr6T4qH1r8eb4v.gif",
                    imgalt: "orc"
                },
                {
                    text: "You won't believe what's under this mountain",
                    imgsrc: "https://images.fineartamerica.com/images-medium-large-5/rocky-mountain-landscape-meadow-in-spring-western-panorama-with-wildflowers-square-format-walt-curlee.jpg",
                    imgalt: "mountain"
                },
                {
                    text: "Mine 20% more gold with One Weird Trick",
                    imgsrc: "http://orig01.deviantart.net/a278/f/2010/357/9/7/seamless___gold_coins_by_bartalon-d35iydr.jpg",
                    imgalt: "gold"
                },
                {
                    text: "Surprise for Indiana Hobbits born before 1999",
                    imgsrc: "http://cdn23.us1.fansshare.com/photos/thehobbit/the-hobbit-square-characters-833282558.jpg",
                    imgalt: "hobbit"
                }
            ]
        }
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