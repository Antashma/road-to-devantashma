export const menu = {
    size: {
        minSelections: 1,
        maxSelections: 1,
        sizeAffectsPrep: false,
        tempAffectsPrep: false,
        list: [
            {
                id: 0, 
                name: "small", 
                price: 1.50, 
                shorthand: "s", 
                prepTime: 1,
            },
            {
                id: 1, 
                name: "medium", 
                price: 2.00, 
                shorthand: "m",
                prepTime: 1,
            },
            {
                id: 2,
                name: "large", 
                price: 2.50, 
                shorthand: "l",
                prepTime: 1,
            }
        ]
    },
    temp: {
        minSelections: 1,
        maxSelections: 1,
        sizeAffectsPrep: false,
        tempAffectsPrep: false,
        list: [
            {
                id: 0, 
                name: "hot", 
                price: 0, 
                shorthand: null,
                prepTime: 5,
            },
            {
                id: 1, 
                name: "iced", 
                price: 0.25, 
                shorthand: null,
                prepTime: 1,
            },
        ]
    },
    brew: {
        minSelections: 1,
        maxSelections: 1,
        sizeAffectsPrep: true,
        tempAffectsPrep: false,
        list: [
            { 
                id: 0, 
                name: "light",
                price: 0, 
                shorthand: "lite",
                prepTime: 2,
            },
            {
                id: 1, 
                name: "medium", 
                price: 0, 
                shorthand: "med",
                prepTime: 2,
            },
            {
                id: 2, 
                name: "dark", 
                price: 0, 
                shorthand: "dark",
                prepTime: 2,
            },
            {
                id:3, 
                name: "decaf", 
                price: 0, 
                shorthand: "dcf",
                prepTime: 2,
            }
        ]
    },
    milk: {        
        minSelections: 0,
        maxSelections: 1,
        sizeAffectsPrep: true,
        tempAffectsPrep: false,
        lists: [
            {
                id:0, 
                name: "non-fat", 
                price: 0, 
                shorthand: "nf",
                prepTime: 2,
            },
            {
                id:1, 
                name: "whole", 
                price: 0, 
                shorthand: "w",
                prepTime: 2,
            },
            {
                id:2, 
                name: "low-fat", 
                price: 0, 
                shorthand: "lf",
                prepTime: 2,
            },
            {
                id:3, 
                name: "almond", 
                price: 0.50, 
                shorthand: "a",
                prepTime: 2,
                prepTime: 2,
            },
            {
                id:4, 
                name: "oat", 
                price: 0.50, 
                shorthand: "o",
                prepTime: 2,
            },
            {
                id:5, 
                name: "soy", 
                price: 0.50, 
                shorthand: "s",
                prepTime: 2,
            }
        ]
    },
    syrups: {
        minSelections: 0,
        maxSelections: 5,
        sizeAffectsPrep: true,
        tempAffectsPrep: false,
        list: [
            {
                id:0, 
                name: "caramel", 
                price: 0.25, 
                shorthand: "cr",
                prepTime: 1,
            },
            {
                id:1, 
                name: "vanilla", 
                price: 0.25, 
                shorthand: "v",
                prepTime: 1,
            },
            {
                id:2, 
                name: "hazelnut", 
                price: 0.25, 
                shorthand: "hz",
                prepTime: 1,
            },
            {
                id:3, 
                name: "mocha", 
                price: 0.25, 
                shorthand: "m",
                prepTime: 1,
            },
            {
                id:4, 
                name: "raspberry", 
                price: 0.25, 
                shorthand: "r",
                prepTime: 1,
            },
            {
                id:5, 
                name: "classic", 
                price: 0.25, 
                shorthand: "cl",
                prepTime: 1,
            },
        ]
    },
    toppings: {
        minSelections: 0,
        maxSelections: 4,
        sizeAffectsPrep: false,
        tempAffectsPrep: false,
        list: [
            {
                id:0, name: "cinnamon", 
                price: 0, 
                shorthand: "cinn",
                prepTime: 3,
            },
            {
                id:1, 
                name: "whipped cream", 
                price: 0, 
                shorthand: "wc",
                prepTime: 3,
            },
            {
                id:2, 
                name: "caramel drizzle", 
                price: 0, 
                shorthand: "crdr",
                prepTime: 5,
            },
            {
                id:3, 
                name: "mocha drizzle", 
                price: 0, 
                shorthand: "mdr",
                prepTime: 5,
            },
            {
                id:4, 
                name: "cocoa", 
                price: 0, 
                shorthand: "coco",
                prepTime: 3
            },
        ]
    }
}


export { menu }