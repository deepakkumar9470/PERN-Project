const db = require("../models");
const Student = db.students;
const Op = db.Sequelize.Op;


const createStudent =  async (req,res) =>{

    try {
        const newStudent =  Student.create({
            name :  req.body.name,
            rollno :  req.body.rollno,
        })
        res.status(201).json({newStudent})
    } catch (error) {
        console.log(error)
    }

}
const getStudents =  async (req,res) =>{
       try {
          const allStus = await Student.findAll()
          res.status(200).json({allStus})
       } catch (error) {
        console.log(error)
       }
}

//findByPk
const getSingleStudent =  async (req,res) =>{
    const id = req.params.id;
    try {
       const stud = await Student.findByPk(id)
       res.status(200).json({stud})
    } catch (error) {
     console.log(error)
    }
}

const updateStudent = async  (req,res) =>{
    const id = req.params.id;
    try {
          const editStus = await Student.update(req.body,{
            where:  {id : id}
          })
          res.status(200).json('Student updated Success..')
       } catch (error) {
        console.log(error)
       }
}

const deleteStudent =  async (req,res) =>{
    const id = req.params.id;
    try {
           await Student.destroy({
            where:  {id : id}
          })
          res.status(200).json('Student was deleted successfully!')
       } catch (error) {
        console.log(error)
       }
}

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent,
    getSingleStudent
}