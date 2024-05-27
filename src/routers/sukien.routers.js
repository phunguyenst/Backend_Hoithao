const express = require('express');
const router = express.Router();
const suKienController = require('../controllers/sukien.controller');

// Define routes for SuKien endpoints
router.get('/findall', suKienController.getAllSuKien); // Get all events
router.get('/getone/:MaSuKien', suKienController.getOneSuKien); // Get one event by ID
router.post('/create', suKienController.createSuKien); // Create a new event
router.put('/update/:MaSuKien', suKienController.updateSuKien); // Update an event
router.delete('/delete/:MaSuKien', suKienController.deleteSuKien); // Delete an event

module.exports = router;