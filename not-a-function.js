const inventory = [
    { id: 1, description: "9 ft longboard surfboard", price: 499.99, type: "surfboard" },
    { id: 2, description: "5 ft shortboard surfboard", price: 399.99, type: "surfboard" },
    { id: 3, description: "Full wetsuit with hood and boots", price: 199.99, type: "clothing" },
    { id: 4, description: "Surfboard leash", price: 29.99, type: "gear" },
    { id: 5, description: "Surf wax", price: 9.99, type: "gear" },
    { id: 6, description: "Surfboard fins", price: 39.99, type: "gear" },
    { id: 7, description: "Rashguard shirt", price: 49.99, type: "clothing" },
    { id: 8, description: "Surfboard rack for car", price: 99.99, type: "gear" },
    { id: 9, description: "Beach towel", price: 24.99, type: "clothing" },
    { id: 10, description: "Surfboard repair kit", price: 19.99, type: "gear" }
]

const isSurfboard = (inventoryItem) => {
    if (inventoryItem.type === "surfboard") {
        returnValue = true
    }
    else returnValue = false
    return returnValue
}

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

const printMessage = (message) => {
    if (message != "") {
        console.log(message)
    } 
}

const convertDataForAccounting = (product) => {
    const allUpperCase = `${product.description.toUpperCase()} - ${product.type.toUpperCase()} - ${product.price}`
    return allUpperCase
}

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
    printMessage(message)
}

console.log("\n------------------------\n")

for (const product of inventory) {
    const modifiedData = convertDataForAccounting(product)
    console.log(modifiedData)
}