let myname: unknown = "Zia";
console.log((myname as string).length);
let myname1: unknown = "HyperX";
console.log((<string> myname1).length)