'use strict';
const NguoiDung = require('../models/nguoidung.model');

exports.getAllNguoiDung = function(req, res) {
    NguoiDung.findAll(function(err, nguoidung) {
        if (err) {
            console.log('Error in getting all users:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('All users:', nguoidung);
            res.status(200).json(nguoidung);
        }
    });
};

exports.getNguoiDungById = function(req, res) {
    var MaNguoiDung = req.params.MaNguoiDung;

    NguoiDung.getOne(MaNguoiDung, function(err, nguoidung) {
        if (err) {
            console.log('Error in getting user by ID:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            if (!nguoidung) {
                res.status(404).json({ error: 'User not found' });
            } else {
                console.log('User:', nguoidung);
                res.status(200).json(nguoidung);
            }
        }
    });
};

exports.createNguoiDung = function(req, res) {
    const nguoidung = new NguoiDung(req.body);
    
    if (!nguoidung.TenNguoiDung || !nguoidung.email || !nguoidung.password) {
        res.status(400).json({ error: 'Please provide all required fields' });
    } else {
        NguoiDung.create(nguoidung)
            .then(newUserId => {
                res.status(201).json({ success: true, message: 'User created successfully', userId: newUserId });
            })
            .catch(err => {
                console.log('Error in creating user:', err);
                res.status(500).json({ error: 'Internal server error' });
            });
    }
};

exports.updateNguoiDung = function(req, res) {
    var MaNguoiDung = req.params.MaNguoiDung;
    var updatedUser = req.body;

    NguoiDung.update(MaNguoiDung, updatedUser, function(err, result) {
        if (err) {
            console.log('Error in updating user:', err);
            res.status(500).json({ error: 'Failed to update user' });
        } else {
            res.status(200).json({ success: true, message: 'User updated successfully' });
        }
    });
};

exports.deleteNguoiDung = function(req, res) {
    var MaNguoiDung = req.params.MaNguoiDung;

    NguoiDung.delete(MaNguoiDung, function(err, result) {
        if (err) {
            console.log('Error in deleting user:', err);
            res.status(500).json({ error: 'Failed to delete user' });
        } else {
            res.status(200).json({ success: true, message: 'User deleted successfully' });
        }
    });
};
