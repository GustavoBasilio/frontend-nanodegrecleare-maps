import {googleKey} from "../variables";

const defaultState = {
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
              markers: [{
                position: action.payload,
                icon: "current-marker fa-map-pin"
              }]
            };
        }
    }
    return state;
};
