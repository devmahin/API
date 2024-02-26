let product = {
    name: "ExampleProduct",
    category: "Electronics",
    price: 499.99,
    quantity: 100,
    manufacturer: "ExampleManufacturer",
    description: "This is an example product description.",
    reviews: [],
    
    // Method to add a review to the product
    addReview: function(review) {
        this.reviews.push(review);
    },

    // Method to calculate the total value of available products
    calculateTotalValue: function() {
        return this.price * this.quantity;
    },

    // Method to update the quantity of the product
    updateQuantity: function(newQuantity) {
        this.quantity = newQuantity;
    }
};

// console.dir(product)

// let json = JSON.stringify(product)
// console.dir(json)
const name = "https://jsonplaceholder.typicode.com/todos/1";
fetch(name)
      .then(response => response.json())
      .then(json => console.log(json))