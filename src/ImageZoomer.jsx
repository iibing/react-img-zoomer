import React, {PropTypes} from 'react'

const defaultProps = {
    img: PropTypes.instanceOf({src: '', id: PropTypes.string}).isRequired,
    zoomer: PropTypes.instanceOf({})
    zoomedImg: PropTypes.instanceOf({id: '', , position:'right'}),
}
const propTypes = {
    img: PropTypes.instanceOf({src: PropTypes.string.isRequired, id: PropTypes.string, className: PropTypes.string}).isRequired,
    zoomer: PropTypes.instanceOf({})
    zoomedImg: PropTypes.instanceOf({id: PropTypes.string, className: PropTypes.string, position:PropTypes.string}),
}

class ImageZoomer extends React.Component {
    constructor(props) {
        super(props)
        this.drawImage = this.drawImage.bind(this)
    }
    shouldComponentUpdate(nextProps) {
        return nextProps.img.src !== this.props.img.src
    }
    componentDidMount() {
        this.drawImage()
    }
    componentDidUpdate() {
        this.drawImage()
    }
    
    drawImage() {
        let canvas = this.refs.imgCanvas
        let rectObject = canvas.getBoundingClientRect()
        let zoomedCanvas = this.refs.zoomedCanvas
        let ctx = canvas.getContext('2d')
        let zoomedCtx = zoomedCanvas.getContext('2d')
        let img = new Image()
        img.src = this.props.img.src
        img.onload = () => {
            ctx.drawImage(img, 0, 0, 200, 200)
        }

        canvas.onmousemove = (e) => this.mounseMove(img, ctx, rectObject, zoomedCtx, zoomedCanvas)
        canvas.onmouseleave = () => this.mounseLeave(img, canvas, ctx, zoomedCtx)
    }

    mounseMove(img, ctx, rectObject, zoomedCtx, zoomedCanvas) {
        ctx.clearRect(0, 0, 200, 200)
        ctx.drawImage(img, 0, 0, 200, 200)
        let event = window.event
        let x = event.clientX - rectObject.left
        let y = event.clientY - rectObject.top
        zoomedCtx.clearRect(0, 0, zoomedCanvas.width, zoomedCanvas.height)
        zoomedCtx.drawImage(img, x - 30, y - 30, 60, 60, 0, 0, 200, 200)
        ctx.fillStyle = 'rgba(255,165,0,0.5)'
        ctx.fillRect(x - 25, y - 25, 50, 50)
    }

    mounseLeave(img, canvas, ctx, zoomedCtx) {
        ctx.clearRect(0, 0, 200, 200)
        ctx.drawImage(img, 0, 0, 200, 200)
        zoomedCtx.clearRect(0, 0, 200, 200)
    }

    render() {
        const {img, zoomedImg} = this.props
        const imgCanvas = <canvas id={img.id} className={img.className} ref="imgCanvas"/>
        const zoomedCanvas = <canvas id={zoomedImg.id} className={'zoomedCanvas'} ref="zoomedCanvas"/>
        return (
            <div>
                {imgCanvas}
                {zoomedCanvas}
            </div>
        )
    }
}

ImageZoomer.defaultProps = defaultProps
ImageZoomer.propTypes = propTypes

export default ImageZoomer
