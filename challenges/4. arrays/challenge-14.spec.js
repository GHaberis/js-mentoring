import {
    generateArray,
    sumFirstAndLast,
    getEvenNumbers,
    sumArray,
    multiplyArrayValues,
    getItemsOverNumber,
    removeDuplicates
} from "./challenge-14";

describe("Challenge #14: Arrays", () => {
    it("Should return an array of numbers from 1 to x", () => {
        const x = 10;

        expect(generateArray(x).length).toEqual(10);
    });

    it("Should add the first and last indexes of generated array", () => {
        const x = 10;
        const myArray = generateArray(x);

        expect(sumFirstAndLast(myArray)).toEqual(11);
    });

    it("Should return an array of all even numbers from a generated array", () => {
        const x = 10;
        const myArray = generateArray(x);

        expect(getEvenNumbers(myArray)).toEqual([2, 4, 6, 8, 10]);
    });

    it("Should return the sum of all the items in a generated array", () => {
        const x = 10;
        const myArray = generateArray(x);

        expect(sumArray(myArray)).toEqual(55);
    });

    it("Should return an array of numbers that have been multiplied by a specified multiple", () => {
        const x = 10;
        const myArray = generateArray(x);
        const multiple = 2;

        expect(multiplyArrayValues(myArray, multiple)).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
    });

    it("Should return an array of all items from a generated array greater than a specified number", () => {
        const x = 10;
        const myArray = generateArray(x);
        const greaterThanNumber = 5

        expect(getItemsOverNumber(myArray, greaterThanNumber)).toEqual([6, 7, 8, 9, 10]);
    });

    it("Should filter duplicate entries out of an array", () => {
        let myArray = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

        expect(removeDuplicates(myArray)).toEqual(["Hare", "Krishna", ":-O"]);
    });
});





