function filterByCategory(products) {
    return (category) => {
        return products.filter((product) => {
            return product.category === category
        })
    }
}


var products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" }
]

var clothingProducts = filterByCategory(products)("Clothing")

console.log(clothingProducts);