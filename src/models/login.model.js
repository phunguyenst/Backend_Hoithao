const connection = require('../../config/db.config');
const bcrypt = require('bcryptjs');
const bluebird = require('bluebird')

let findUserByEmail = (email) => {
    email = decodeURIComponent(email);

    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * FROM taikhoan WHERE email = ?", email, function(error, rows) {
                if (error) {
                    reject(error);
                } else {
                    if (rows.length > 0) {
                        let user = rows[0];
                        resolve(user);
                    } else {
                        reject({ message: "User not found" });
                    }
                }
            });
        } catch (e) {
            reject(e);
        }
    });
};

let compareUserPassword = (user, password) => {
    return user.password === password;
};

let findUserById = (MaTaiKhoan) => {
    return new Promise((resolve, reject) => {
        try {
            connection.query("SELECT * FROM taikhoan WHERE MaTaiKhoan = ?", MaTaiKhoan, function(error, rows) {
                if (error) reject(error);
                let user = rows[0];
                resolve(user);
            });
        } catch (e) {
            reject(e);
        }
    });
};  

module.exports = {
    compareUserPassword: compareUserPassword,
    findUserByEmail: findUserByEmail,
    findUserById: findUserById
};
