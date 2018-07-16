import challenge from "./challenge-7";

describe("Challenge #7: check if number is odd or even", () => {
  it("should return true if even", () => {
    const isEven = challenge(8);

    expect(isEven).toEqual(true);
  });

  it("should return false if odd", () => {
    const isEven = challenge(9);

    expect(isEven).toEqual(false);
  });
});
