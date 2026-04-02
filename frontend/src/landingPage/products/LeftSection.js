import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore
}) {
  return (
    <div className="counter border-top">
      <div className="row m-5">
        <div className="col-6 p-3">
          <img src={imageURL} />
        </div>
        <div className="col-6 p-3 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <p>
            <a href={tryDemo} style={{textDecoration:"none"}}>Try Demo</a>
            &nbsp; &rarr; &nbsp;
            <a href={learnMore} style={{textDecoration:"none"}}>Learn More</a>
            </p>
          </div>
          <div className="mt-2">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" style={{marginLeft: "10px"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
