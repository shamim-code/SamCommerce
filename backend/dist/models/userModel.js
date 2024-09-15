"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerSchema = exports.loginSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.loginSchema = joi_1.default.object({
    email: joi_1.default.string().email().required().message('Please enter your email address'),
    password: joi_1.default.string().min(8).required()
});
exports.registerSchema = joi_1.default.object({
    name: joi_1.default.string().required().message('Please enter your name'),
    email: joi_1.default.string().email().required().message('Please enter your email address'),
    phone: joi_1.default.number().required().message('Please enter your phone number'),
    password: joi_1.default.string().min(8).required().message('Password should be at least 8 characters long'),
    confirmPassword: joi_1.default.ref('password'),
});
