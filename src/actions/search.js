import axios from "axios";
import store from "../store";
import {googleKey} from "../variables";
const endpoint = "https://maps.googleapis.com/maps/api/place/textsearch/json?key="+googleKey+"&radius=500&query=bar";

export const searchPlaces = (latitude,longitude) => {
    axios.get(endpoint+"&location="+latitude+','+longitude)
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

const searchCompleted = (markers) => {
  return {
    type: "SEARCH_COMPLETED",
    payload: markers
  };
};
