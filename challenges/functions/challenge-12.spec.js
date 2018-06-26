import challenge from "./challenge-12";

describe("Challenge #12: Should accept a callback function and a number to modify using the callback", () => {
    const iterateCallback = (num) => {
        return num += 1;
    };

    const squareRootCallback = (num) => {
        return num * num;
    };

    it("should return number iterated by 1", () => {
        const result = challenge(iterateCallback, 1);

        expect(result).toEqual(2);
    });

    it("should return number squared", () => {
        const result = challenge(squareRootCallback, 2);

        expect(result).toEqual(4);
    });
});