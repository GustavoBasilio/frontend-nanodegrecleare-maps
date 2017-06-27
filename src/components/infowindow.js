import React from "react";
import PropTypes from "prop-types";

const InfoWindow = (props) => (
  <div className="info-window">
    <span>{props.name}</span>
    <span>{props.address}</span>
    <span>{props.image && props.image.copyright}</span>
  </div>
);

InfoWindow.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.array
};

export default InfoWindow;
