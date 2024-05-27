'use strict';
const HoiThao = require('../models/hoithao.model');

exports.getAllHoiThao = function (req, res) {
    HoiThao.findall(function (err, hoithaoData) {
        if (err) {
            console.log('Error in controller:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Controller:', hoithaoData);
            res.send(hoithaoData);
        }
    });
};

exports.getOneHoiThao = function (req, res) {
    HoiThao.getOne(req.params.MaHoiThao, function (err, hoithaoData) {
        if (err) {
            console.log('Error in controller:', err);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Controller:', hoithaoData);
            res.send(hoithaoData);
        }
    });
};

exports.createHoiThao = function(req, res) {
    const ht = new HoiThao(req.body);
    
    // Kiểm tra dữ liệu có được cung cấp không
    if (!ht.TenHoiThao || !ht.MaNguoiDung) {
        res.status(400).send({ success: false, error: true, message: 'Vui lòng cung cấp đầy đủ thông tin!' });
    } else {
        // Chuyển đổi giá trị ngày tháng từ chuỗi sang đối tượng Date
        ht.ThoiGianBatDau = new Date(ht.ThoiGianBatDau);
        ht.ThoiGianKetThuc = new Date(ht.ThoiGianKetThuc);

        // Tạo hội thảo mới
        HoiThao.create(ht)
            .then(newEventId => {
                res.status(201).send({ success: true, error: false, message: "Hội thảo đã được tạo thành công!", eventId: newEventId });
            })
            .catch(err => {
                console.log('Error in creating event:', err);
                res.status(500).send('Internal Server Error');
            });
    }
};

exports.updateHoiThao = function (req, res) {
    if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
        res.status(400).send({ error: true, message: 'Vui lòng cung cấp đầy đủ thông tin!' });
    } else {
        HoiThao.update(req.params.MaHoiThao, req.body, function(err, result) {
            if (err) {
                res.status(500).send({ success: false, error: true, message: 'Internal Server Error', err });
            } else {
                res.status(200).send({ success: true, error: false, message: 'Cập nhật thành công!' });
            }
        });
    }
};

exports.deleteHoiThao = function (req, res) {
    HoiThao.delete(req.params.MaHoiThao, function(err, result) {
        if (err) {
            res.status(500).send({ success: false, error: true, message: 'Failed to delete event', err });
        } else if (result.affectedRows === 0) {
            res.status(404).send({ success: false, error: true, message: 'Event not found' });
        } else {
            res.status(200).send({ success: true, error: false, message: 'Event deleted successfully' });
        }
    });
};
