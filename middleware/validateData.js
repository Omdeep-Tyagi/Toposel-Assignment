const Joi = require("joi");


const registerSchema = Joi.object({
    username: Joi.string().min(2).max(30).required(),
    password: Joi.string().min(6).required(),
    full_name: Joi.string().min(2).max(50).required(),
    gender: Joi.string().valid("Male", "Female", "Other").required(),
    date_of_birth: Joi.string().pattern(/^\d{2}-\d{2}-\d{4}$/).required(), // Format: DD-MM-YYYY
    country: Joi.string().min(2).max(50).required(),
    email: Joi.string().email().required(), // Ensures valid email format
});


module.exports.validateRegister = (req, res, next) => {   
    const { error } = registerSchema.validate(req.body);
    if (error) {
        res.status(400);
        throw new Error(error.details[0].message);
    }
    next();
};

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

module.exports.validateLogin = (req, res, next) => {
    const { error } = loginSchema.validate(req.body);
    if (error) {
        res.status(400);
        throw new Error(error.details[0].message);
    }
    next();
};

const searchSchema = Joi.object({
    username: Joi.string().optional(),
    email: Joi.string().email().optional()
}).or("username", "email"); // At least one must be present

module.exports.validateSearch = (req, res, next) => {
    const { error } = searchSchema.validate(req.query);
    if (error) {
        res.status(400);
        throw new Error(error.details[0].message);
    }
    next();
};
