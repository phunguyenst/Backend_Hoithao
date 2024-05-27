'use strict';
const SuKien = require('../models/sukien.model');


exports.getAllSuKien = function (req, res) {
    SuKien.findall(function (err, sukienData) {
        if (err) {
            console.log('Error in controller:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Controller:', sukienData);
            res.send(sukienData);
        }
    });
};

exports.getOneSuKien = function (req, res) {
    SuKien.getOne(req.params.MaSuKien, function (err, sukienData) {
        if (err) {
            console.log('Error in controller:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Controller:', sukienData);
            res.send(sukienData);
        }
    });
};
exports.createSuKien = function(req, res) {
    const sk = new SuKien(req.body);
    
    // Kiểm tra dữ liệu có được cung cấp không
    if (!sk.TenSuKien || !sk.MaNguoiDung) {
        res.status(400).send({ success: false, error: true, message: 'Vui lòng cung cấp đầy đủ thông tin!' });
    } else {
        // Chuyển đổi giá trị ngày tháng từ chuỗi sang đối tượng Date
        sk.ThoiGianBatDau = new Date(sk.ThoiGianBatDau);
        sk.ThoiGianKetThuc = new Date(sk.ThoiGianKetThuc);

        // Tạo sự kiện mới
        SuKien.create(sk)
            .then(newEventId => {
                res.status(201).send({ success: true, error: false, message: "Sự kiện đã được tạo thành công!", eventId: newEventId });
            })
            .catch(err => {
                console.log('Error in creating event:', err);
                res.status(500).send('Internal Server Error');
            });
    }
};

exports.updateSuKien = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Vui lòng cung cấp đầy đủ thông tin!' });
    } else {
        SuKien.update(req.params.MaSuKien, req.body, function(err, result) {
            if (err) {
                res.status(500).send({ success: false, error: true, message: 'Internal Server Error', err });
            } else {
                res.status(200).send({ success: true, error: false, message: 'Cập nhật thành công!' });
            }
        });
    }
};

exports.deleteSuKien = function (req, res) {
    SuKien.delete(req.params.MaSuKien, function(err, result) {
        if (err) {
            res.status(500).send({ success: false, error: true, message: 'Failed to delete event', err });
        } else if (result.affectedRows === 0) {
            res.status(404).send({ success: false, error: true, message: 'Event not found' });
        } else {
            res.status(200).send({ success: true, error: false, message: 'Event deleted successfully' });
        }
    });
};
