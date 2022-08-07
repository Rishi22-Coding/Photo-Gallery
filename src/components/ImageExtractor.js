import React from 'react'

const ImageExtractor = ({data}) => {
  return (
    <a href={data.urls.regular} target="_blank">
        <img src={data.urls.small} alt={data.alt_description} />
    </a>
  )
}

export default ImageExtractor;