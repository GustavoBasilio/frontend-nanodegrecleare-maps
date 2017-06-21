
const defaultState = {
    center: [59.938043, 30.337157],
    zoom: 8,
    bootstrapURLKeys: {key: "AIzaSyBkUMIkAsP8A_zi654O2CUhA7s0I_QttT4"}
};

export const mapReducer = (state=defaultState,action) => {
    switch(action.type){
        case "EXEMPLE_ACTION": {
            return {...state, name: action.payload.name};
        }
    }
    return state;
};