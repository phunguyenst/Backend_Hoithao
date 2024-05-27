const express = require('express');
const router = express.Router();
const taikhoanController = require('../controllers/taikhoan.controllers');

// Define routes for accounts
router.get('/findall', taikhoanController.getAllTaiKhoan); // Get all accounts
router.get('/getone/:MaTaiKhoan', taikhoanController.getOneTaiKhoan); // Get one account by ID
router.post('/create', taikhoanController.createTaiKhoan); // Create a new account
router.put('/update/:MaTaiKhoan', taikhoanController.updateTaiKhoan); // Update an account
router.delete('/delete/:MaTaiKhoan', taikhoanController.deleteTaiKhoan); // Delete an account

module.exports = router;
