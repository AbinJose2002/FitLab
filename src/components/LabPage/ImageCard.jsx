import React from 'react'

const ImageCard = ({ imageSrc }) => {
  return (
    <div className="col-sm-12 col-lg-4 px-5 container py-5 lab-card">
      <img src={imageSrc} alt="" className='lab-image' />
    </div>
  )
}

export default ImageCard