import challenge from "./challenge-5";

describe("Challenge #5: Take 2 strings and identify whether first string is present in second string", () => {
  it("should return true if first string is present in in second string", () => {
    const firstString = 'Bob';
    const secondString = 'Hello my name is Bob';
    const contains = challenge(firstString, secondString);

    expect(contains).toEqual(true);
  });

  it("should return false if first string is not present in in second string", () => {
    const firstString = 'Helen';
    const secondString = 'Hello my name is Bob';
    const contains = challenge(firstString, secondString);

    expect(contains).toEqual(false);
  });
});
