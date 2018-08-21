/**
 * If the year is evenly divisible by 4 AND by divisible by 100 it's a leap year
 * OR If the year is evenly divisible by 400 it's a leap year
 */

export default (year) => {
  if ((year%4 === 0 && year%100 !== 0) || (year%400 === 0)){
    return true;
  }
  return false;
}
