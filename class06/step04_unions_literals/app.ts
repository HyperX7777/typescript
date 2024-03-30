let myname: string | null;

myname = null;
console.log(myname);

myname = "zia";
console.log(myname);

// myname = undefined; // Error
// myname = 12; // Error

let myAge: string | number;

myAge = 16; // narrowing
console.log(myAge);

// console.log(myAge.toLowerCase()); // Error

myAge = "Dont Know"; // narrowing
console.log(myAge);

console.log(myAge.toString()); // common to both types 
                               // can be called even without narrowing

console.log(myAge.toLowerCase()); // Can be called only on string 
                                 // because of narrowing

let newAge = Math.random() > 0.6 ? "Khan": 60;

// newAge.toLowerCase(); //Error: Transpiler cannot narrow

if (newAge === "Khan") {
    // Type of newAge: string
    console.log(newAge.toUpperCase()); // Can be called
}

if(typeof newAge === "string"){
    // Type of newAge: string
    console.log('Line 39' , newAge.toUpperCase()); // Can be called
}

// below code means = ager new age ki type string ho toh uppercase krdo else usey number pr fix krdo

typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number


let age: number | "died" | "unknown";

age = 77; // OK
age = "died"; // OK
age = "unknown"; // OK
// age = "living"; // Error


let zia: "zia";

zia = "zia";
// zia = "khan"; // Error

let yourName = Math.random() > 0.6 ? "Hira Khan" : undefined;

console.log(yourName);

if (yourName) {
    console.log(yourName.toUpperCase()); // Ok: string
}

// yourName.toUpperCase(); // Error: Object is possibly 'undefined'.

yourName?.toUpperCase(); // OK

// You can also define a type alias
type RawData = boolean | number | string | null | undefined;

let data: RawData; // can then give any type of data

// You can even combine them

type Id = number | string;

type IdMaybe = Id | undefined | null;

