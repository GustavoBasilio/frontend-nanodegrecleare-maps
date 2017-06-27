const defaultState = {
    status: 0,
    results: []
};

export const searchReducer = (state=defaultState,action) => {
    switch(action.type){
        case "SEARCH_PENDING": {
          return {...state, status: 1};
        }
        case "SEARCH_REJECTED": {
          return {...state, status: 3};
        }
        case "LOCATION_LIST": {
          return {...state, results: action.payload};
        }
    }
    return state;
};
