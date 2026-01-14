import React from "react";

function Pricing() {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-md-5 mb-4 mb-md-0">
          <h1 className="fw-bold mb-3">Unbeatable pricing</h1>
          <p className="text-muted fs-5 mb-4">
            Simple, transparent pricing with no hidden charges. Trade and invest with
            confidence at one of the lowest costs in the industry.
          </p>

          <a href="#" className="text-decoration-none fw-semibold">
            See pricing &nbsp;
            <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
          </a>
        </div>

        {/* Right Pricing Cards */}
        <div className="col-md-7">
          <div className="row text-center">

            {/* Card 1 */}
            <div className="col-md-6 mb-3">
              <div className="border rounded p-4 h-100">
                <h1 className="fw-bold mb-3">
                  <i className="fa fa-inr" aria-hidden="true"></i> 0
                </h1>
                <p className="text-muted">
                  Zero brokerage on equity delivery and direct mutual funds.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-md-6 mb-3">
              <div className="border rounded p-4 h-100">
                <h1 className="fw-bold mb-3">
                  <i className="fa fa-inr" aria-hidden="true"></i> 20
                </h1>
                <p className="text-muted">
                  Flat ₹20 per order on intraday, F&O, commodities, and currencies.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Pricing;
