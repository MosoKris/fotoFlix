import './App.css';
import React from 'react';
import Photos from './Components/Photos';
import Favourites from './Components/Favourites';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const [favouritePhotos, setFavouritePhotos] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(e.target[0].value);
  };

  const handleFavourite = (photo) => {
    setFavouritePhotos((prevFavourites) => [...prevFavourites, photo]);
  };

  const handleRemoveFavourite = (photoId) => {
    setFavouritePhotos((prevFavourites) =>
      prevFavourites.filter((favPhoto) => favPhoto.id !== photoId)
    );
  };

  return (
    <Router>
      <div>
        <nav className='navbar'>
          <div className='navbar_logo'>
            fotoFlix
          </div>
          <form action="" className='navbar_search_form' onSubmit={handleSearch}>
            <input type='text' className='form-input' placeholder='search' />
            <button type='submit' className='submit-btn'>
              <FaSearch />
            </button>
          </form>
          <div className='navbar_links'>
            <Link to="/">Home</Link>
            <Link to="/favourites">Favourites</Link>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Photos searchQuery={searchQuery} onFavouriteClick={handleFavourite} />} />
          <Route path='/favourites' element={<Favourites favouritePhotos={favouritePhotos} handleRemoveFavourite={handleRemoveFavourite} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
