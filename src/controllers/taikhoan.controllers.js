'use strict';
const TaiKhoan = require('../models/taikhoan.model');

// Thay vì gọi hàm TaiKhoan.getAll, chúng ta sẽ gọi hàm TaiKhoan.findall
exports.getAllTaiKhoan = function (req, res) {
    TaiKhoan.findall(function (err, taikhoanData) {
        if (err) {
            console.log('Error in controller:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Controller:', taikhoanData);
            res.send(taikhoanData);
        }
    });
};


exports.getOneTaiKhoan = function (req, res) {
    TaiKhoan.getOne(req.params.MaTaiKhoan, function (err, taikhoanData) {
        if (err) {
            console.log('Error in controller:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Controller:', taikhoanData);
            res.send(taikhoanData);
        }
    });
};

exports.createTaiKhoan = function (req, res) {
    const tk = new TaiKhoan(req.body);
    // Không thêm mã tài khoản và trạng thái
    delete tk.MaTaiKhoan;
    delete tk.trangThai;

    // Kiểm tra dữ liệu có được cung cấp không
    // if (!tk.SoDienThoai || !tk.TenTaiKhoan || !tk.MatKhau || !tk.Email || !tk.DiaChi ) {
    //     res.status(400).send({ success: false, error: true, message: 'Vui lòng cung cấp đầy đủ thông tin!' });
    // } else {
        // Kiểm tra số điện thoại và email đã tồn tại trong cơ sở dữ liệu chưa
        TaiKhoan.findOne({ SoDienThoai: tk.SoDienThoai })
            .then(existingUser => {
                if (existingUser) {
                    // Số điện thoại đã tồn tại trong cơ sở dữ liệu
                    res.status(400).send({ success: false, error: true, message: 'Số điện thoại đã tồn tại.' });
                } else {
                    // Kiểm tra email đã tồn tại trong cơ sở dữ liệu chưa
                    return TaiKhoan.findOne({ Email: tk.Email });
                }
            })
            .then(existingEmail => {
                if (existingEmail) {
                    // Email đã tồn tại trong cơ sở dữ liệu
                    res.status(400).send({ success: false, error: true, message: 'Email đã tồn tại.' });
                } else {
                    // Nếu không có số điện thoại hoặc email nào tồn tại trong cơ sở dữ liệu, tạo tài khoản mới
                    return TaiKhoan.create(tk);
                }
            })
            .then(insertedId => {
                tk.MaTaiKhoan = insertedId;
                res.status(201).send({ success: true, error: false, message: "Tài khoản đã được tạo thành công!", data: tk });
            })
            .catch(err => {
                console.log('Error in controller:', err);
                res.status(500).send('Internal Server Error');
            });
    
};

exports.updateTaiKhoan = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Vui lòng cung cấp đầy đủ thông tin!' });
    } else {
        TaiKhoan.update(req.params.MaTaiKhoan, req.body, function(err, result) { // Ensure result is a function
            if (err) {
                res.status(500).send({ success: false, error: true, message: 'Internal Server Error', err });
            } else {
                res.status(200).send({ success: true, error: false, message: 'Cập nhật thành công!' });
            }
        });
    }
};



exports.deleteTaiKhoan = function (req, res) {
    TaiKhoan.delete(req.params.MaTaiKhoan, function(err, result) { // Ensure result is a function
        if (err) {
            res.status(500).send({ success: false, error: true, message: 'Internal Server Error', err });
        } else {
            res.status(200).send({ success: true, error: false, message: 'Xoá tài khoản thành công!' });
        }
    });
};

