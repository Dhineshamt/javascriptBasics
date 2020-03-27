
/* 1. spread syntax in array */
let arr1 = [10,20,30];
let arr2 = [40,50,60];
let arr3 = [...arr1, ...arr2];
console.log(arr3);
/* Output: [ 10, 20, 30, 40, 50, 60 ] */

/* 2. spread syntax in function */
function spread1Function(price1, price2, price3) {
    console.log(price1, price2, price3);
}
let carPrices = [100, 200, 300];
spread1Function(...carPrices);
/* Output: 100 200 300 */

/* 3. spread syntax and rest parameter in a single function */
function spread2Function(price1, price2, price3, ...lastTwoPrice) {
    lastTwoPrice.forEach(price => console.log(price));
}
let prices = [100, 200, 300,400, 500];
spread2Function(...prices);
/*Output:
  400
  500 */