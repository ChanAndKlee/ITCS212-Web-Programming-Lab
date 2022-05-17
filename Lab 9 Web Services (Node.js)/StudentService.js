const path = require('path');
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// const cors = require('cors');
const app = express();



dotenv.config();
// const port = process.env.PORT;

// let corsOptions = {
//     origin: 'htpp://localhost:3030',
//     method: 'GET,POST,PUT,DELETE'
// };

// app.use(cors(corsOptions));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

let dbConn = mysql.createConnection({
    host: process.env.host,
    user: process.env.DB_user,
    password: process.env.DB_pass,
    database: process.env.DB_name
});

// // Connect to DB
dbConn.connect(function(err) {
    if (err) throw err;
    console.log("Connected DB: " + process.env.DB_name);
});

// Insert Student //
app.post('/student', function(req, res) {

    let data = req.body.student;
    console.log(data);

    if (!data) {
        return res.status(400).send({ error: true, message: 'Please provide student information' });
    }

    dbConn.query('INSERT INTO personal_info SET ?', data, function(error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'New student has been created successfully'
        });
    })
});
// Update Student //
app.put('/student', function(req, res) {

    let student_id = req.body.student.StudentID;
    // console.log(student_id);

    let student = req.body.student;
    // console.log(student);

    if (!student_id || !student) {
        return res.status(400).send({
            error: true,
            message: 'Please provide student information'
        });
    }

    dbConn.query("UPDATE personal_info SET ? WHERE StudentID = ?", [student, student_id], function(error, results) {
        if (error) throw error;
        return res.send({
            error: false,
            data: results.affectedRows,
            message: 'Student has been updated successfully.'
        });
    });
});

// Delete Student //
app.delete('/student', function(req, res) {
    let student_id = req.body.StudentID;

    if (!student_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide StudentID'
        });
    }
    dbConn.query('DELETE FROM personal_info WHERE StudentID = ?', student_id, function(error, results) {
        if (error) throw error;
        // In case there is any no this data in DB (Don't have any effects => no data to be deleted)
        if (results.affectedRows == 0) console.log("=> There is no Student ID " + student_id);
        else console.log("=> Deleting Student ID " + student_id);
        return res.send({
            eror: false,
            data: results.affectedRows,
            message: 'Student has been deleted successfully.'
        });
    });
});


// Select student by id //
app.get('/student/:id', function(req, res) {
    let student_id = req.params.id; // get the :id (e.g., 1,2,3,...)

    if (!student_id) {
        return res.status(400).send({
            error: true,
            message: 'Please provide student id.'
        })
    }
    dbConn.query('SELECT * FROM personal_info WHERE StudentID = ?', student_id, function(error, results) {
        if (error) throw error;
        // In case there is any no this data in DB
        if (results == "") console.log("=> There is no Student ID " + student_id);
        else console.log("=> Selecting Student ID " + student_id);
        return res.send({
            error: false,
            data: results[0],
            message: 'Student retrieved'
        });
    });
});

// Select all students //
app.get('/students', function(req, res) {
    dbConn.query('SELECT * FROM personal_info', function(error, results) {
        if (error) throw error;
        // In case there is any no this data in DB
        if (results == "") console.log("=> There is no Student Information left");
        else console.log("=> Selecting All Students");
        return res.send({
            error: false,
            data: results,
            message: 'Student list.'
        });
    });
});

app.listen(process.env.PORT);