import React from "react";

function Footer() {
  return (
    <footer className="container-fluid border-top mt-5">
      <div className="container py-5">

        <div className="row mb-4">
          {/* Logo & Copyright */}
          <div className="col-md-3 mb-4">
            <img src="media/images/logo.svg" alt="Zerotha Logo" style={{ width: "150px" }} />
            <p className="text-muted mt-3 small">
              © 2010 - 2024, Not Zerodha Broking Ltd. <br />
              All rights reserved.
            </p>

            {/* Social Icons */}
            <div className="mt-3">
              <a href="#" className="me-3 text-dark">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#" className="me-3 text-dark">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="#" className="text-dark">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Company */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">About</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Products</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Pricing</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Referral Program</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Careers</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Press & Media</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Zerotha Cares</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Support</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Support Portal</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Z-Connect Blog</a></li>
              <li><a href="#" className="text-muted text-decoration-none">List of Charges</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Downloads & Resources</a></li>
            </ul>
          </div>

          {/* Account */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Account</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-muted text-decoration-none">Open an Account</a></li>
              <li><a href="#" className="text-muted text-decoration-none">Fund Transfer</a></li>
              <li><a href="#" className="text-muted text-decoration-none">60 Day Challenge</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center text-muted small border-top pt-3">
          Zerotha is a clone project built for educational purposes only. Not affiliated with Zerodha.
        </div>

      </div>
    </footer>
  );
}

export default Footer;
