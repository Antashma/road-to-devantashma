import customers from "./customers.js";
import menu from "./menu.js";

function generateOrderTicket(customer) {
    const { name, faveDrink } = customer;

    let totalPrice = 0; 

    const getMenuItemValue = (menuItem, customerItem) => {
        if (!customerItem) return "X";
        
        const itemData = menuItem.find(item => item.name === customerItem);
        if (!itemData) throw new Error(`"${customerItem}" data not found!`)
        
        totalPrice += itemData.price;
        return itemData.shorthand;
    }

    const getMenuListItemValues = (menuItemList, cusomterItemList) => {
        
        if (cusomterItemList.length === 0) return "X";
        else if (cusomterItemList.length > 0) {
            let result = "";
            for (let customerItemName of cusomterItemList) {
                const itemData = menuItemList.find(s => s.name === customerItemName);
                if (!itemData) throw new Error(`"${customerItemName}" data not found!`)
                totalPrice += itemData.price;
                result += result === "" ? itemData.shorthand : ` + ${itemData.shorthand}`;
            }
            return result;

        } else return null;
    }
    

    return {
        name,
        size: getMenuItemValue(menu.size, faveDrink.size),
        temp: getMenuItemValue(menu.temp, faveDrink.temp),
        brew: getMenuItemValue(menu.brew, faveDrink.brew),
        milk: getMenuItemValue(menu.milk, faveDrink.milk),
        syrups: getMenuListItemValues(menu.syrups, faveDrink.syrups),
        toppings: getMenuListItemValues(menu.toppings, faveDrink.toppings),
        totalPrice,
    }
}


const genOrderBtn = document.querySelector("#generate-order-btn");

genOrderBtn.addEventListener("click", () => {
    console.log("order genrated!");
});

let currentOrderNum = 1;
function fillOrderTicketComponent(orderTicketData) {
    
    const orderNum = document.querySelector("#order-num span");
    const orderName = document.querySelector("#order-name span");
    const orderSize = document.querySelector("#order-size span");
    const orderTemp = document.querySelector("#order-temp span");
    const orderBrew = document.querySelector("#order-brew span");
    const orderMilk = document.querySelector("#order-milk span");
    const orderSyrups = document.querySelector("#order-syrups span");
    const orderToppings = document.querySelector("#order-toppings span");
    const orderPrice = document.querySelector("#order-price span");
    
    orderNum.textContent = currentOrderNum++;
    orderName.textContent = orderTicketData.name;
    orderSize.textContent = orderTicketData.size;
    orderTemp.textContent = orderTicketData.temp;
    orderBrew.textContent = orderTicketData.brew;
    orderMilk.textContent = orderTicketData.milk;
    orderSyrups.textContent = orderTicketData.syrups;
    orderToppings.textContent = orderTicketData.toppings;
    orderPrice.textContent = orderTicketData.totalPrice;


    return;
}

const errol = customers[0]
let errolTicket = generateOrderTicket(errol);
fillOrderTicketComponent(errolTicket);

//need a dict to ref shorthand meanings
//hide & show toggle

const shorthandRef = {
    sizes: ["l = large", "m = medium", "s = small"],
    brews: ["lite = light", "med = medium", "dark = (same)", "xcaf = decaf"],
    temps: ["hot = (same)", "iced = (same)"],
    milks: ["lf = low-fat", "nf = non-fat", "w = whole", "a = almond", "o = oat", "s = soy", "X = no milk"],
    syrups: ["cr =  caramel", "v = vanilla", "hz = hazelnut", "m = mocha", "r = raspberry", "cl = classic"],
    toppings: ["cinn = cinnamon", "wc = whipped cream", "crdr = caramel drizzle", "mdr = mocha drizzle"]
}
    
