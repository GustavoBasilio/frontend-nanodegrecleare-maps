import axios from "axios";
import store from "../store";
import {googleKey} from "../variables";

export const searchPlaces = (latitude,longitude, query) => {
  let url =  "https://maps.googleapis.com/maps/api/place/textsearch/json?key="+googleKey+"&radius=500&location="+latitude+','+longitude+"&query=bar";
  let instanse = axios.create({
    headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
        }
  });
  instanse.get(url)
  .then((response) => {
    let markers = [];
    response.data.results.map((place) => {
      markers.push({
        position: [place.geometry.location.lat,place.geometry.location.lng],
        address: place.formatted_address,
        name: place.name,
        image: place.photos,
        id: place.place_id
      });
    });
    store.dispatch(searchCompleted(markers));
  });
  return {
      type: "SEARCH_PENDING"
  };
};

const searchCompleted = (markers) => {
  return {
    type: "SEARCH_COMPLETED",
    payload: markers
  };
};

export const updateFilter = (filter) => {
  return {
    type: "UPDATE_FILTER",
    payload: filter
  };
};

export const updateInfoMarker = (key) => {
  return {
    type: "UPDATE_INFO",
    payload: key
  };
};