import {
} from "./challenge-15";

describe("Challenge #15: Objects", () => {

    /**
     * Create an object to hold information on your favorite recipe. 
     * It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
     * Add 3 ingredients to the recipe.   
    */
    it("Should return an object representing a recipe", () => {
        const recipe;

        expect(typeof recipe).toBe("object");

        expect(recipe).toHaveProperty("title");
        expect(typeof recipe.title).toBe("string");

        expect(recipe).toHaveProperty("servings");
        expect(typeof recipe.servings).toBe("number");

        expect(recipe).toHaveProperty("ingredients");
        expect(Array.isArray(recipe.ingredients)).toBe(true);
    });

    /**
     * Create a function that accepts an Object (recipe) and a string (newIngredient) arguments
     * and adds an ingredient to that recipe object
     */
    it("Should alter an object property", () => {
        const recipe;
        const newIngredient;

        expect(recipe.ingredients.length).toBe(4);
        expect(recipe.ingredients.includes(newIngredient)).toBe(true);
    });

    /**
     * Create a function that accepts Object (recipe) and a boolean (isVegeterian) arguments
     * and adds the boolean property isVegeterian to that recipe object
     */
    it("Should add a property to an object", () => {
        const recipe;
        const isVegeterian;

        expect(recipe.isVegeterian).toBe(isVegeterian);
    });

    /**
     * Create a function that accepts a string (name) and a number (age) arguments
     * and returns a "User" object
     */
    it("Should return an object representing a user", () => {
        const name = "bob";
        const age = 32;
        const user;

        expect(typeof user).toBe("object");

        expect(user).toHaveProperty("name");
        expect(typeof user.name).toBe("string");
        expect(user.name).toBe(name);

        expect(user).toHaveProperty("age");
        expect(typeof recipe.servings).toBe("number");
        expect(user.age).toBe(age);
    });

    /**
     * Create a function that accepts a string (name) and a number (age) arguments
     * and returns a "User" object. This object should have a property setAge which is a function.
     * setAge takes a number (newAge) argument and alters the age of the user
     */
    it("Should return an object representing a user", () => {
        const name = "bob";
        const age = 32;
        const user;

        expect(typeof user).toBe("object");

        expect(user).toHaveProperty("name");
        expect(typeof user.name).toBe("string");
        expect(user.name).toBe(name);

        expect(user).toHaveProperty("age");
        expect(typeof recipe.servings).toBe("number");
        expect(user.age).toBe(age);

        // const newAge = 33;
        // user.setAge(newAge);

        expect(user.age).toBe(newAge);
    });
});





