'use strict';
const dbConn = require('../../config/db.config');

var NguoiDung = function NguoiDung(nguoidung) {
    this.MaNguoiDung = nguoidung.MaNguoiDung;
    this.fullname = nguoidung.fullname;
    this.DiaChi = nguoidung.DiaChi;
    this.SoDienThoai = nguoidung.SoDienThoai;
    this.email = nguoidung.email; // Thay đổi từ "this.email" thành "this.email"
    this.password = nguoidung.password; // Thay đổi từ "this.password" thành "this.password"
    this.trangThai = nguoidung.trangThai;
}
NguoiDung.findAll = function(result) {
    dbConn.query("SELECT * FROM nguoidung", function(err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

NguoiDung.getOne = function(MaNguoiDung, result) {
    dbConn.query("SELECT * FROM nguoidung WHERE MaNguoiDung = ?", [MaNguoiDung], function(err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};
NguoiDung.create = function(nguoidung) {
    return new Promise((resolve, reject) => {
        dbConn.query("INSERT INTO nguoidung SET ?", nguoidung, function(err, res) {
            if (err) {
                console.log("error: ", err);
                reject(err);
            } else {
                console.log(res.insertId);
                resolve(res.insertId);
            }
        });
    });
};

NguoiDung.update = function(MaNguoiDung, nguoidung, result) {
    dbConn.query("UPDATE nguoidung SET ? WHERE MaNguoiDung = ?", [nguoidung, MaNguoiDung], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

NguoiDung.delete = function (MaNguoiDung, result) {
    dbConn.query("UPDATE nguoidung SET trangThai = 0 WHERE MaNguoiDung = ?", MaNguoiDung, function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log("Updated trangThai for NguoiDung with ID:", MaNguoiDung);
            result(null, res);
        }
    });
};

// module.exports = {
//     checkExistEmail: checkExistEmail
// };


module.exports = NguoiDung;
