
import React, { useState, useEffect } from 'react';

const Feed = () => {
  const [photos, setPhotos] = useState([]);

  // useEffect(() => {
    
  //   fetch('https://api.unsplash.com/photos?client_id=YOUR_UNSPLASH_API_KEY')
  //     .then((response) => response.json())
  //     .then((data) => setPhotos(data));
  // }, []);

  return (
    <div className="feed">
      {photos.map((photo) => (
        <div key={photo.id} className="post">
          <img src={photo.urls.regular} alt={photo.description} />
          <p>{photo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Feed;
