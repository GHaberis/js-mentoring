import {
    getSpeedLimit,
    setSpeedLimit
} from "./challenge-13";

describe("Challenge #13: Should be able to alter speed limit", () => {
    it("should return updated speedlimit", () => {
        expect(getSpeedLimit('city')).toEqual(20);

        setSpeedLimit('city', 30);

        expect(getSpeedLimit('city')).toEqual(30);
    });
});