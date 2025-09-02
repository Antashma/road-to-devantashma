import utils from "./tiny-library";

const { 
    addBook, 
    findBook, 
    removeBook, 
    countBooksByAuthor 
} = utils;

describe("addBook function", () => {

    it("increases library length", () => {
        const testLibrary = [
            {title: "ABC & 123" , author: "Alfa Num'Ral"},
            {title: "The Heart Mirror" , author: "Lola Baker"},
            {title: "Falling Up" , author: "Oppo Seet"},
        ];

        actual = addBook(testLibrary, {title: "Test", author: "Tester"});

        expect(testLibrary.length).toBeGreaterThan(3);
        expect(testLibrary.length).toBe(4);

    });
});

describe("findBook function", () => {
    const testLibrary = [
            {title: "ABC & 123" , author: "Alfa Num'Ral"},
            {title: "The Heart Mirror" , author: "Lola Baker"},
            {title: "Falling Up" , author: "Oppo Seet"},
    ];

    it("an existing book returns the correct object", () => {
        actual = findBook(testLibrary, "The Heart Mirror");
        expect(actual).toEqual({title: "The Heart Mirror" , author: "Lola Baker"});
    });
    
    it("a non-existing book returns null", () => {
        actual = findBook(testLibrary, "Apples");
        expect(actual).toBe(null);
    });
})

describe("removeBook function", () => {
    const testLibrary = [
        {title: "ABC & 123" , author: "Alfa Num'Ral"},
        {title: "The Heart Mirror" , author: "Lola Baker"},
        {title: "Falling Up" , author: "Oppo Seet"},
    ];

    it("shortens the library and removes the correct book", () => {
        removeBook(testLibrary, "Falling Up");
        expect(testLibrary.length).toBe(2);

        const actual = findBook(testLibrary, "Falling Up");
        expect(actual).toBe(null);
    })
})

describe("countBooksByAuthor", () => {
    const testLibrary = [
        {title: "ABC & 123" , author: "Alfa Num'Ral"},
        {title: "The Heart Mirror" , author: "Lola Baker"},
        {title: "Falling Up" , author: "Oppo Seet"},
        {title: "Downed Arisen" , author: "Oppo Seet"},
    ];

    it("gives the right number", () => {
        const actual = countBooksByAuthor(testLibrary, "Oppo Seet");
        expect(actual).toBe(2);
    })
})