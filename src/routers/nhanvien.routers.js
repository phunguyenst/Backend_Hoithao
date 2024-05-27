var express = require('express');
var router = express.Router();

var nhanVienController = require('../controllers/nhanvien.controller');

// Định nghĩa tuyến đường để lấy tất cả các nhân viên
router.get('/findall', nhanVienController.getAllNhanVien);

// Định nghĩa tuyến đường để lấy một nhân viên theo mã nhân viên
router.get('/getone/:MaNhanVien', nhanVienController.getNhanVienById);

// Định nghĩa tuyến đường để tạo một nhân viên mới
router.post('/create', nhanVienController.createNhanVien);

// Định nghĩa tuyến đường để cập nhật thông tin một nhân viên
router.put('/update/:MaNhanVien', nhanVienController.updateNhanVien);

// Định nghĩa tuyến đường để xoá một nhân viên
router.delete('/delete/:MaNhanVien', nhanVienController.deleteNhanVien);

module.exports = router;
