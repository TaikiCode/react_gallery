import { useState } from "react";
import "./App.css";

function App() {
  const [images, setImages] = useState([
    { url: "https://source.unsplash.com/random/1" },
    { url: "https://source.unsplash.com/random/2" },
    { url: "https://source.unsplash.com/random/3" },
    { url: "https://source.unsplash.com/random/4" },
    { url: "https://source.unsplash.com/random/5" },
  ]);

  return (
    <div className="gallery">
      <div className="container pt-3">
        <div className="intro text-center pt-5">
              <h1 className="">Lightbox Gallery</h1>
              <div className="mt-4">
                <button className="btn btn-outline-primary mr-2">追加</button>
                <button className="btn btn-outline-danger ml-2">削除</button>
              </div>
        </div>
        <div className="row">
          {images.map((img, index) => (
            <div key={index} className="col-lg-4 photo">
              <img src={img.url} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
