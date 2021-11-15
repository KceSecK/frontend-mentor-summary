import React from "react";
import cardImg from "../assets/icons/illustration-hero.svg";
import musicIco from "../assets/icons/icon-music.svg";

function Card() {
  return (
    <div className="card custom-card overflow my-4 shadow">
      <img src={cardImg} className="img-fluid" alt="" />
      <div className="card-body text-center">
        <h3 className="card-title p-3 fw-bold">Order Summary</h3>
        <p className="card-text text-secondary">
          You can now listen to millions of songs, <br />
          audiobooks, and podcasts on any device <br />
          anywhere you like!
        </p>
        <div className="row p-3 bg-custom">
          <div className="col-4">
            <img src={musicIco} alt="" />
          </div>
          <div className="col-4">
            <div className="row fw-bold">Annual Plan</div>
            <div className="row text-secondary">$59.99/year</div>
          </div>
          <div className="col-4 fw-bold">
            <a href="/">Change</a>
          </div>
        </div>
        <div className="d-grid gap-2 col-11 mx-auto m-3">
          <a href="/" className="btn btn-custom fw-bold">
            Procede to Payment
          </a>
          <a href="/" className="btn btn-cancel fw-bold">
            Cancel Order
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
