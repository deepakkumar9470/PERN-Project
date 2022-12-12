const students = require("../controllers/student");

const express = require('express')

const router = express()

 // Create a new Tutorial
 router.post("/add", students.createStudent);

 // Retrieve all students
 router.get("/students", students.getStudents);


// Retrieve single students
 router.get("/stu/:id", students.getSingleStudent);


 // Update a Tutorial with id
 router.put("/stu/:id", students.updateStudent);

 // Delete a Tutorial with id
 router.delete("/stu/:id", students.deleteStudent);




module.exports = router