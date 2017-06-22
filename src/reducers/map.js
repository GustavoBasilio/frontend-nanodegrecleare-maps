
const defaultState = {
    center: [-23.550520023, -46.6333090],
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
