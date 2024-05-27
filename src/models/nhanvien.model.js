'use strict';
const dbConn = require('../../config/db.config');

var NhanVien = function NhanVien(nhanvien) {
    this.MaNhanVien = nhanvien.MaNhanVien;
    this.TenNhanVien = nhanvien.TenNhanVien;
    this.DiaChi = nhanvien.DiaChi;
    this.SoDienThoai = nhanvien.SoDienThoai;
    this.Email = nhanvien.Email;
    this.MatKhau = nhanvien.MatKhau;
    this.trangThai = nhanvien.trangThai;
}

NhanVien.findAll = function(result) {
    dbConn.query("SELECT * FROM nhanvien", function(err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

NhanVien.getOne = function(MaNhanVien, result) {
    dbConn.query("SELECT * FROM nhanvien WHERE MaNhanVien = ?", [MaNhanVien], function(err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

NhanVien.create = function(nhanvien) {
    return new Promise((resolve, reject) => {
        dbConn.query("INSERT INTO nhanvien SET ?", nhanvien, function(err, res) {
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

NhanVien.update = function(MaNhanVien, nhanvien, result) {
    dbConn.query("UPDATE nhanvien SET ? WHERE MaNhanVien = ?", [nhanvien, MaNhanVien], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

NhanVien.delete = function (MaNhanVien, result) {
    dbConn.query("UPDATE nhanvien SET trangThai = 0 WHERE MaNhanVien = ?", MaNhanVien, function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log("Updated trangThai for NhanVien with ID:", MaNhanVien);
            result(null, res);
        }
    });
};


module.exports = NhanVien;
