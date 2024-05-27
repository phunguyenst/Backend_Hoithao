'use strict';
var dbConn = require('../../config/db.config');

var HoiThao = function HoiThao(hoithao) {
    this.MaHoiThao = hoithao.MaHoiThao;
    this.TenHoiThao = hoithao.TenHoiThao;
    this.HinhThuc = hoithao.HinhThuc;
    this.DiaDiem = hoithao.DiaDiem;
    this.ThoiGianBatDau = hoithao.ThoiGianBatDau;
    this.ThoiGianKetThuc = hoithao.ThoiGianKetThuc;
    this.SoNguoiThamDu = hoithao.SoNguoiThamDu;
    this.MoTa = hoithao.MoTa;
    this.HinhAnh = hoithao.HinhAnh; // Thêm trường Hình Ảnh
    this.MaLich = hoithao.MaLich;
    this.MaNguoiDung = hoithao.MaNguoiDung;
    this.MaBTC = hoithao.MaBTC;
    this.MaNhanVien = hoithao.MaNhanVien;
    this.trangThai = hoithao.trangThai;
}

HoiThao.findall = function (result) {
    dbConn.query("SELECT * FROM hoithao", function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

HoiThao.getOne = function (MaHoiThao, result) {
    dbConn.query("SELECT * FROM hoithao WHERE MaHoiThao = ?", [MaHoiThao], function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

HoiThao.create = function(hoithao) {
    return new Promise((resolve, reject) => {
        dbConn.query("INSERT INTO hoithao SET ?", hoithao, function(err, res) {
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

HoiThao.update = function(MaHoiThao, hoithao, result) {
    // Kiểm tra nếu TenHoiThao là null hoặc undefined, thì gán bằng chuỗi rỗng
    if (hoithao.TenHoiThao === null || hoithao.TenHoiThao === undefined) {
        hoithao.TenHoiThao = '';
    }

    // Kiểm tra nếu HinhThuc là null hoặc undefined, thì gán bằng chuỗi rỗng
    if (hoithao.HinhThuc === null || hoithao.HinhThuc === undefined) {
        hoithao.HinhThuc = '';
    }

    // Kiểm tra nếu DiaDiem là null hoặc undefined, thì gán bằng chuỗi rỗng
    if (hoithao.DiaDiem === null || hoithao.DiaDiem === undefined) {
        hoithao.DiaDiem = '';
    }

    // Kiểm tra nếu MoTa là null hoặc undefined, thì gán bằng chuỗi rỗng
    if (hoithao.MoTa === null || hoithao.MoTa === undefined) {
        hoithao.MoTa = '';
    }

    // Kiểm tra nếu HinhAnh là null hoặc undefined, thì gán bằng chuỗi rỗng
    if (hoithao.HinhAnh === null || hoithao.HinhAnh === undefined) {
        hoithao.HinhAnh = '';
    }

    if (hoithao.MaLich === null || hoithao.MaLich === undefined || isNaN(parseInt(hoithao.MaLich))) {
        hoithao.MaLich = 0; // Gán một giá trị mặc định (ví dụ: 0) cho MaLich nếu không có giá trị hợp lệ nào được cung cấp
    } else {
        hoithao.MaLich = parseInt(hoithao.MaLich); // Chuyển đổi giá trị thành số nguyên
    }

    if (hoithao.MaNguoiDung === null || hoithao.MaNguoiDung === undefined || isNaN(parseInt(hoithao.MaNguoiDung))) {
        hoithao.MaNguoiDung = 0; // Gán một giá trị mặc định (ví dụ: 0) cho MaNguoiDung nếu không có giá trị hợp lệ nào được cung cấp
    } else {
        hoithao.MaNguoiDung = parseInt(hoithao.MaNguoiDung); // Chuyển đổi giá trị thành số nguyên
    }

    if (hoithao.MaBTC === null || hoithao.MaBTC === undefined || isNaN(parseInt(hoithao.MaBTC))) {
        hoithao.MaBTC = 0; // Gán một giá trị mặc định (ví dụ: 0) cho MaBTC nếu không có giá trị hợp lệ nào được cung cấp
    } else {
        hoithao.MaBTC = parseInt(hoithao.MaBTC); // Chuyển đổi giá trị thành số nguyên
    }

    if (hoithao.MaNhanVien === null || hoithao.MaNhanVien === undefined || isNaN(parseInt(hoithao.MaNhanVien))) {
        hoithao.MaNhanVien = 0; // Gán một giá trị mặc định (ví dụ: 0) cho MaNhanVien nếu không có giá trị hợp lệ nào được cung cấp
    } else {
        hoithao.MaNhanVien = parseInt(hoithao.MaNhanVien); // Chuyển đổi giá trị thành số nguyên
    }

    // Thực hiện câu truy vấn UPDATE
    dbConn.query("UPDATE hoithao SET TenHoiThao=?, HinhThuc=?, DiaDiem=?, ThoiGianBatDau=NOW(), ThoiGianKetThuc=NOW(), SoNguoiThamDu=?, MoTa=?, HinhAnh=?, MaLich=?, MaNguoiDung=?, MaBTC=?, MaNhanVien=? WHERE MaHoiThao = ?", 
    [hoithao.TenHoiThao, hoithao.HinhThuc, hoithao.DiaDiem, hoithao.SoNguoiThamDu || 0, hoithao.MoTa, hoithao.HinhAnh, hoithao.MaLich, hoithao.MaNguoiDung, hoithao.MaBTC, hoithao.MaNhanVien, MaHoiThao], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

HoiThao.delete = function (MaHoiThao, result) {
    dbConn.query("UPDATE hoithao SET trangThai = 0 WHERE MaHoiThao = ?", [MaHoiThao], function (err, res) {
        if (err) {
            console.log("Error: ", err);
            result(err, null);
        } else {
            console.log("Updated trangThai for HoiThao with ID: ", MaHoiThao);
            result(null, res);
        }
    });
};

module.exports = HoiThao;
