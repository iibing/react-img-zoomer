## React Image Zoomer  

A React component using `canvas` to zoom image. 


### How to use

```
import ImageZoomer from 'react-image-zoomer'

const mainImage = {
    id: 'mainImage',
    src: this.state.mainImage,
    className: 'mainCanvas',
    width: '400px',
    height: '200px'
}
const zoomer = {
    height: 70,
    width: 70,
    style: 'rgba(255,165,0,0.3)'
}
const zoomedImage = {
    id: 'zoomedImage',
    className: 'zoomedCanvas',
    postion: 'right',
    width: '500px',
    height: '500px'
}


<div>
    <ImageZoomer 
        className='imageZoomer' 
        mainImage={mainImage} 
        zoomedImage={zoomedImage} 
        zoomer={zoomer}>
         Gallery
    </ImageZoomer>,
</div>

```
