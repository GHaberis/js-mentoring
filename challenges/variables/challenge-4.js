/**
 * Temperature in celsius is temperature in Kelvin - 273
 * Temparature in farenheit is celsius * (9/5) plus 32
 */

export default (kelvin) => {
  const celsius = kelvin - 273;
  let fahrenheit = celsius * (9 / 5) + 32;
  fahrenheit = Math.ceil(fahrenheit);
  return `The temperature is ${fahrenheit} fahrenheit.`;
};
