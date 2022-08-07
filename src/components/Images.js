import React, { useContext } from 'react'
import ImageContext from '../context/image/ImageContext';
import ImageExtractor from './ImageExtractor';
import ImageLoader from './ImageLoader';

const Images = () => {
    const { response, isLoading, searchImage } = useContext(ImageContext);
  return (
    <>
        <h1
        className="text-center mt-6 underline text-2xl"
        >Results for {searchImage || 'Computer'}</h1>
        <div 
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-auto px-4 my-7">
            {isLoading ? <ImageLoader item={20} /> : response.map((data, key) => <ImageExtractor key={key} data={data} />)}
        </div>
    </>
  )
}

export default Images