const passportLocal = require("passport-local");
const passport = require("passport");
const loginService = require("../models/login.model");
const LocalStrategy = passportLocal.Strategy;
let initPassportLocal = () => {
    passport.use("localLogin", new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
        },
        async (email, password, done) => {
            try {
                const user = await loginService.findUserByEmail(email);
                if (!user) return done(null, false, { message: `This user email "${email}" doesn't exist` });

                // So sánh mật khẩu không được mã hóa
                if (user.password === password) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: "Incorrect password" });
                }
            } catch (err) {
                return done(err);
            }
        }));
};

passport.serializeUser(function(user, done) {
    done(null, user.MaTaiKhoan);
});

passport.deserializeUser(async function(id, done) {
    try {
        const user = await loginService.findUserById(id);
        done(null, user);
    } catch (error) {
        done(error);
    }
});

module.exports = initPassportLocal;
