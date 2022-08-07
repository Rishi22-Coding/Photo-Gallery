import "./App.css";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import Images from "./components/Images";
import ImageState from "./context/image/ImageState";

function App() {
  return (
    <>
      <ImageState>
        <NavBar>
          <SearchBar />
        </NavBar>
        <Images />
      </ImageState>
    </>
  );
}

export default App;
