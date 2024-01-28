const isBargain = (inventoryItem) => {
    if (inventoryItem.price < 50.00) {
        returnValue = true
    }
    else returnValue = false
    return returnValue
}

const isClothing = (inventoryItem) => {
        if (inventoryItem.type === "clothing") {
        returnValue = true
    }
    else returnValue = false
    return returnValue
}

const isGear = (inventoryItem) => {
    if (inventoryItem.type === "surfboard") {
        returnValue = true
    }
    else returnValue = false
    return returnValue
}

const isSurfboard = (inventoryItem) => {
    if (inventoryItem.type === "surfboard") {
        returnValue = true
    }
    else returnValue = false
    return returnValue
}

const convertDataForAccounting = (product) => {
    const allUpperCase = `${product.description.toUpperCase()} - ${product.type.toUpperCase()} - ${product.price}`
    return allUpperCase
}

const calculateAveragePrice = (inventory) => {
    let allPrices = 0
    for (product of inventory) {
        allPrices += product.price
    }
    const averagePrice = allPrices / inventory.length
    return averagePrice
}

module.exports = {
    isBargain, isClothing, isGear,
    isSurfboard, convertDataForAccounting,
    calculateAveragePrice
}