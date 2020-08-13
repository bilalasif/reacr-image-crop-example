import React, { useState, useRef, useEffect } from 'react'

import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.min.css'
import '../Imagecropper.css'

export default function ImageCropper(props) {
    const imageElement = useRef(null)
    const [imageDestination, setImageDestination] = useState('')
    useEffect(() => {

        const cropper = new Cropper(imageElement.current, {
            zoomable: false,
            scalable: true,
            // aspectRatio: 1, This has got to go
            autoCropArea: 1,
            viewMode: 3,
            modal: false,
            crop: () => {
                const canvas = cropper.getCroppedCanvas();
                setImageDestination(canvas.toDataURL('image/jpeg'))
                props.onImageDestinationChange(imageDestination)
            }
        })
    }, [imageDestination])
    return (
        <div>
            <div className="img-container">
                <img
                    src={props.src}
                    ref={imageElement}
                    alt="Source"
                />
            </div>
            <img
                src={imageDestination}
                className="img-preview" alt="Destination"
            />

        </div>
    )
}
