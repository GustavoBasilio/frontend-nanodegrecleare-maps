import React from "react";
import PropTypes from "prop-types";

const Marker = (props) => (
  <i className={"fa marker "+props.icon} aria-hidden="true" onClick={props.openInfo.callback && props.openInfo.callback.bind(this,props.openInfo.id)}></i>
);

Marker.propTypes = {
  icon: PropTypes.string,
  openInfo: PropTypes.object
};

export default Marker;
