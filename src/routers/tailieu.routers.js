var express = require('express');
var router = express.Router();

var taiLieuController = require('../controllers/tailieu.controller');

// Định nghĩa tuyến đường để lấy tất cả các tài liệu
router.get('/findall', taiLieuController.getAllTaiLieu);

// Định nghĩa tuyến đường để lấy một tài liệu theo mã tài liệu
router.get('/getone/:MaTaiLieu', taiLieuController.getTaiLieuById);

// Định nghĩa tuyến đường để tạo một tài liệu mới
router.post('/create', taiLieuController.createTaiLieu);

// Định nghĩa tuyến đường để cập nhật thông tin một tài liệu
router.put('/update/:MaTaiLieu', taiLieuController.updateTaiLieu);

// Định nghĩa tuyến đường để xoá một tài liệu
router.delete('/delete/:MaTaiLieu', taiLieuController.deleteTaiLieu);

module.exports = router;