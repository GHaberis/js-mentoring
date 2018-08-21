import {
} from "./challenge-16";

describe("Challenge #16: Objects continued", () => {
    /**
     * Object Methods
     * A method is an Object property that holds a function as it's values.
     * Define a "person" object with the property "getGreeting" which returns
     * "Hello"
    */
    it("can return a greeting from a person", () => {
        expect(person.getGreeting()).toBe('Hello');
    });

    /**
     * When an Object method—looked is called object.method()
     * the keyword "this" in the method's body points at the object it was called on.
     * Define a "person" object with the property "name" equal to "bob" and a 
     * method "getGreeting" which returns "Hello my name is [name]"
    */
    it("can return a greeting including the name of a person", () => {
        expect(person.getGreeting()).toBe('Hello my name is Bob');
    });

    /**
     * Define a "person" object with the property "jobTitle" equal to "programmer" and a 
     * method "getJob" which returns "Hello my my job is [jobTitle]"
    */
    it("can return a job title", () => {
        expect(person.getJob()).toBe('Hello my job is programmer');

        // now change person's job to "super programmer" here

        expect(person.getJob()).toBe('Hello my job is super programmer');
    });

    /**
     * The Object.keys() returns an array of an object's property names
     */
    it("can sum the cost of a pizzas ingredients", () => {
        const pizza = {
            name: "Pizza Napoli",
            ingredients: {
                tomato: {
                    price: "£1"
                },
                garlic: {
                    price: "£1"
                },
                mozarella: {
                    price: "£3"
                },
                anchovies: {
                    price: "£3"
                },
                olives: {
                    price: "£2"
                },
                dough: {
                    price: "£1"
                },
                oil: {
                    price: "£4"
                },
            }
        };

        expect(pizza.getCost()).toBe("£15");
    });
});





