const menu = {
    size: [
        { id: 0, name: "small", price: 1.5, shorthand: "s" },
        { id: 1, name: "medium", price: 2.0, shorthand: "m" },
        { id: 2, name: "large", price: 2.5, shorthand: "l" },
    ],
    temp: [
        { id: 0, name: "hot", price: 0, shorthand: "hot" },
        { id: 1, name: "iced", price: 0.25, shorthand: "iced" },
    ],
    brew: [
        { id: 0, name: "light", price: 0, shorthand: "lite" },
        { id: 1, name: "medium", price: 0, shorthand: "med" },
        { id: 2, name: "dark", price: 0, shorthand: "dark" },
        { id: 3, name: "decaf", price: 0, shorthand: "xcaf" },
    ],
    milk: [
        { id: 0, name: "non-fat", price: 0, shorthand: "nf" },
        { id: 1, name: "whole", price: 0, shorthand: "w" },
        { id: 2, name: "low-fat", price: 0, shorthand: "lf" },
        { id: 3, name: "almond", price: 0.5, shorthand: "a" },
        { id: 4, name: "oat", price: 0.5, shorthand: "o" },
        { id: 5, name: "soy", price: 0.5, shorthand: "s" },
    ],
    syrups: [
        { id: 0, name: "caramel", price: 0.25, shorthand: "cr" },
        { id: 1, name: "vanilla", price: 0.25, shorthand: "v" },
        { id: 2, name: "hazelnut", price: 0.25, shorthand: "hz" },
        { id: 3, name: "mocha", price: 0.25, shorthand: "m" },
        { id: 4, name: "raspberry", price: 0.25, shorthand: "r" },
        { id: 5, name: "classic", price: 0.25, shorthand: "cl" },
    ],
    toppings: [
        { id: 0, name: "cinnamon", price: 0, shorthand: "cinn" },
        { id: 1, name: "whipped cream", price: 0, shorthand: "wc" },
        { id: 2, name: "caramel drizzle", price: 0, shorthand: "crdr" },
        { id: 2, name: "mocha drizzle", price: 0, shorthand: "mdr" },
    ],
};

export default menu;