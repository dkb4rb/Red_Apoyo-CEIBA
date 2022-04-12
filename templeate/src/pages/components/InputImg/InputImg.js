import React from "react";

const InputImg = () => {
    const register = (data) =>{
        console.log(data)
    }
  return (
    <div>
      <input
        className="form-control photoss"
        type="file"
        id="formFileMultiple"
        name="url"
        ref={register}
        multiple
      ></input>
    </div>
  );
};

export default InputImg;
