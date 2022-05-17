const path = require('path');
const express = require('express');
const app = express();

// Import and use Environmental Variable
const dotenv = require('dotenv');
dotenv.config();

// Use Router object to handle routes
const router = express.Router();
app.use("/", router); // Register the router

// Connection to MySQL
const mysql = require('mysql2');
var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USERNAME,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

console.log("Server listening at Port " + process.env.PORT);

// Connect to DB
connection.connect(function(err) {
    console.log("Connected DB: " + process.env.MYSQL_DATABASE);
});

// Select from DB
router.get("/cis-students", function(req, res) {
    console.log("Retrieved all CIS students in tinycollege...");
    let sql = "SELECT CONCAT(stu_fname, ' ', stu_lname) AS student_name, stu_gpa AS GPA FROM student WHERE dept_code = 'CIS' ORDER BY student_name ASC";
    connection.query(sql, function(error, results) {
        if (error) throw error;
        console.log(results.length + " CIS students returned");
        return res.send(results);
    });
});
router.get("/cis-courses", function(req, res) {
    console.log("Retrieved all CIS students in tinycollege...");
    let sql = "SELECT course_code, course_name FROM course WHERE dept_code = 'CIS'";
    connection.query(sql, function(error, results) {
        if (error) throw error;
        console.log(results.length + " CIS courses returned");
        return res.send(results);
    });
});

// Run Server
app.listen(process.env.PORT);