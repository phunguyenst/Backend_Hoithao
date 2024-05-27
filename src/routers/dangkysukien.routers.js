const express = require('express');
const router = express.Router();
const dangKySuKienController  = require('../controllers/dangkysukien.controller'); // Import registerController từ dangkysukienController

// Đăng ký người dùng vào sự kiện
router.post('/registerEvent', dangKySuKienController.registerController);

// Route để lấy tất cả các đăng ký sự kiện
router.get('/findall', dangKySuKienController.getAllDangKySuKien);

// Route để lấy một đăng ký sự kiện dựa trên mã đăng ký
router.get('/getone/:MaDangKy', dangKySuKienController.getDangKySuKienById);

// Route để xóa một đăng ký sự kiện
router.delete('/delete/:MaDangKy', dangKySuKienController.deleteDangKySuKien);

module.exports = router;
