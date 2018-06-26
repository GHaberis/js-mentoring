export const getSpeedLimit = (zone) => {
    const limits = {
        motorway: 70,
        city: 20,
        national: 60,
    };
    
    return limits[zone];
};

export const setSpeedLimit = () => {};