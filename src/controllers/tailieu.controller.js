'use strict';
const TaiLieu = require('../models/tailieu.model');
exports.getAllTaiLieu = function(req, res) {
    TaiLieu.findAll(function(err, tailieus) {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        res.status(200).json(tailieus);
    });
};

// Controller để lấy một tài liệu theo mã tài liệu
exports.getTaiLieuById = function(req, res) {
    var MaTaiLieu = req.params.MaTaiLieu;

    TaiLieu.getOne(MaTaiLieu, function(err, tailieu) {
        if (err) {
            return res.status(500).json({ error: 'Internal server error' });
        }
        if (!tailieu) {
            return res.status(404).json({ error: 'TaiLieu not found' });
        }
        res.status(200).json(tailieu);
    });
};
exports.createTaiLieu = function (req, res) {
    const tl = new TaiLieu(req.body);
    
    // Kiểm tra dữ liệu có được cung cấp không
    if (!tl.TenTaiLieu || !tl.MaNguoiDung) {
        res.status(400).send({ success: false, error: true, message: 'Vui lòng cung cấp đầy đủ thông tin!' });
    } else {
        // Tạo tài liệu mới
        TaiLieu.create(tl)
            .then(newDoc => {
                res.status(201).send({ success: true, error: false, message: "Tài liệu đã được tạo thành công!", data: newDoc });
            })
            .catch(err => {
                console.log('Error in creating document:', err);
                res.status(500).send('Internal Server Error');
            });
    }
};
// Controller để cập nhật thông tin một tài liệu
exports.updateTaiLieu = function(req, res) {
    var MaTaiLieu = req.params.MaTaiLieu;
    var updatedTaiLieu = req.body;

    TaiLieu.update(MaTaiLieu, updatedTaiLieu, function(err, result) {
        if (err) {
            return res.status(500).json({ error: 'Failed to update TaiLieu' });
        }
        res.status(200).json({ message: 'TaiLieu updated successfully' });
    });
};

// Controller để xoá một tài liệu
exports.deleteTaiLieu = function(req, res) {
    var MaTaiLieu = req.params.MaTaiLieu;

    TaiLieu.delete(MaTaiLieu, function(err, result) {
        if (err) {
            return res.status(500).json({ error: 'Failed to delete TaiLieu' });
        }
        res.status(200).json({ message: 'TaiLieu deleted successfully' });
    });
};