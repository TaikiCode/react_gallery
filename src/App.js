import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button";

function App() {
  const [images, setImages] = useState([
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
  ]);

  const getNewImage = () => {
    setImages([
      ...images,
      {
        url: `https://source.unsplash.com/random/${Math.floor(
          Math.random() * 100
        )}`,
      },
    ]);
  };

  const removeImage = () => {
    setImages(images.slice(0, -1));
  };

  return (
    <div className="gallery">
      <div className="container pt-3">
        <Button getNewImage={getNewImage} removeImage={removeImage} />
        <div className="intro text-center pt-5">
          <h1 className="">Lightbox Gallery</h1>
          <p className="mt-2">Please click on any image to open gallary !</p>
        </div>
        <Card images={images} />
      </div>
    </div>
  );
}

export default App;
