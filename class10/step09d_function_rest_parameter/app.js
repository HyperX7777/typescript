"use strict";
// Named function with Rest parameters
function buildName(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
;
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
// Testing
function buildName2(firstName, ...restOfName) {
    console.log(firstName + " " + restOfName.join(" "));
}
;
var employeeName1 = buildName2("Joseph", "Samuel", "Lucas", "MacKinzie");
buildName2('Ali', 'Taha');
// Testing 2
function buildMsg(firstName, ...restOfMsg) {
    console.log(firstName + ", " + restOfMsg.join(" "));
}
;
var messages = buildMsg("Ali", "what's wrong with you?", "Please tell me bitch", "Huh??");
// Anonymous function type with Rest parameters
var buildNameFun = function (firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
};
// Note: Rest, optional and default parameters can only
// Be at the end of the parameter list
