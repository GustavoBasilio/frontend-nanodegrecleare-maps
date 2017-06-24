import React from "react";
import PropTypes from "prop-types";

const Marker = (props) => (
  <i className={"fa marker "+props.icon} aria-hidden="true"></i>
);

Marker.propTypes = {
  icon: PropTypes.string
};

export default Marker;
