import axios from "axios";
import store from "../store";
import {googleKey} from "../variables";
const endpoint = "https://maps.googleapis.com/maps/api/place/textsearch/json?key="+googleKey+"&radius=500";

export const searchPlaces = (latitude,longitude, query) => {
  let url = endpoint+"&location="+latitude+','+longitude+"&query=bar";
  axios.get(url)
  .then((response) => {
    let markers = [];
    response.data.results.map((place) => {
      markers.push({
        position: [place.geometry.location.lat,place.geometry.location.lng],
        icon: "fa-beer"
      });
    });
    store.dispatch(searchCompleted(markers));
  });
  return {
      type: "SEARCH_PENDING"
  };
};

export const searchLocation = (query) => {
  let url = endpoint+"&query="+query;
  axios.get(url)
  .then((response) => {
    let results = [];
    response.data.results.map((place) => {
      results.push({
        position: [place.geometry.location.lat,place.geometry.location.lng],
        icon: "fa-map-pin current-marker",
        address: place.formatted_address
      });
    });
    store.dispatch(locationList(results));
  });
  return {
      type: "SEARCH_PENDING"
  };
};

const locationList = (results) => {
  return {
    type: "LOCATION_LIST",
    payload: results
  };
};

const searchCompleted = (markers) => {
  return {
    type: "SEARCH_COMPLETED",
    payload: markers
  };
};
