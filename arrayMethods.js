//working with arrays;

const items = [
  { name: "bike", price: 100 },
  { name: "tv", price: 200 },
  { name: "album", price: 10 },
  { name: "book", price: 5 },
  { name: "phone", price: 500 },
  { name: "computer", price: 1000 },
  { name: "keyboard", price: 25 },
];

// they dont change the underlined objects;
const filteredItens = items.filter((item) => item.price <= 100);
console.log(filteredItens);

const itemNames = items.map((item) => item.price);
console.log(itemNames);

const foundItem = items.find((item) => {
  return item.name === "book";
});

console.log(foundItem);

items.forEach((item) => {
  console.log(item.name);
});

//checks if one item is above the condiction
const hasInexpensiveItens = items.some((item) => {
  return item.price <= 0;
});
console.log(hasInexpensiveItens);

//check if all values are above the condiction
const hasExpensiveItens = items.every((item) => {
  return item.price >= 2;
});
console.log(hasExpensiveItens);

//sum all the values
const total = items.reduce((currentTotal, item) => {
  return item.price + currentTotal;
}, 0);
console.log(total);

// also check the includes method
// const includesTwo = items.includes(2);
// console.log return true or false;
