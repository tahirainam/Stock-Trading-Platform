import React from "react";

function Hero() {
  return (
    <section className="container text-center py-5 mt-5">

      {/* Hero Image */}
      <img 
        src="media/images/homeHero.png" 
        alt="Zerotha Home"
        className="img-fluid mb-5"
        style={{ maxWidth: "900px" }}
      />

      {/* Headline */}
      <h1 className="fw-bold display-5 mb-3">
        Investing in everything
      </h1>

      {/* Subtext */}
      <p className="text-muted fs-5 mb-4">
        Online platform to invest in stocks, derivatives, mutual funds, and more.
      </p>

      {/* CTA */}
      <a href="#" className="btn btn-primary btn-lg px-5 py-2">
        Sign up now
      </a>

    </section>
  );
}

export default Hero;
