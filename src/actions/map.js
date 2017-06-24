export const updateCoords = (latitude,longitude) => {
    return {
        type: "UPDATE_COORDS",
        payload: [latitude, longitude]
    };
};
