import Joi from "joi";

export const loginSchema = Joi.object({
    email: Joi.string().email().required().message('Please enter your email address'),
    password: Joi.string().min(8).required()
})


export const registerSchema = Joi.object({
    name: Joi.string().required().message('Please enter your name'),
    email: Joi.string().email().required().message('Please enter your email address'),
    phone: Joi.number().required().message('Please enter your phone number'),
    password: Joi.string().min(8).required().message('Password should be at least 8 characters long'),
    confirmPassword: Joi.ref('password'),
});