const express=require('express');
const { home } = require('../controllers/homeController');

const router=express.Router();

router.get('/', home);
router.use('/doctors', require('./doctor'));
router.use('/appointments', require('./appoinment'));

module.exports=router;