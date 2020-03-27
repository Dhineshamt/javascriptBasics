/* Simple IIFE function */
(() => {
    console.log("Simple IIFE function");
})();
/* Output: Simple IIFE function */

/* IIFE function with parameters */
((date) => {
    console.log(date);
}) (new Date());
/* Output: 2020-03-27T20:49:56.214Z*/

/* IIFE function that returns a value */
let func = (() => {
    let num = 1;
    return 10;
}) ();
console.log(func);
/* Output: 10 */

