import React, { Component } from 'react'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.min.css'
import './Imagecropper.css'
export class Imagecropper extends Component {
    constructor() {
        super();
        this.state = {
            imageDestination: ""
        };
        this.imageElement = React.createRef()
    }
    componentDidMount() {
        const cropper = new Cropper(this.imageElement.current, {
            zoomable: false,
            scalable: false,
            aspectRatio: 1,
            crop: () => {
                const canvas = cropper.getCroppedCanvas();
                this.setState({ imageDestination: canvas.toDataURL('image/jpeg') })
            }
        })

    }
    render() {
        return (
            <div>
                <div className="img-container">
                    <img ref={this.imageElement} src={this.props.src} alt="Source" />
                </div>
                <img src={this.state.imageDestination} className="img-preview" alt="Destination" />
            </div>
        )
    }
}

export default Imagecropper
