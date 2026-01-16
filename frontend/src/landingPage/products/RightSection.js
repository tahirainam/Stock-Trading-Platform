import React from "react";

function RightSection({ productName, productDescription, tryDemo, imageURL}) {
  return (
    <div className="counter border-top">
      <div className="row m-5">
        <div className="col-6 p-3 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
              <a href={tryDemo} style={{ textDecoration: "none" }}>
                Learn More &nbsp; &rarr;
              </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
