import React from 'react';

const Details = () => (
  <div className="details">
    <div className="details__large">
      <div className="details__icon">
        <img src="/profiles/female-16.jpg" alt="" />
      </div>
      <div className="details__name">
        <span className="details__firstName">Ernaline</span>
        <span className="details__lastName">Kitcatt</span>
      </div>
    </div>
    <div className="details__info">
      <div className="details__row">
        <label className="details__label">Mobile</label>
        <span className="details__text">(860) 8268632</span>
      </div>
      <div className="details__row">
        <label className="details__label">Telephone</label>
        <span className="details__text">(649) 7697359</span>
      </div>
      <div className="details__row">
        <label className="details__label">Email</label>
        <span className="details__text">ekitcattm@addtoany.com</span>
      </div>
      <div className="details__row">
        <label className="details__label">Home Address</label>
        <span className="details__text">47 Anthes Place</span>
      </div>
    </div>
  </div>
);

export default Details;
