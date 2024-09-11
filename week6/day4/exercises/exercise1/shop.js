const products = require('./products');

function findProductByName(productName) {
    const product = products.find(p => p.name === productName);
    if (product) {
        console.log(`Product found: ${product.name}, Price: ${product.price}, Category: ${product.category}`);
    } else {
        console.log(`Product not found: ${productName}`);
    }
}
// Test the function with different product names
findProductByName('Laptop');
findProductByName('Shirt');
findProductByName('Phone');
findProductByName('Watch');
findProductByName('Tablet');// This product doesn't exist