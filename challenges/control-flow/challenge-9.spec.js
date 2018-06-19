import challenge from "./challenge-9";

describe("Challenge #9: Takes a name and number 0-7 and returns a valid magic eightball message", () => {
  it("should handle a valid number", () => {
    const message = challenge('Amy', 1);

    expect(message).toEqual('Hello, Amy, the eightball says: It is decidedly so');
  });

  it("should handle an invalid number", () => {
    const message = challenge('Jeff', 999);

    expect(message).toEqual('Hello, Jeff, the eightball says: Dunno');
  });
});