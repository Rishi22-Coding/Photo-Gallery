import ImageContext from "./ImageContext";
import Axios from "../../components/Axios";

const ImageState = (props) => {
    console.log(process.env.REACT_APP_ACCESS_KEY);
    const { response, isLoading, error, fetchData } = Axios(
        `search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    );
    console.log(response);
    const state = {
        response,
        isLoading,
        error,
        fetchData
    }
    return (
        <ImageContext.Provider value={state}>
            {props.children}
        </ImageContext.Provider>
    )
}

export default ImageState;
