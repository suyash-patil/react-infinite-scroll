import axios from 'axios';
import '../App.css'
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { UnsplashImage } from './UnsplashImage';
import { Loader } from './Loader';

export function Topic1() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    setPage(page + 1);
    const apiRoot = "https://api.unsplash.com";
    const accessKey = 'YOUR_ACCESS_KEY';
    await axios
      .get(`${apiRoot}/photos/random?page=${page}&client_id=${accessKey}&count=20`)
      .then(res => {
        setImages([...images, ...res.data]);
      });
  };
  return (
    <div className="App">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="img-grid">
          {images.map((image, index) => (
            <UnsplashImage
              url={image.urls.thumb}
              key={index}
            />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );

}
