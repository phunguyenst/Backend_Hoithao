var express = require('express');
var router = express.Router();

var bantochucController = require('../controllers/bantochuc.controller');

// Định nghĩa tuyến đường để lấy tất cả các ban tổ chức
router.get('/findall', bantochucController.getAllBanToChuc);

// Định nghĩa tuyến đường để lấy một ban tổ chức theo mã BTC
router.get('/getone/:MaBTC', bantochucController.getBanToChucById);

// Định nghĩa tuyến đường để tạo một ban tổ chức mới
router.post('/create', bantochucController.createBanToChuc);

// Định nghĩa tuyến đường để cập nhật thông tin một ban tổ chức
router.put('/update/:MaBTC', bantochucController.updateBanToChuc);

// Định nghĩa tuyến đường để xoá một ban tổ chức
router.delete('/delete/:MaBTC', bantochucController.deleteBanToChuc);

module.exports = router;
