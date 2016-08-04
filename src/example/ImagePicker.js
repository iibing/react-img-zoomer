import React from 'react'

class ImagePicker extends React.Component {
    constructor(props) {
        super(props)    
    }
    
    changeImage(image) {
        this.props.changeImage(image)
    }
    render() {
        return (
            <div>
                <ul className='imagePickerList'>
                    {this.props.images.map(image => <li key={image}><img src={image} onClick={()=>this.changeImage(image)}></img></li>)}  
                </ul>      
            </div>
        )
    }
}

export default ImagePicker
