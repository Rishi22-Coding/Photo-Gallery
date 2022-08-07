import ImageContext from "./ImageContext";
import Axios from "../../components/Axios";
import { useState } from "react";

const ImageState = (props) => {
    console.log(process.env.REACT_APP_ACCESS_KEY);
    const [searchImage, setSearchImage] = useState('');
    const { response, isLoading, error, fetchData } = Axios(
        `search/photos?page=1&query=computer&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=20`
    );
    console.log(response);
    const state = {
        response,
        isLoading,
        error,
        fetchData,
        searchImage,
        setSearchImage
    }
    return (
        <ImageContext.Provider value={state}>
            {props.children}
        </ImageContext.Provider>
    )
}

export default ImageState;
