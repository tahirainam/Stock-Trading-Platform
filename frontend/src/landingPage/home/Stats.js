import React from "react";

function Stats() {
  return (
    <section className="container my-5 py-5">
      <div className="row align-items-center">

        {/* Left Content */}
        <div className="col-md-6 mb-4 mb-md-0">

          <h2 className="fw-bold mb-4">Trust with confidence</h2>

          <div className="mb-4">
            <h5 className="fw-semibold">Customer-first always</h5>
            <p className="text-muted">
              We put our customers at the centre of everything we build. Our products
              are designed to make investing simple, transparent, and accessible.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-semibold">No spam or gimmicks</h5>
            <p className="text-muted">
              No unsolicited calls, no fake promises, and no hidden tricks. What you see
              is exactly what you get.
            </p>
          </div>

          <div className="mb-4">
            <h5 className="fw-semibold">The Zerotha universe</h5>
            <p className="text-muted">
              A complete ecosystem of modern investing platforms, tools, and services
              built for every type of investor.
            </p>
          </div>

          <div>
            <h5 className="fw-semibold">Do better with money</h5>
            <p className="text-muted">
              Learn, invest, and grow with powerful insights, simple tools, and a
              platform you can rely on.
            </p>
          </div>

        </div>

        {/* Right Image & Links */}
        <div className="col-md-6 text-center">

          <img 
            src="media/images/ecosystem.png" 
            alt="Zerotha ecosystem"
            className="img-fluid mb-4"
            style={{ maxWidth: "500px" }}
          />

          <div>
            <a href="#" className="me-4 text-decoration-none fw-semibold">
              Explore our products &nbsp;
              <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>

            <a href="#" className="text-decoration-none fw-semibold">
              Try Kite demo
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Stats;
