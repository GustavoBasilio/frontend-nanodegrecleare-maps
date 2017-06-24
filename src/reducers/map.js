const defaultState = {
    center: [0, 0],
    zoom: 15,
    bootstrapURLKeys: {
      key: "AIzaSyBkUMIkAsP8A_zi654O2CUhA7s0I_QttT4"
    },
    markers: []
};

export const mapReducer = (state=defaultState,action) => {
    switch(action.type){
        case "UPDATE_COORDS": {
            return {...state, center: action.payload};
        }
        case "CREATE_CURRENT": {
            return {...state, markers: action.payload};
        }
    }
    return state;
};
