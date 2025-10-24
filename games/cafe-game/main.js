import customers from "./customers.js";
import menu from "./menu.js";
import shorthandRef from "./shorthandRef.js";

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

// TEST
const errol = customers[0]
let errolTicket = generateOrderTicket(errol);
fillOrderTicketComponent(errolTicket);

// need a dict to ref shorthand meanings
// hide & show toggle
const shRefElement = document.querySelector("#sh-ref");
function toggleSHRef() {
    shRefElement.classList.toggle("show");
}
const shRefBtn = document.querySelector("#shorthand-ref--container button");
shRefBtn.addEventListener("click", toggleSHRef);

function fillShorthandRefEntry(shElement) {
    const { id } = shElement;

    const refKey = id.split("-")[1];
    document.querySelector(`#${id} div`).innerHTML = shorthandRef[refKey].join("<br />");
}

for (let child of shRefElement.children) {
    fillShorthandRefEntry(child);
}

function handleDSBtnClick(e) {
    const { value } = e.target;
    console.log(value);
}

function createDrinkStationButtons(menuCategory, dsElementId) {
    menuCategory.forEach(item => {
        const btn =  document.createElement("button");
        btn.textContent = item.name;
        btn.value = item.name;
        btn.addEventListener("click", (e) => handleDSBtnClick(e))
        document.querySelector(dsElementId).append(btn);
    });
}

function createCupSizeButtons(cupElementId){
    menu.size.forEach(size => {
        const btn = document.createElement("button");
        btn.textContent = size.name;
        btn.value = size.name;
        
        btn.addEventListener("click", (e) => handleDSBtnClick(e))

        document.querySelector(cupElementId).append(btn);
    });
}

createCupSizeButtons("#hot-cups");
createCupSizeButtons("#iced-cups");

createDrinkStationButtons(menu.brew, "#ds-brews");
createDrinkStationButtons(menu.milk, "#ds-milks");
createDrinkStationButtons(menu.syrups, "#ds-syrups");
createDrinkStationButtons(menu.brew, "#ds-toppings");
