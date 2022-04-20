import React from "react";

const InputImg = () => {

  return (
    <div>
      <input
        className="form-control photoss"
        type="file"
        id="formFileMultiple"
        name="url"
        multiple
      ></input>
    </div>
  );
};

export default InputImg;
