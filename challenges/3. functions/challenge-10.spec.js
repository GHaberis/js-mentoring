import challenge from "./challenge-10";

describe("Challenge #10: multiply number by 3", () => {
    it("should multiply a number by 3", () => {
        const multiple = challenge(7);

        expect(multiple).toEqual(21);
    });
});