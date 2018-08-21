import challenge from "./challenge-6";

describe("Challenge #6: Takes a full name string and returns Surname in uppercase", () => {
  it("should return surname in upper case", () => {
    const fullName = 'Waldo Jeffers';
    const surname = challenge(fullName);

    expect(surname).toEqual('JEFFERS');
  });
});
