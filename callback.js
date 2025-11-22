
const product = [
  { name: "Laptop", price: 1000 },
  { name: "Mouse", price: 20 },
  { name: "Monitor", price: 300 },
  { name: "Keyboard", price: 45 },
  { name: "Headphones", price: 75 },
  { name: "USB Cable", price: 5 }
];

function Products(productArr) {
  const productNames = productArr.map(product => product.name);
  
  console.log("Product Names:", productNames);
  
  productArr.forEach(product => {
     priceStatus = product.price >= 50 ? "above $50" : "below $50";
    console.log(`${product.name} is ${priceStatus}`);
  });
}

Products(product);