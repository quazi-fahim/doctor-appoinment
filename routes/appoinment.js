const express = require('express');
const router = express.Router();
const { getAllAppointments, getSpecificAppointment, createAppointment, updateAppointment, deleteAppointment } = require('../controllers/appoinmentController');

// Routes
router.get('/', getAllAppointments);
router.get('/:id', getSpecificAppointment);
router.post('/', createAppointment);
router.put('/:id', updateAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;
