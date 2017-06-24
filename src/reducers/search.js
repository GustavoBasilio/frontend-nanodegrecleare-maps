
const defaultState = {
    status: 0,
    results: []
};

export const searchReducer = (state=defaultState,action) => {
    switch(action.type){
        case "SEARCH_PENDING": {
            return {...state, status: 1};
        }
        case "SEARCH_COMPLETED": {
          return {...state, status: 2};
        }
        case "SEARCH_REJECTED": {
          return {...state, status: 0};
        }
    }
    return state;
};
