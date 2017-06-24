export const updateCoords = (latitude,longitude) => {
    return {
        type: "UPDATE_COORDS",
        payload: [latitude, longitude]
    };
};
export const createCurrent = (marker) => {
    return {
        type: "CREATE_CURRENT",
        payload: marker
    };
};
