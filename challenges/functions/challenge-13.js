const limits = {
    motorway: 70,
    city: 20,
    national: 60,
};

export const getSpeedLimit = (zone) => {
    return limits[zone];
};

export const setSpeedLimit = (zone, limit) => {
    limits[zone] = limit;
};
