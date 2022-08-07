import { useContext, useState } from "react";
import ImageContext from "../context/image/ImageContext";

const SearchBar = () => {

  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleSearchButton = () => {
    fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=20`);
    setSearchValue("");
    setSearchImage(searchValue);
  }

  const handleEnterSearch = (e) => {
    if(e.key == 'Enter'){
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.REACT_APP_ACCESS_KEY}&per_page=20`);
      setSearchValue("");
      setSearchImage(searchValue);
    }
  }

  return (
    <div className="flex">
        <input
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search" 
        placeholder="Search Any Keyword..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
        />

        <button
        onClick={handleSearchButton}
        disabled={!searchValue}
        className="bg-blue-500 hover:bg-blue-700 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-4 focus:ring-blue-500 disabled:bg-gray-400"
        >Search</button>
    </div>
  )
}

export default SearchBar; 
