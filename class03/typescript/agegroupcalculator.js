"use strict";
let age = 17; // The age
if (age >= 0 && age < 18) { // If the age is greater than or equal to 0 and smaller than 18 it'll be teenager
    console.log("Teenagers");
}
else if (age >= 18 && age < 40) { // If the age is greater than or equal to 18 and smaller than 40 it'll be an adult
    console.log("Adult");
}
else { // If it matches none than it'll mark it as old for example 70 or anything above than 40
    console.log("Old");
}
