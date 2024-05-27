'use strict';
const NhanVien = require('../models/nhanvien.model');

// Controller để lấy tất cả các nhân viên
exports.getAllNhanVien = function(req, res) {
    NhanVien.findAll(function(err, nhanviens) {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json(nhanviens);
    });
};

// Controller để lấy một nhân viên theo mã nhân viên
exports.getNhanVienById = function(req, res) {
    var MaNhanVien = req.params.MaNhanVien;

    NhanVien.getOne(MaNhanVien, function(err, nhanvien) {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (!nhanvien) {
            return res.status(404).json({ error: 'NhanVien not found' });
        }
        res.status(200).json(nhanvien);
    });
};

// Controller để tạo một nhân viên mới
exports.createNhanVien = function(req, res) {
    const nv = new NhanVien(req.body);
    
    // Kiểm tra dữ liệu có được cung cấp không
    if (!nv.TenNhanVien || !nv.Email || !nv.MatKhau) {
        res.status(400).send({ success: false, error: true, message: 'Vui lòng cung cấp đầy đủ thông tin!' });
    } else {
        // Tạo nhân viên mới
        NhanVien.create(nv)
            .then(newNhanVienId => {
                res.status(201).send({ success: true, error: false, message: "Nhân viên đã được tạo thành công!", nhanVienId: newNhanVienId });
            })
            .catch(err => {
                console.log('Error in creating employee:', err);
                res.status(500).send('Internal Server Error');
            });
    }
};

// Controller để cập nhật thông tin một nhân viên
exports.updateNhanVien = function(req, res) {
    var MaNhanVien = req.params.MaNhanVien;
    var updatedNhanVien = req.body;

    NhanVien.update(MaNhanVien, updatedNhanVien, function(err, result) {
        if (err) {
            return res.status(500).json({ error: 'Failed to update NhanVien' });
        }
        res.status(200).json({ message: 'NhanVien updated successfully' });
    });
};

// Controller để xoá một nhân viên
exports.deleteNhanVien = function(req, res) {
    var MaNhanVien = req.params.MaNhanVien;

    NhanVien.delete(MaNhanVien, function(err, result) {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete NhanVien' });
        }
        res.status(200).json({ message: 'NhanVien deleted successfully' });
    });
};
