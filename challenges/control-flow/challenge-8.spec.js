import challenge from "./challenge-8";

describe("Challenge #8: Takes a year and returns true if leap year and false if not a leap year", () => {
  it("should return false if not a leap year", () => {
    const isLeapYear = challenge(2018);

    expect(isLeapYear).toEqual(false);
  });

  it("should return true if a leap year", () => {
    const isLeapYear = challenge(1992);

    expect(isLeapYear).toEqual(true);
  });
});