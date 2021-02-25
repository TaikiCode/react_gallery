import { useState } from "react";
import SimpleReactLightbox from "simple-react-lightbox";
import Card from "./components/Card";
import Button from "./components/Button";
import "./App.css";

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
    <SimpleReactLightbox>
      <div className="gallery">
        <div className="container pt-4">
          <Button getNewImage={getNewImage} removeImage={removeImage} />
          <div className="text-center pt-5 mb-5">
            <h1 className="title">Lightbox Gallery</h1>
            <p className="font-italic text-secondary mt-2">
              Please click on any image to open gallary !
            </p>
          </div>
          <Card images={images} />
        </div>
      </div>
    </SimpleReactLightbox>
  );
}

export default App;
