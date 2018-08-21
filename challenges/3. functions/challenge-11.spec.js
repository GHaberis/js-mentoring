import challenge from "./challenge-11";

describe("Challenge #11: Should accept a callback function which it executes", () => {
    it("should iterate a number by 1", () => {
        let myNumber = 1;

        const iterateCallback = () => {
            myNumber += 1;
        };

        challenge(iterateCallback);

        expect(myNumber).toEqual(2);
    });
});