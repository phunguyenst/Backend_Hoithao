'use strict';
var dbConn = require('../../config/db.config');

var SuKien = function SuKien(sukien) {
    this.MaSuKien = sukien.MaSuKien;
    this.TenSuKien = sukien.TenSuKien;
    this.HinhThuc = sukien.HinhThuc;
    this.DiaDiem = sukien.DiaDiem;
    this.ThoiGianBatDau = sukien.ThoiGianBatDau;
    this.ThoiGianKetThuc = sukien.ThoiGianKetThuc;
    this.SoNguoiThamDu = sukien.SoNguoiThamDu;
    this.MoTa = sukien.MoTa;
    this.HinhAnh = sukien.HinhAnh; // Thêm trường Hình Ảnh
    this.MaLich = sukien.MaLich;
    this.MaNguoiDung = sukien.MaNguoiDung;
    this.MaBTC = sukien.MaBTC;
    this.MaNhanVien = sukien.MaNhanVien;
    this.trangThai = sukien.trangThai;
}

SuKien.findall = function (result) {
    dbConn.query("SELECT * FROM sukien", function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

SuKien.getOne = function (MaSuKien, result) {
    dbConn.query("SELECT * FROM sukien WHERE MaSuKien = ?", [MaSuKien], function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};
SuKien.create = function(sukien) {
    return new Promise((resolve, reject) => {
        dbConn.query("INSERT INTO sukien SET ?", sukien, function(err, res) {
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


SuKien.update = function(MaSuKien, sukien, result) {
    // Kiểm tra nếu TenSuKien là null hoặc undefined, thì gán bằng chuỗi rỗng
    if (sukien.TenSuKien === null || sukien.TenSuKien === undefined) {
        sukien.TenSuKien = '';
    }

    // Kiểm tra nếu HinhThuc là null hoặc undefined, thì gán bằng chuỗi rỗng
    if (sukien.HinhThuc === null || sukien.HinhThuc === undefined) {
        sukien.HinhThuc = '';
    }

    // Kiểm tra nếu DiaDiem là null hoặc undefined, thì gán bằng chuỗi rỗng
    if (sukien.DiaDiem === null || sukien.DiaDiem === undefined) {
        sukien.DiaDiem = '';
    }

    // Kiểm tra nếu MoTa là null hoặc undefined, thì gán bằng chuỗi rỗng
    if (sukien.MoTa === null || sukien.MoTa === undefined) {
        sukien.MoTa = '';
    }

    // Kiểm tra nếu HinhAnh là null hoặc undefined, thì gán bằng chuỗi rỗng
    if (sukien.HinhAnh === null || sukien.HinhAnh === undefined) {
        sukien.HinhAnh = '';
    }

    if (sukien.MaLich === null || sukien.MaLich === undefined || isNaN(parseInt(sukien.MaLich))) {
        sukien.MaLich = 0; // Gán một giá trị mặc định (ví dụ: 0) cho MaLich nếu không có giá trị hợp lệ nào được cung cấp
    } else {
        sukien.MaLich = parseInt(sukien.MaLich); // Chuyển đổi giá trị thành số nguyên
    }

    if (sukien.MaNguoiDung === null || sukien.MaNguoiDung === undefined || isNaN(parseInt(sukien.MaNguoiDung))) {
        sukien.MaNguoiDung = 0; // Gán một giá trị mặc định (ví dụ: 0) cho MaNguoiDung nếu không có giá trị hợp lệ nào được cung cấp
    } else {
        sukien.MaNguoiDung = parseInt(sukien.MaNguoiDung); // Chuyển đổi giá trị thành số nguyên
    }

    if (sukien.MaBTC === null || sukien.MaBTC === undefined || isNaN(parseInt(sukien.MaBTC))) {
        sukien.MaBTC = 0; // Gán một giá trị mặc định (ví dụ: 0) cho MaBTC nếu không có giá trị hợp lệ nào được cung cấp
    } else {
        sukien.MaBTC = parseInt(sukien.MaBTC); // Chuyển đổi giá trị thành số nguyên
    }

    if (sukien.MaNhanVien === null || sukien.MaNhanVien === undefined || isNaN(parseInt(sukien.MaNhanVien))) {
        sukien.MaNhanVien = 0; // Gán một giá trị mặc định (ví dụ: 0) cho MaNhanVien nếu không có giá trị hợp lệ nào được cung cấp
    } else {
        sukien.MaNhanVien = parseInt(sukien.MaNhanVien); // Chuyển đổi giá trị thành số nguyên
    }

    // Thực hiện câu truy vấn UPDATE
    dbConn.query("UPDATE sukien SET TenSuKien=?, HinhThuc=?, DiaDiem=?, ThoiGianBatDau=NOW(), ThoiGianKetThuc=NOW(), SoNguoiThamDu=?, MoTa=?, HinhAnh=?, MaLich=?, MaNguoiDung=?, MaBTC=?, MaNhanVien=? WHERE MaSuKien = ?", 
    [sukien.TenSuKien, sukien.HinhThuc, sukien.DiaDiem, sukien.SoNguoiThamDu || 0, sukien.MoTa, sukien.HinhAnh, sukien.MaLich, sukien.MaNguoiDung, sukien.MaBTC, sukien.MaNhanVien, MaSuKien], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

SuKien.delete = function (MaSuKien, result) {
    dbConn.query("UPDATE sukien SET trangThai = 0 WHERE MaSuKien = ?", [MaSuKien], function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            console.log("Updated trangThai for SuKien with ID: ", MaSuKien);
            result(null, res);
        }
    });
};

module.exports = SuKien;
