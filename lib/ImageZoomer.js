import React, {PropTypes} from 'react'

const defaultProps = {
    mainImage: {
        src: '',
        width: '200px',
        height: '100px'
        
    },
    zoomer: {
        height: 50,
        width: 50,
        style: 'rgba(255,165,0,0.5)'
    },
    zoomedImage: {
        postion: 'right',
        width: '400px',
        height: '400px'
    }
}

const propTypes = {
    mainImage: PropTypes.shape({src: PropTypes.string.isRequired, id: PropTypes.string.isRequired, className: PropTypes.string,width:PropTypes.string,height:PropTypes.string}).isRequired,
    zoomer: PropTypes.shape({height: PropTypes.number, width: PropTypes.number, style: PropTypes.string}),
    zoomedImage: PropTypes.shape({id: PropTypes.string.isRequird, className: PropTypes.string, position: PropTypes.string,width:PropTypes.string,height:PropTypes.string})
}

class ImageZoomer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showZoomedCanvas: false
        }
        this.drawImage = this.drawImage.bind(this)
    }

    componentDidMount() {
        this.drawImage()
    }

    componentDidUpdate() {
        this.drawImage()
    }

    drawImage() {
        let mainImageCanvas = this.refs[this.props.mainImage.id]
        const mainCanvasWidth = mainImageCanvas.width
        const mainCanvasHeight = mainImageCanvas.height

        // get the absolute postion of the canvas
        const rectObject = mainImageCanvas.getBoundingClientRect()
        const mainCanvasLeftOffset = rectObject.left
        const mainCanvasTopOffset = rectObject.top

        let zoomedCanvas = this.refs[this.props.zoomedImage.id]
        const zoomedCanvasWidth = zoomedCanvas.width
        const zoomedCanvasHeight = zoomedCanvas.height

        const zoomerWidth = this.props.zoomer.width
        const zoomerHeight = this.props.zoomer.height

        let mainContext = mainImageCanvas.getContext('2d')
        let zoomedContext = zoomedCanvas.getContext('2d')

        let mainImg = new Image()
        mainImg.src = this.props.mainImage.src

        mainImg.onload = () => {
            mainContext.drawImage(mainImg, 0, 0, mainCanvasWidth, mainCanvasHeight)
        }

        const widthRadio = mainImg.width / mainCanvasWidth
        const heightRadio = mainImg.height / mainCanvasHeight
        let self = this
        mainImageCanvas.onmousemove = (e) => {
            const mounseXCoord = e.clientX - mainCanvasLeftOffset
            const mounseYCoord = e.clientY - mainCanvasTopOffset
            this.drawImageOnCanvas(mainImg, mainContext, mainCanvasWidth, mainCanvasHeight)
            const rectCoord = this.getRectCord(mounseXCoord, mounseYCoord, mainCanvasWidth, mainCanvasHeight, zoomerWidth, zoomerHeight)
            this.drawRectOnCanvas(mainContext, rectCoord)
            this.drawImageOnZoomedCanvas(mainImg, zoomedContext, mounseXCoord, mounseYCoord, zoomedCanvasWidth, zoomedCanvasHeight, widthRadio, heightRadio, zoomerWidth, zoomerHeight)
            if (!self.state.showZoomedCanvas) {
                self.setState({showZoomedCanvas: true})
            }
        }

        mainImageCanvas.onmouseleave = () => this.restoreCanvas(mainImg, mainContext, zoomedContext, mainCanvasWidth, mainCanvasHeight, zoomedCanvasWidth, zoomedCanvasHeight)
    }

    drawImageOnCanvas(img, ctx, canvasWidth, canvasHeight) {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight)
    }

    getRectCord(mounseXCoord, mounseYCoord, canvasWidth, canvasHeight, zoomerWidth, zoomerHeight) {
        let rectStartXCoord = mounseXCoord - zoomerWidth / 2
        let rectStartYCoord = mounseYCoord - zoomerHeight / 2

        if (rectStartXCoord < 0) {
            rectStartXCoord = 0
        } else if (rectStartXCoord > canvasWidth - zoomerWidth) {
            rectStartXCoord = canvasWidth - zoomerWidth
        }

        if (rectStartYCoord < 0) {
            rectStartYCoord = 0
        } else if (rectStartYCoord > canvasHeight - zoomerHeight) {
            rectStartYCoord = canvasHeight - zoomerHeight
        }
        return [rectStartXCoord, rectStartYCoord, zoomerWidth, zoomerHeight]
    }

    drawRectOnCanvas(ctx, rectCoord) {
        ctx.fillStyle = this.props.zoomer.style
        ctx.fillRect(...rectCoord)
    }

    drawImageOnZoomedCanvas(img, zoomedCtx, mounseXCoord, mounseYCoord, zoomedCanvasWidth, zoomedCanvasHeight, widthRadio, heightRadio, zoomerWidth, zoomerHeight) {
        zoomedCtx.clearRect(0, 0, zoomedCanvasWidth, zoomedCanvasHeight)
        zoomedCtx.drawImage(img, (mounseXCoord - zoomerWidth / 2) * widthRadio, (mounseYCoord - zoomerHeight / 2) * heightRadio, zoomerWidth * widthRadio, zoomerHeight * heightRadio, 0, 0, zoomedCanvasWidth, zoomedCanvasHeight)
    }

    restoreCanvas(img, ctx, zoomedCtx, canvasWidth, canvasHeight, zoomedCanvasWidth, zoomedCanvasHeight) {
        this.drawImageOnCanvas(img, ctx, canvasWidth, canvasHeight)
        zoomedCtx.clearRect(0, 0, zoomedCanvasWidth, zoomedCanvasHeight)
        this.setState({showZoomedCanvas: false})
    }

    render() {
        const zoomeCanvas = this.state.showZoomedCanvas
            ? 'inline'
            : 'none'
        return (
            <div>
                <canvas id={this.props.mainImage.id} className={this.props.mainImage.className} ref={this.props.mainImage.id} width={this.props.mainImage.width} height={this.props.mainImage.height}/>
                <canvas id={this.props.zoomedImage.id} className={this.props.zoomedImage.className} ref={this.props.zoomedImage.id} width={this.props.zoomedImage.width} height={this.props.zoomedImage.height} style={{
                    display: zoomeCanvas
                }}/> {this.props.children}
            </div>
        )
    }
}

ImageZoomer.defaultProps = defaultProps
ImageZoomer.propTypes = propTypes

export default ImageZoomer
