import React from "react";

function Awards() {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-md-6 mb-4 mb-md-0 text-center">
          <img 
            src="media/images/largestBroker.svg" 
            alt="Largest stock broker illustration"
            className="img-fluid"
            style={{ maxWidth: "450px" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6">

          <h1 className="fw-bold mb-3">
            India's largest retail stockbroker
          </h1>

          <p className="text-muted fs-5 mb-4">
            Trusted by millions of investors, Zerotha powers a significant portion of 
            daily retail trading volumes across Indian stock exchanges.
          </p>

          <div className="row mb-4">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>✔ Futures & Options</li>
                <li>✔ Commodity derivatives</li>
                <li>✔ Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="list-unstyled">
                <li>✔ Stocks & IPOs</li>
                <li>✔ Direct mutual funds</li>
                <li>✔ Bonds & government securities</li>
              </ul>
            </div>
          </div>

          <img 
            src="media/images/pressLogos.png" 
            alt="Featured in leading publications"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />

        </div>
      </div>
    </section>
  );
}

export default Awards;
