"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const calculator_1 = __importDefault(require("./calculator"));
let calc = new calculator_1.default();
console.log(calc.add(2, 2));
