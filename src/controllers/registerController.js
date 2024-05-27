const registerService = require("../models/register.model");
const { validationResult } = require("express-validator");

const getRegisterPage = (req, res) => {
    return res.render("register.ejs");
};

const createNewUser = async (req, res) => {
    try {
        let data = {
            TenTaiKhoan: req.body.TenTaiKhoan,
            email: req.body.email,
            password: req.body.password,
            // DiaChi: req.body.DiaChi,
            // SoDienThoai: req.body.SoDienThoai // Chuyển dữ liệu số điện thoại từ yêu cầu HTTP vào đây
        };
        // Tạo một người dùng mới
        await registerService.createNewUser(data);
        return res.status(200).json({
            message: "A user is created successfully"
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
};

module.exports = {
    getRegisterPage: getRegisterPage,
    createNewUser: createNewUser
};
