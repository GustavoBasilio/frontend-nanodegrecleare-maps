import {googleKey} from "../variables";

const defaultState = {
    status: 0,
    filter: "",
    center: [0, 0],
    zoom: 18,
    bootstrapURLKeys: {
      key: googleKey,
      libraries: 'places'
    },
    infowindow: {
      status: 0,
      marker: 0
    },
    markers: []
};

export const mapReducer = (state=defaultState,action) => {
    switch(action.type){
        case "UPDATE_COORDS": {
            return {...state,
              center: action.payload,
              current: {
                position: action.payload,
                icon: "current-marker fa-map-pin"
              }
            };
        }
        case "SEARCH_PENDING": {
          return {...state, status: 1};
        }
        case "SEARCH_REJECTED": {
          return {...state, status: 3};
        }
        case "SEARCH_COMPLETED": {
          return {...state, status: 2, markers:action.payload};
        }
        case "UPDATE_FILTER": {
          return {...state, filter:action.payload};
        }
        case "UPDATE_INFO": {
          if(state.infowindow.status && state.infowindow.marker == action.payload)
            return {...state, infowindow:{status: 0, marker: action.payload}};
          else 
            return {...state, infowindow:{status: 1, marker: action.payload}};
        }
    }
    return state;
};
