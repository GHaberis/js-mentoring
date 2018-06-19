import challenge from "./challenge-2";

describe("Challenge #2: Returns a sentence", () => {
  it("should return a fully formed sentence", () => {
    const sentence = challenge('Helen', 'software engineer');

    expect(sentence).toEqual("Hello I am Helen, and I am a software engineer");
  });
});
