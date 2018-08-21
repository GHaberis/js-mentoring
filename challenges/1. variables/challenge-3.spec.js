import challenge from "./challenge-3";

describe("Challenge #3: Returns an age in dog years", () => {
  it("should return dog year equivilant of human years", () => {
    const dogYears = challenge();

    expect(dogYears).toEqual(53);
  });
});
