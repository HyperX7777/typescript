"use strict";
let myname;
myname = null;
console.log(myname);
myname = "zia";
console.log(myname);
// myname = undefined; // Error
// myname = 12; // Error
let myAge;
myAge = 16; // narrowing
console.log(myAge);
// console.log(myAge.toLowerCase()); // Error
myAge = "Dont Know"; // narrowing
console.log(myAge);
console.log(myAge.toString()); // common to both types 
// can be called even without narrowing
console.log(myAge.toLowerCase()); // Can be called only on string 
// because of narrowing
let newAge = Math.random() > 0.6 ? "Khan" : 60;
// newAge.toLowerCase(); //Error: Transpiler cannot narrow
if (newAge === "Khan") {
    // Type of newAge: string
    console.log(newAge.toUpperCase()); // Can be called
}
if (typeof newAge === "string") {
    // Type of newAge: string
    console.log('Line 39', newAge.toUpperCase()); // Can be called
}
// below code means = ager new age ki type string ho toh uppercase krdo else usey number pr fix krdo
typeof newAge === "string"
    ? newAge.toUpperCase() // Ok: string
    : newAge.toFixed(); // Ok: number
let age;
age = 77; // OK
age = "died"; // OK
age = "unknown"; // OK
// age = "living"; // Error
let zia;
zia = "zia";
// zia = "khan"; // Error
let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;
console.log(yourName);
if (yourName) {
    console.log(yourName.toUpperCase()); // Ok: string
}
// yourName.toUpperCase(); // Error: Object is possibly 'undefined'.
yourName === null || yourName === void 0 ? void 0 : yourName.toUpperCase(); // OK
let data; // can then give any type of data
