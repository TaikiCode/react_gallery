import React from "react";

const Button = ({ getNewImage, removeImage }) => {
  return (
    <div className="buttonContainer text-center py-4 fixed-bottom">
      <button onClick={getNewImage} className="btn btn-outline-primary mr-3">
        追加
      </button>
      <button onClick={removeImage} className="btn btn-outline-danger ml-3">
        削除
      </button>
    </div>
  );
};

export default Button;
