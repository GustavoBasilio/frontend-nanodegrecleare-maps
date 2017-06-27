import {googleKey} from "../variables";

const defaultState = {
    status: 0,
    filter: "",
    center: [0, 0],
    zoom: 15,
    bootstrapURLKeys: {
      key: googleKey
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
    }
    return state;
};
