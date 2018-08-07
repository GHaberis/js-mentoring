import {
    generateArray,
    sumFirstAndLast,
    getEvenNumbers,
    sumArray,
    multiplyArrayValues,
    getItemsOverNumber
} from "./challenge-14";

describe("Challenge #14: Should return an array of numbers from 1 to x", () => {
    it("should return updated speedlimit", () => {
        const x = 10;

        expect(generateArray(x).length).toEqual(10);
    });
});

describe("Challenge #14: Should add the first and last indexes of generated array", () => {
    it("should return updated speedlimit", () => {
        const x = 10;
        const myArray = generateArray(x);

        expect(sumFirstAndLast()).toEqual(11);
    });
});

describe("Challenge #14: Should return an array of all even numbers from a generated array", () => {
    it("should return updated speedlimit", () => {
        const x = 10;
        const myArray = generateArray(x);

        expect(getEvenNumbers(myArray)).toEqual([2, 4, 6, 8, 10]);
    });
});

describe("Challenge #14: Should return the sum of all the items in a generated array", () => {
    it("should return updated speedlimit", () => {
        const x = 10;
        const myArray = generateArray(x);

        expect(sumArray(myArray)).toEqual(55);
    });
});

describe("Challenge #14: Should return an array of numbers that have been multiplied by a specified multiple", () => {
    it("should return updated speedlimit", () => {
        const x = 10;
        const myArray = generateArray(x);
        const multiple = 2;

        expect(multiplyArrayValues(myArray, multiple)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });
});

describe("Challenge #14: Should returnan array of all items from a generated array greater than a specified number", () => {
    it("should return updated speedlimit", () => {
        const x = 10;
        const myArray = generateArray(x);
        const greaterThanNumber = 5

        expect(getItemsOverNumber(myArray, greaterThanNumber)).toEqual([6, 7, 8, 9, 10]);
    });
});





