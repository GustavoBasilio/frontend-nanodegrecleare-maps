import axios from "axios";
import store from "../store";
import {googleKey} from "../variables";

export const searchPlaces = (latitude,longitude, query) => {
  if(typeof google != "undefined"){
    let mapAux = new google.maps.Map(document.createElement('div'));
    let service = new google.maps.places.PlacesService(mapAux);
    let location = new google.maps.LatLng(latitude,longitude);
    service.nearbySearch({
      location: location,
      radius: '500',
      types: ['bar']
    }, (response,status) => {
      let markers = [];
      response.map((place) => {
        markers.push({
          position: [place.geometry.location.lat(),place.geometry.location.lng()],
          address: place.vicinity,
          name: place.name,
          id: place.place_id
        });
      });
      store.dispatch(searchCompleted(markers));
    });
  }
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