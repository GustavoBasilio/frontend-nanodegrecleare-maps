import React from "react";
import PropTypes from "prop-types";

//Stateless component that represents the infowindow of the map
const InfoWindow = (props) => (
  <article className="info-window">
    <h3>{props.name}</h3>
    <h4>{props.address}</h4>
    {props.image && props.image[0].getUrl()}
  </article>
);

InfoWindow.propTypes = {
    name: PropTypes.string,
    address: PropTypes.string,
    image: PropTypes.array
};

export default InfoWindow;
