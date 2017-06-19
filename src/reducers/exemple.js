export const exempleReducer = (state={},action) => {
    switch(action.type){
        case "EXEMPLE_ACTION":
            state = {state, name: action.payload.name};
            break;
    }
    return state;
};