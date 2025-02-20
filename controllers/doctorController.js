const Doctor = require('../models/doctor');

module.exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};
