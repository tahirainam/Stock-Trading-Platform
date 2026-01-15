import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-5 mt-5">
        <h1 className="text-center pt-5 border-top">People</h1>
      </div>
      <div
        className="row p-5 text-muted "
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-2 text-center">
          <img
            src="media/images/nithinkamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h4 className="mt-3">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-2">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <p>
            {" "}
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </p>
          <p>
            {" "}
            Playing basketball is his zen.
            {" "}
          </p>
          <p>
            {" "}
            Connect on <a href="">HomePage</a> / <a href="">TradingQ&A</a> / <a href="">Twitter</a>
            {" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
