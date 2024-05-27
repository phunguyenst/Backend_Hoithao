const expressValidator = require("express-validator");
const { check } = expressValidator;

let validateRegister = [
    check("email", "Invalid email").isEmail().trim(),

    check("password", "Invalid password. Password must be at least 2 chars long")
    .isLength({ min: 2 }),

    check("DiaChi", "Invalid address").trim().notEmpty(),

    check("SoDienThoai", "Invalid phone number").matches(/^\d{10,11}$/)
];

let validateLogin = [
    check("email", "Invalid email").isEmail().trim(),

    check("password", "Invalid password").notEmpty()
];

module.exports = {
    validateRegister: validateRegister,
    validateLogin: validateLogin
};
