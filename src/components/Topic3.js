import axios from 'axios';
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
import { UnsplashImage } from './UnsplashImage';
import '../App.css'
import { Loader } from './Loader';

export function Topic3() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(async () => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey =
      "eRIb4DJEACd3v_2uTxMlGQypWwO536pMqI5pkmOl4hE";

    await axios
      .get(`${apiRoot}/topics/architecture/photos?page=${page}&client_id=${accessKey}`)
      .then(res => {
        setImages(res.data);
      });
  }, [])

  const fetchImages = async () => {
    setPage(page + 1);
    const apiRoot = "https://api.unsplash.com";
    const accessKey = 'YOUR_ACCESS_KEY';
    await axios
      .get(`${apiRoot}/topics/technology/photos?page=${page}&client_id=${accessKey}`)
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
