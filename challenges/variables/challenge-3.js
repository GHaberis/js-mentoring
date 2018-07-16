/**
    The first two human years of a dog's life count as 10.5 dog years each.
    Each human year following counts as 4 dog years
**/

export default (myAge) => {
  let earlyYears = 2;
  earlyYears *= 10.5;
  let laterYears = myAge - 2;
  laterYears *= 4;
  let myAgeInDogYears = earlyYears + laterYears;
  return myAgeInDogYears;
};
