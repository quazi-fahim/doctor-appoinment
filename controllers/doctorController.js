const Appointment = require('../models/appoinment');
const Doctor = require('../models/doctor');

module.exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
};

module.exports.getAvailableSlots = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id);
    if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
    
    const date = new Date(req.query.date);
    if (isNaN(date)) return res.status(400).json({ error: 'Invalid date' });
    
    const appointments = await Appointment.find({
      doctorId: doctor._id,
      date: { $gte: date, $lt: new Date(date.getTime() + 86400000) },
    });
    
    const allSlots = [];
    let startTime = parseInt(doctor.workingHours.start.split(':')[0]);
    let endTime = parseInt(doctor.workingHours.end.split(':')[0]);
    
    for (let hour = startTime; hour < endTime; hour++) {
      if (!appointments.some(a => a.date.getHours() === hour)) {
        allSlots.push(`${hour}:00`);
      }
    }
    
    res.json(allSlots);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
