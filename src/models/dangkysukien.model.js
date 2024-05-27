'use strict';
const dbConn = require('../../config/db.config');

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
DangKySuKien.registerEvent = function(MaSuKien) {
    // Start a transaction
    dbConn.beginTransaction(function(err) {
        if (err) { throw err; }
        
        dbConn.query("UPDATE sukien SET trangThai = 0 WHERE MaSuKien = ?", [MaSuKien], function(err, res) {
            if (err) {
                return dbConn.rollback(function() {
                    throw err;
                });
            }

            // Delete the event from the sukien table
            dbConn.query("DELETE FROM sukien WHERE MaSuKien = ?", [MaSuKien], function(err, res) {
                if (err) {
                    return dbConn.rollback(function() {
                        throw err;
                    });
                }

                // Insert the event into the DangKySuKien table
                const newEvent = {
                    MaSuKien: MaSuKien,
                    MaTaiKhoan: 1,
                    TenTaiKhoan: "Phu",
                    NgayDangKy: new Date(),
                    TrangThaiDangKy: 'Đã đăng ký',
                    trangThai: 0
                };
                dbConn.query("INSERT INTO dangky_sukien SET ?", newEvent, function(err, res) {
                    if (err) {
                        return dbConn.rollback(function() {
                            throw err;
                        });
                    }

                    dbConn.commit(function(err) {
                        if (err) {
                            return dbConn.rollback(function() {
                                throw err;
                            });
                        }
                        console.log('Event registered successfully!');
                   
                    });
                });
            });
        });
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
