var express = require('express');
var router = express.Router();

var nguoiDungController = require('../controllers/nguoidung.controller');

// Định nghĩa tuyến đường để lấy tất cả các người dùng
router.get('/findall', nguoiDungController.getAllNguoiDung);

// Định nghĩa tuyến đường để lấy một người dùng theo mã người dùng
router.get('/getone/:MaNguoiDung', nguoiDungController.getNguoiDungById);

// Định nghĩa tuyến đường để tạo một người dùng mới
router.post('/create', nguoiDungController.createNguoiDung);

// Định nghĩa tuyến đường để cập nhật thông tin một người dùng
router.put('/update/:MaNguoiDung', nguoiDungController.updateNguoiDung);

// Định nghĩa tuyến đường để xoá một người dùng
router.delete('/delete/:MaNguoiDung', nguoiDungController.deleteNguoiDung);

module.exports = router;
