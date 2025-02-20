const mongoose = require('mongoose');
const Doctor = require('../models/doctor');
const { faker } = require('@faker-js/faker');
const connectDB = require('../db');

const seedDoctors = async () => {
  await connectDB();

  const doctors = Array.from({ length: 50 }, () => ({
    name: faker.person.fullName(),
    workingHours: {
      start: '09:00',
      end: '17:00'
    }
  }));

  Doctor.insertMany(doctors)
    .then(() => {
      console.log('50 doctors added successfully');
      mongoose.connection.close();
    })
    .catch(err => {
      console.error('Error inserting doctors:', err);
      mongoose.connection.close();
    });
};

seedDoctors();
