"use strict";
// Testing
// let doSomething = (callback) => {
//     console.log("Do Something")
//     callback()
// };
// let doSomething2 = () => {
//     console.log("Callback Called")
// };
// doSomething(doSomething2);
function myCallBack(text) {
    console.log("inside myCallback " + text);
}
myCallBack('I wrote Elo');
function callingFunction(initialText, callback) {
    callback(initialText);
}
callingFunction("Testing 123", myCallBack);
