const express = require("express");
const homePageController = require("../controllers/homePageController");
const registerController = require("../controllers/registerController");
const loginController = require("../controllers/loginController");
const auth = require("../../validation/authValidation");
const passport = require("passport");
const initPassportLocal = require("../controllers/passportLocalController");

initPassportLocal();

let router = express.Router();

// let initWebRoutes = (app) => {
//     router.get("/", loginController.checkLoggedIn, homePageController.getHomePage);
//     router.post("/logout", loginController.postLogOut);

//     router.get("/register", registerController.getRegisterPage );
//     router.post("/register-new-user", registerController.createNewUser);

//     router.get("/login",loginController.checkLoggedOut, loginController.getLoginPage);
//     router.post("/login", loginController.handleLogin);
//     return app.use("/", router);
// };
let initWebRoutes = (app) => {
    // Route cho trang chính
    router.get("/", loginController.checkLoggedIn, (req, res) => {
        res.redirect("/homePage");
    });

    // Route cho trang đăng xuất
    router.post("/logout", loginController.postLogOut);

    // Route cho trang đăng ký
    router.get("/signup", registerController.getRegisterPage);
    router.post("/signup", registerController.createNewUser);

    // Route cho trang đăng nhập
    router.get("/login", loginController.checkLoggedOut, loginController.getLoginPage);
    router.post("/login", loginController.handleLogin);

    // Route cho trang homePage
    router.get("/homePage", loginController.checkLoggedIn, homePageController.getHomePage);

    return app.use("/", router);
};

module.exports = initWebRoutes; // Export the initWebRoutes function
