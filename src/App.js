import React, { useState } from 'react';
import Imagecropper from './components/ImageCropperFunctional/ImageCropper'
import SourceImage from './Source.jpeg'

function App() {
  const [finalURL, setFinalURL] = useState('')
  const onPrintTargetUrlClick = (e) => {
    e.preventDefault()
    console.log(finalURL)
  }
  const onImageDestinationChange = (URL) => {
    setFinalURL(URL)
  }
  return (
    <div >
      <button onClick={onPrintTargetUrlClick}>Print TargetImage URL</button>
      <Imagecropper src={SourceImage} onImageDestinationChange={onImageDestinationChange} />
    </div>
  );
}

export default App;
