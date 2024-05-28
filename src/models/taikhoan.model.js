'use strict';
var dbConn = require('./../../config/db.config');

var TaiKhoan = function TaiKhoan(taikhoan) {
    this.MaTaiKhoan = taikhoan.MaTaiKhoan;
    this.TenTaiKhoan = taikhoan.TenTaiKhoan;
    this.password = taikhoan.password;
    this.role = taikhoan.role;
    this.SoDienThoai = taikhoan.SoDienThoai;
    this.DiaChi = taikhoan.DiaChi;
    this.email = taikhoan.email;
    this.trangThai = taikhoan.trangThai;
}

// Thay vì đặt tên là getAll, chúng ta sẽ đặt tên là findall
TaiKhoan.findall = function (result) {
    dbConn.query("SELECT * FROM taikhoan WHERE trangThai = 1", function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};


TaiKhoan.getOne = function (email, result) {
    dbConn.query("SELECT * FROM taikhoan WHERE email = ?", [email], function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

TaiKhoan.getIdByEmail = function (email, result) {
    dbConn.query("SELECT * FROM taikhoan WHERE email = ?", [email], function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

TaiKhoan.findOne = function (conditions) {
    return new Promise((resolve, reject) => {
        let sqlQuery = "SELECT * FROM taikhoan WHERE ";
        let conditionClauses = [];
        for (let key in conditions) {
            if (conditions.hasOwnProperty(key)) {
                conditionClauses.push(`${key} = ${dbConn.escape(conditions[key])}`);
            }
        }
        if (conditionClauses.length === 0) {
            reject("No conditions provided");
            return;
        }
        sqlQuery += conditionClauses.join(' AND ');

        dbConn.query(sqlQuery, function (err, res) {
            if (err) {
                console.log("Error:", err);
                reject(err);
            } else {
                if (res.length > 0) {
                    resolve(res[0]);
                } else {
                    resolve(null);
                }
            }
        });
    });
};



TaiKhoan.create = function (taikhoan, result) {
    dbConn.query("INSERT INTO taikhoan SET ?", taikhoan, function (err, res) {
        if (err) {
            console.log("error: ", err);
            // Gửi lỗi thông qua hàm callback
            result(err, null);
        }
        else {
            console.log(res.insertId);
            // Gửi kết quả thành công thông qua hàm callback
            result(null, res.insertId);
        }
    });
};



TaiKhoan.update = function (MaTaiKhoan, taikhoan, result) { // Ensure result is a function
    dbConn.query("UPDATE taikhoan SET TenTaiKhoan=?, SoDienThoai=?, DiaChi=? WHERE MaTaiKhoan = ?", 
    [taikhoan.TenTaiKhoan, taikhoan.SoDienThoai, taikhoan.DiaChi, MaTaiKhoan], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};


TaiKhoan.delete = function (MaTaiKhoan, result) { // Ensure result is a function
    dbConn.query("UPDATE taikhoan SET trangThai=0 WHERE MaTaiKhoan = ?", [MaTaiKhoan], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        } else {
            result(null, res);
        }
    });
};



TaiKhoan.findByUsername = function (email) {
    return new Promise((resolve, reject) => {
        dbConn.query("SELECT * FROM taikhoan WHERE email = ?", [email], function (err, res) {

            if (err) {
                console.log("Error:", err);
                reject(err);
            } else {
                console.log(res);
                resolve(res);
            }
        });
    });
};
TaiKhoan.changePasswordWithEmail = function (email, newPassword) {
    return new Promise((resolve, reject) => {
        var sql = "SELECT * FROM TaiKhoan WHERE email = ?";
        var data = [email];

        dbConn.query(sql, data, function (error, results, fields) {
            if (error) {
                console.log("Error:", error);
                reject(error);
            }

            // Check if user exists
            if (results && results.length > 0) {
                // Perform password update for the user
                var updateSql = "UPDATE TaiKhoan SET password = ? WHERE email = ?";
                var updateData = [newPassword, email];

                dbConn.query(updateSql, updateData, function (updateError, updateResults, updateFields) {
                    if (updateError) {
                        console.log("Update Error:", updateError);
                        reject(updateError);
                    } else {
                        console.log('Password updated successfully.');
                        resolve({
                            message: 'Thay đổi mật khẩu thành công',
                            status: 200,
                            data: results[0],
                        });
                    }
                });
            } else {
                resolve({
                    message: 'Không tìm thấy người dùng với email đã cho',
                    status: 404,
                    data: {},
                });
            }
        });
    });
};
module.exports = TaiKhoan;