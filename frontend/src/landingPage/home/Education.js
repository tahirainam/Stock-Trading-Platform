import React from "react";

function Education() {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center">

        {/* Left Image */}
        <div className="col-md-6 text-center mb-4 mb-md-0">
          <img
            src="media/images/education.svg"
            alt="Market education illustration"
            className="img-fluid"
            style={{ maxWidth: "450px" }}
          />
        </div>

        {/* Right Content */}
        <div className="col-md-6">

          <h2 className="fw-bold mb-4">Free and open market education</h2>

          <p className="text-muted fs-5 mb-4">
            Learn how markets work, invest smarter, and improve your trading knowledge with our free resources.
          </p>

          {/* Varsity Link */}
          <div className="mb-3">
            <a href="#" className="text-decoration-none fw-semibold">
              Varsity &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <p className="text-muted mt-2">
              Comprehensive modules on stocks, derivatives, and financial markets.
            </p>
          </div>

          {/* TradingQ&A Link */}
          <div>
            <a href="#" className="text-decoration-none fw-semibold">
              TradingQ&A &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <p className="text-muted mt-2">
              Community-driven Q&A to get your trading questions answered by experts.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
