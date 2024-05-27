'use strict';
const dbConn = require('../../config/db.config');

console.log(dbConn.pool);

var BanToChuc = function BanToChuc(bantochuc) {
    this.MaBTC = bantochuc.MaBTC;
    this.TenBTC = bantochuc.TenBTC;
    this.DiaChi = bantochuc.DiaChi;
    this.SoDienThoai = bantochuc.SoDienThoai;
    this.Email = bantochuc.Email;
    this.MatKhau = bantochuc.MatKhau;
    this.trangThai = bantochuc.trangThai;
}

BanToChuc.findAll = function(result) {
    dbConn.query("SELECT * FROM bantochuc", function(err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

BanToChuc.getOne = function(MaBTC, result) {
    dbConn.query("SELECT * FROM bantochuc WHERE MaBTC = ?", [MaBTC], function(err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

BanToChuc.create = function(bantochuc) {
    return new Promise((resolve, reject) => {
        dbConn.query("INSERT INTO bantochuc SET ?", bantochuc, function(err, res) {
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

BanToChuc.update = function(MaBTC, bantochuc, result) {
    dbConn.query("UPDATE bantochuc SET ? WHERE MaBTC = ?", [bantochuc, MaBTC], function(err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

BanToChuc.delete = function (MaBTC, result) {
    dbConn.query("UPDATE bantochuc SET trangThai = 0 WHERE MaBTC = ?", MaBTC, function (err, res) {
        if (err) {
            console.log("Error:", err);
            result(err, null);
        } else {
            console.log("Updated trangThai for BanToChuc with ID:", MaBTC);
            result(null, res);
        }
    });
};


module.exports = BanToChuc;
