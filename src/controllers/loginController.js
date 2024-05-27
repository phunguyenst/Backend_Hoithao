const passport = require("passport");
const loginService = require("../models/login.model");


let getLoginPage = (req, res) => {
    return res.render("login.ejs");
};

let handleLogin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await loginService.findUserByEmail(email);
        
        if (!user) {
            return res.status(401).json({ message: "User not found" });
        }
        
        // So sánh mật khẩu người dùng với mật khẩu không mã hóa trong cơ sở dữ liệu
        if (user.password !== password) {
            return res.status(401).json({ message: "Incorrect password" });
        }

        // Đăng nhập thành công
        req.login(user, function (err) {
            if (err) {
                return next(err);
            } else {
                return res.status(200).json({ login: true, user }); //bug here
            }
        });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error" });
    }
};

let checkLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect("/");
    }
    next();
};

let postLogOut = (req, res) => {
    req.session.destroy(function(err) {
        return res.redirect("/login");
    });
};

module.exports = {
    getLoginPage: getLoginPage,
    handleLogin: handleLogin,
    checkLoggedIn: checkLoggedIn,
    checkLoggedOut: checkLoggedOut,
    postLogOut: postLogOut
};
