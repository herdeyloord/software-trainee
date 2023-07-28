const products = [
    {
         product: 'banana', 
         price: 3
    },
    { 
        product: 'mango', 
        price: 6 
    },
    { 
        product: 'potato', 
        price: ' ' 
    },
    {
         product: 'avocado', 
         price: 8 
    },
    { 
        product: 'coffee', 
        price: 10 
    },
    {
         product: 'tea', 
         price: '' 
        },
]


console.log("Item prices are: ")
products.forEach((item) => {
    console.log(item.price);
});

console.log("list of products: ")
products.forEach((item) => {
    console.log( `Product: ${item.product}, Price: ${item.price}`);
});
  
let sum = 0;

products.forEach((item) => {
    if (typeof item.price === 'number') {
        sum += item.price;
    }
});

console.log(`Sum of prices: ${sum}`);

const prices = products.map((item) => item.price);
console.log("prices are: ",prices);

const productsPrices = products.filter((item) => typeof item.price === 'number');
console.log("Product Prices: ",productsPrices);

const sumPrices = products
.map((item) => item.price)
.filter((price) => typeof price === 'number')
.reduce((acc, curr) => acc + curr, 0);

console.log(`Sum of prices : ${sumPrices}`);

const sumP = products.reduce((acc, item) => {
    if (typeof item.price === 'number') {
        return acc + item.price;
    }
    return acc;
}, 0);

console.log(`Sum of prices : ${sumP}`);

const productWithoutPrice = products.find((item) => typeof item.price !== 'number');
console.log(productWithoutPrice);

const index = products.findIndex((item) => typeof item.price !== 'number');
console.log(index);

const productsWithoutPrice = products.some((item) => typeof item.price !== 'number');
console.log(productsWithoutPrice);

const allHavePrice = products.every((item) => typeof item.price === 'number');
console.log(allHavePrice);