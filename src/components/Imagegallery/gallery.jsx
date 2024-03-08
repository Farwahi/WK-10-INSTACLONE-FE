import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './gallery.css';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_UNSPLASH_KEY;
    console.log (API_KEY)
    const API_URL = `https://api.unsplash.com/photos?page=1&client_id=${API_KEY}`;

    axios.get(API_URL)
      .then((response) => {
        setImages(response.data);
      })
      .catch((error) => {
        console.error('Error fetching images:', error);
      });
  }, []);

  return (
    <div className="image-gallery">
      {images.map((image) => (
        <img
          key={image.id}
          src={image.urls.regular}
          alt={image.description}
          className="gallery-image"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
