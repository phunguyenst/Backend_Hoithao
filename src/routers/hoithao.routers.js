const express = require('express');
const router = express.Router();
const hoiThaoController = require('../controllers/hoithao.controller');

// Define routes for HoiThao endpoints
router.get('/findall', hoiThaoController.getAllHoiThao); // Get all conferences
router.get('/getone/:MaHoiThao', hoiThaoController.getOneHoiThao); // Get one conference by ID
router.post('/create', hoiThaoController.createHoiThao); // Create a new conference
router.put('/update/:MaHoiThao', hoiThaoController.updateHoiThao); // Update a conference
router.delete('/delete/:MaHoiThao', hoiThaoController.deleteHoiThao); // Delete a conference

module.exports = router;
