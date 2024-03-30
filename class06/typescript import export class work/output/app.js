"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("🚀 ~ file: app.ts:1 ~ HyperX from app.ts");
const first_1 = __importDefault(require("./first"));
console.log("🚀 ~ file: app.ts:4 ~ hx_1:", first_1.default);
const second_1 = require("./second");
console.log("🚀 ~ file: app.ts:6 ~ hx_2:", second_1.hx_2);
const second_2 = require("./second");
console.log("🚀 ~ file: app.ts:8 ~ person, fruits:", second_2.person, second_2.fruits);
