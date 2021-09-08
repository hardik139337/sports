import React from "react";
import PropTypes from "prop-types";

/* eslint-disable react/prop-types */
export default function Card(props) {
  return (
    <div>
      <div className="card row">
        <div className="col-md-4">
          <img
            src={props.sImage}
            alt="img"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="col-md-8">
          <h5>{props.sTitle}</h5>
          <p> {props.sDescription}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <p>Sports Info 6 months ago</p>
            </div>
            <div>count {props.nViewCounts}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.prototype = {
  sImage: PropTypes.string,
  sTitle: PropTypes.string,
  sDescription: PropTypes.string,
  nViewCounts: PropTypes.number,
};
