import React from "react";

function Footer() {
  return (
    <div className="row border-top border-5 border-danger mt-5">
      <div className="d-flex flex-column justify-content-center col-md-3">
        <div className="d-flex justify-content-center">
          <img
            className="foot-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ68bqmJ8HwAf-rjm_8NqSEQ1yfc6cldcUakd1N2h2ArA&s"
          />
        </div>
        <div className="footer-head d-flex justify-content-center">
          FOLLOW US
        </div>
        <div className="d-flex flex-row justify-content-center">
          <img
            className="footer-handles me-3"
            src="https://c0.klipartz.com/pngpicture/852/365/gratis-png-chanel-no-5-logos-de-moda-logo-de-chanel-thumbnail.png"
          />
          <img
            className="footer-handles me-5"
            src="https://c0.klipartz.com/pngpicture/852/365/gratis-png-chanel-no-5-logos-de-moda-logo-de-chanel-thumbnail.png"
          />
        </div>
      </div>
      <div className="col-md-2 p-5 d-flex flex-column justify-content-center align-items-center">
        <div className="footer-head mt-4">QUICK LINKS</div>
        <div className="fs-4 mt-3">
          <div>Home</div>
          <div>Our Story</div>
          <div>Our Team</div>
          <div>Creators</div>
          <div>Contact Us</div>
          <div>Home</div>
          <div>Our Team</div>
        </div>
      </div>
      <div className="col-md-5 pt-4 mt-5 d-flex flex-column align-items-center ">
        <div className="footer-head">RECENT BLOGS</div>
        <div className="row d-flex justify-content-center align-items-center">
          <img
            className="footer-blog col-md-2"
            src="https://i.pinimg.com/564x/67/0d/4e/670d4e34899794d50bc03351213da8b0.jpg"
          />
          <div className="col-md-6 fs-5">
            <div className="footer-head fw-normal fs-5">CREATOR AWARDS</div>
            We represent some of the most sought after creators in the
            entertainment
          </div>
        </div>
        <div className="row d-flex justify-content-center align-items-center">
          <img
            className="footer-blog col-md-2"
            src="https://i.pinimg.com/564x/67/0d/4e/670d4e34899794d50bc03351213da8b0.jpg"
          />
          <div className="col-md-6  fs-5">
            <div className="footer-head fw-normal fs-5">CREATOR AWARDS</div>
            We represent some of the most sought after creators in the
            entertainment
          </div>
        </div>
      </div>
      <div className="col-md-2">
        <div className="footer-head pt-4 mt-5 ">GET IN TOUCH</div>
        <div className="ps-1 fs-5">
          TEL <br />
          +91940303
        </div>
        <div className="ps-1 mt-4 fs-5">
          Email <br />
          xyz@gmail.com
        </div>
        <div className="ps-1 mt-4 fs-5">
          Address <br />
          Golf Course Extn Gurugram, Haryana
        </div>
      </div>
    </div>
  );
}

export default Footer;
