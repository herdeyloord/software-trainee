 products.forEach((item) => {
  console.log(item.price);
 });

 products.forEach((item) => {
const product = `Product: ${item.product}, Price: ${item.price}`

console.log(product)

 }

   let sum = 0;
products.forEach((item) => {
  if (typeof item.price === 'number') {
    sum += item.price;
  }
});
console.log(`Sum of prices: ${sum}`);

const prices = products.map((item) => item.price);
console.log(prices);

const productsPrices = products.filter((item) => typeof item.price === 'number');
console.log(productsPrices);

const sum = products
  .map((item) => item.price)
  .filter((price) => typeof price === 'number')
  .reduce((acc, curr) => acc + curr, 0);
console.log(`Sum of prices : ${sum}`);

const sum = products.reduce((acc, item) => {
  if (typeof item.price === 'number') {
    return acc + item.price;
  }
  return acc;
}, 0);
console.log(`Sum of prices : ${sum}`);

const productWithoutPrice = products.find((item) => typeof item.price !== 'number');
console.log(productWithoutPrice);

const index = products.findIndex((item) => typeof item.price !== 'number');
console.log(index);

const productsWithoutPrice = products.some((item) => typeof item.price !== 'number');
console.log(productsWithoutPrice);

const allHavePrice = products.every((item) => typeof item.price === 'number');
console.log(allHavePrice);


