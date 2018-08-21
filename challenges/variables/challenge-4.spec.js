import challenge from "./challenge-4";

describe("Challenge #4: Converts temperature in kelvin to temperature in farenheit", () => {
  it("should return a sentence declaring the temperature in farenheit rounded to the nearest whole number", () => {
    const farenheit = challenge(294);

    expect(farenheit).toEqual('The temperature is 70 fahrenheit.');
  });
  it("should return a sentence declaring the temperature in farenheit rounded to the nearest whole number", () => {
    const farenheit = challenge(360);

    expect(farenheit).toEqual('The temperature is 189 fahrenheit.');
  });
});
