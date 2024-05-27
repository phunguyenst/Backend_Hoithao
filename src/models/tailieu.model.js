'use strict';
var dbConn = require('../../config/db.config');


var TaiLieu = function TaiLieu(tailieu) {
    this.MaTaiLieu = tailieu.MaTaiLieu;
    this.TenTaiLieu = tailieu.TenTaiLieu;
    this.MaNguoiDung = tailieu.MaNguoiDung;
    this.trangThai = tailieu.trangThai;
}

TaiLieu.findAll = function (result) {
    dbConn.query("SELECT * FROM tailieu", function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

TaiLieu.getOne = function (MaTaiLieu, result) {
    dbConn.query("SELECT * FROM tailieu WHERE MaTaiLieu = ?", [MaTaiLieu], function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

TaiLieu.create = function (tailieu) {
    return new Promise((resolve, reject) => {
        dbConn.query("INSERT INTO tailieu SET ?", tailieu, function (err, res) {
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

TaiLieu.update = function (MaTaiLieu, tailieu, result) {
    dbConn.query("UPDATE tailieu SET TenTaiLieu=?, MaNguoiDung=? WHERE MaTaiLieu = ?",
        [tailieu.TenTaiLieu, tailieu.MaNguoiDung, MaTaiLieu],
        function (err, res) {
            if (err) {
                console.log("Error:", err);
                result(err, null);
            } else {
                console.log(res);
                result(null, res);
            }
        });
};

TaiLieu.delete = function (MaTaiLieu, result) {
    dbConn.query("UPDATE tailieu SET trangThai = 0 WHERE MaTaiLieu = ?", MaTaiLieu, function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log("Updated trangThai for TaiLieu with ID:", MaTaiLieu);
            result(null, res);
        }
    });
};

module.exports = TaiLieu;