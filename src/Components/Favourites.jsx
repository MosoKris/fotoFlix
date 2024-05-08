import React from 'react';
import Photos from './Photos';

const Favourites = ({ favouritePhotos, handleRemoveFavourite }) => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar_logo">fotoFlix</div>
        <div className="navbar_links">
          <a href='/'>Home</a>
        </div>
      </nav>
      <main>
        <section className="photos">
          <div className="photos-center">
            {favouritePhotos.length > 0 ?  (
              favouritePhotos.map((image, index) => (
                <Photos
                    key={index}
                    {...image}
                    isFavourite={true}
                    onFavouriteClick={() => handleRemoveFavourite(image.id)}>
                      <span>Added to favourite</span>
                    </Photos>
              ))
            ) : (
              <p>No favourite photos yet.</p>
            ) }
          </div>
        </section>
      </main>
    </div>
  );
};

export default Favourites;
