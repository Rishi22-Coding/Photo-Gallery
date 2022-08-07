import './App.css';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Images from './components/Images';
import Axios from './components/Axios';

function App() {
  const { response, isLoading, error, fetchData } = Axios(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`);
  console.log(response);
  return (
    <>
      <NavBar >
        <SearchBar />
      </NavBar>
      <Images />
    </>
  );
}

export default App;
