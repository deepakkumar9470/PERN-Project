const express  = require('express')
const router = express.Router()
const client = require('../db')
// const pool = require('../db')


// POST TODO
router.post('/todo', async (req,res)=>{
      const {description} = req.body;
    try {
         const newTodo = await client.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description])
         res.status(201).json( {newTodo})
    } catch (error) {
        console.log(error)
    }

})

// GET ALL TODOS 
router.get('/todos',async (req,res)=>{
    try {
        const allTodos = await client.query("SELECT * FROM todo")
        res.status(200).json({allTodos})
   } catch (error) {
       console.log(error)
   }
})

// Get single todo
router.get('/todo/:id',async (req,res)=>{
    const {id} = req.params
    try {
        const todo = await client.query("SELECT *  FROM todo WHERE todo_id = $1", [id])
        res.status(200).json({todo})
   } catch (error) {
       console.log(error)
   }
    
    
})

// Update Todo
router.put('/todo/:id', async(req,res)=>{
    const {id} = req.params
    const {description} = req.body
    try {
        const edittodo = await client.query("UPDATE todo SET description = $1 WHERE todo_id=$2", [description,id])
        res.status(200).json({edittodo})
   } catch (error) {
       console.log(error)
   }
})

// Delete todo
router.delete('/todo/:id',async(req,res)=>{
    const {id} = req.params
   
    try {
        await client.query("DELETE FROM todo WHERE todo_id= $1",  [id])
        res.status(200).json("Todo deleted..")
   } catch (error) {
       console.log(error)
   }
})

module.exports = router