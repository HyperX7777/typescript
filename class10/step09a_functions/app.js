"use strict";
// Note: All parameters are required
// Named function
function add(x, y) {
    return x + y;
}
console.log(add(7, 5));
// Anonymous function
let mymulti = function (x, y) {
    return x * y;
};
console.log(mymulti(10, 5));
// Anonymous function with explict type
let myAdd2 = function (x, y) {
    return x + y;
};
console.log(myAdd2(30, 50));
// Type names dont matter
let myAdd3 = function (x, y) {
    return x + y;
};
// Lambda functions															
let myAdd4 = (a, b) => a + b;
function greeter(anything) {
    //...
}
;
greeter(() => console.log("Test"));
