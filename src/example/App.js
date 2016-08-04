import React from 'react'
import {render} from 'react-dom'

import ImageZoomer from '../ImageZoomer'
import ImagePicker from './ImagePicker'

let images = []
for (let i = 1; i < 9; i++) {
    images.push(`http://kingofwallpapers.com/wallpaper-hd/wallpaper-hd-00${i}.jpg`)
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mainImage: images[0]
        }
        this.changeImage = this.changeImage.bind(this)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return this.state.mainImage !== nextState.mainImage
    }
    changeImage(image) {
        this.setState({mainImage: image})
    }

    render() {

        const mainImage = {
            id: 'mainImage',
            src: this.state.mainImage,
            className: 'mainCanvas',
            width: '400px',
            height: '200px'
        }
        const zoomer = {
            height: 80,
            width: 80,
            style: 'rgba(255,165,0,0.3)'
        }
        const zoomedImage = {
            id: 'zoomedImage',
            className: 'zoomedCanvas',
            width: '450px',
            height: '450px'
        }

        return (
            <div>
                <ImageZoomer className='imageZoomer' mainImage={mainImage} zoomedImage={zoomedImage} zoomer={zoomer}>
                    Nature Gallery
                    <ImagePicker images={images} changeImage={this.changeImage}/>
                </ImageZoomer>
            </div>
        )
    }
}

render(
    <App/>, document.getElementById('root'))
