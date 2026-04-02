import React from "react";

function Universe() {
  return (
    <div className="container text-center p-5">
      <h1>The Zerotha Universe</h1>
      <p>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s.
      </p>
      <div className="row mt-5">
        <div className="col-4 p-4 text-center">
          <img src="media/images/smallcaseLogo.png" />
          <p className="text-small text-muted pt-1">
            Lorem Ipsum standard
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/streakLogo.png" style={{width: "50%"}} />
          <p className="text-small text-muted pt-1">
            Lorem Ipsum standard
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/sensibullLogo.svg" style={{width: "50%"}}  />
          <p className="text-small text-muted pt-1">
            Lorem Ipsum standard
          </p>
        </div>
        <div className="col-4 p-4 text-center">
          <img src="media/images/zerodhaFundhouse.png" style={{width: "60%"}}  />
          <p className="text-small text-muted pt-1">
            Lorem Ipsum standard
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/goldenpiLogo.png" style={{width: "50%"}}  />
          <p className="text-small text-muted pt-1">
            Lorem Ipsum standard
          </p>
        </div>
        <div className="col-4 p-4">
          <img src="media/images/dittoLogo.png" style={{width: "50%"}}  />
          <p className="text-small text-muted pt-1">
            Lorem Ipsum standard
          </p>
        </div>
      </div>
      <a href="#" className="btn btn-primary btn-lg px-5 py-2">
        Sign up now
      </a>
    </div>
  );
}

export default Universe;
