const { inventory } = require("./data.js")

const {
    isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice
} = require("./functions.js")

for (const inventoryItem of inventory) {
    if (isClothing(inventoryItem)) {
        message = `${inventoryItem.description} is a clothing product`
    }
    else if (isBargain(inventoryItem)) {
        message = `${inventoryItem.description} is currently on sale`
    }
    else if (isSurfboard(inventoryItem)) {
        message = `${inventoryItem.description} is a surfboard`
    }
    else if (isGear(inventoryItem)) {
        message = `${inventoryItem.description} is a surfing gear product`
    }
    else message = ""
    if (message != "") {
        console.log(message)
    }
}

console.log("\n------------------------\n")

for (const product of inventory) {
    const modifiedData = convertDataForAccounting(product)
    console.log(modifiedData)
}

console.log("\n------------------------\n")

const averagePrice = calculateAveragePrice(inventory)

console.log(averagePrice)