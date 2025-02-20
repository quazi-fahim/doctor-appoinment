const express=require('express');
const { getAllDoctors } = require('../controllers/doctorController');

const router=express.Router();

router.get('/getDoctors', getAllDoctors)

module.exports=router;