"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
let answers = await inquirer_1.default.prompt([{
        name: "age",
        type: "number",
        message: "Enter your Age:"
    }
]);
console.log("Insha Allah, in " + (30 - answers.age) + " years you will be 30 years old.");
