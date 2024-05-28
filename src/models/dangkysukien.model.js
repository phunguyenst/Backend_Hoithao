'use strict';
const dbConn = require('../../config/db.config');
const sukien= require('./sukien.model');

console.log(dbConn.pool);

var DangKySuKien = function DangKySuKien(dangkysukien) {
    this.MaDangKy = dangkysukien.MaDangKy;
    this.MaSuKien = dangkysukien.MaSuKien;
    this.MaTaiKhoan = dangkysukien.MaTaiKhoan;
    this.TenTaiKhoan = dangkysukien.TenTaiKhoan;
    this.NgayDangKy = dangkysukien.NgayDangKy || new Date(); // Sử dụng ngày hiện tại nếu không có dữ liệu được truyền vào
    this.TrangThaiDangKy = dangkysukien.TrangThaiDangKy || 'Chưa xác định'; // Mặc định là 'Chưa xác định' nếu không có dữ liệu được truyền vào
    this.trangThai = dangkysukien.trangThai;
}


DangKySuKien.registerEvent = async function(MaSuKien) {
    // Start a transaction
    dbConn.beginTransaction(async function(err) {
        if (err) { throw err; }

        try {
            // Get the event details
            const getsukien = await sukien.getOne(MaSuKien);

            console.log("getsukien", getsukien);

            // Update the event status
            await dbConn.query("UPDATE sukien SET trangThai = 0 WHERE MaSuKien = ?", [MaSuKien]);

            // Delete the event from the sukien table
            await dbConn.query("DELETE FROM sukien WHERE MaSuKien = ?", [MaSuKien]);

            // Insert the event into the DangKySuKien table
            const newEvent = {
                MaSuKien: MaSuKien,
                TenSuKien: getsukien[0].TenSuKien,
                HinhThuc: getsukien[0].HinhThuc,
                DiaDiem: getsukien[0].DiaDiem,
                SoNguoiThamDu: getsukien[0].SoNguoiThamDu,
                MoTa: getsukien[0].MoTa,
                NgayDangKy: new Date(),
                TrangThaiDangKy: 'Đã đăng ký',
                trangThai: 0
            };

            console.log("TensuKien", getsukien[0].TenSuKien);

            await dbConn.query("INSERT INTO dangky_sukien SET ?", newEvent);

            dbConn.commit(function(err) {
                if (err) {
                    return dbConn.rollback(function() {
                        throw err;
                    });
                }
                console.log('Event registered successfully!');
            });
        } catch (err) {
            return dbConn.rollback(function() {
                throw err;
            });
        }
    });
};
DangKySuKien.findAll = function(result) {        
    dbConn.query("SELECT * FROM dangky_sukien", function(err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

DangKySuKien.getOne = function(MaDangKy, result) {
    dbConn.query("SELECT * FROM dangky_sukien WHERE MaDangKy = ?", [MaDangKy], function(err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};


DangKySuKien.delete = function(MaDangKy, result) {
    dbConn.query("DELETE FROM dangky_sukien WHERE MaDangKy = ?", [MaDangKy], function(err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};


module.exports = DangKySuKien;
