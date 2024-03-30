"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("🚀 ~ file: app.ts:1 ~ HyperX from app.ts");
const first_js_1 = __importDefault(require("./first.js"));
console.log("🚀 ~ file: app.ts:4 ~ hx_1:", first_js_1.default);
const second_js_1 = require("./second.js");
console.log("🚀 ~ file: app.ts:6 ~ hx_2:", second_js_1.hx_2);
const second_js_2 = require("./second.js");
console.log("🚀 ~ file: app.ts:8 ~ person, fruits:", second_js_2.person, second_js_2.fruits);
