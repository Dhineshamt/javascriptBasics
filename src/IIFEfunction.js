/* Simple IIFE function */
(() => {
    console.log("Simple IIFE function");
})();
/* Output: Simple IIFE function */

/* IIFE function with parameters */
((...data) => { //Used rest parameter
    let [date, name] = data; //Used array destructure
    console.log(date, name);
}) (new Date(), 'Dhinesh');  //Used rest parameter
/* Output: 2020-03-27T20:49:56.214Z*/

/* IIFE function that returns a value */
let func = (() => {
    let num = 1;
    return 10;
}) ();
console.log(func);
/* Output: 10 */

