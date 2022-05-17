const express = require('express');
const student = express.Router()

const studentJSON = require('../models/student-model').studentJSON;
student.get('/', function(req, res) {
    console.log("Retreive the student JSON");
    res.render('student', {'students': studentJSON });
})

module.exports = student;