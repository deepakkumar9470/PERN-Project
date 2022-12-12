import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EditTodo = ({todo}) => {

  const [description, setDescription] = useState(todo.description)

  const updateHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.put(`http://localhost:5000/api/todo/${todo.todo_id}`)
      alert('Todo Updated..')
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>

      <div class="container mt-3">
        <h3>Edit Todo</h3>
       

        <button type="button" class="btn btn-warning" data-bs-toggle="modal" 
          data-bs-target={`#id${todo.todo_id}`} onClick={(e)=>updateHandler(e)}>
          Edit
        </button>
      </div>

      <div class="modal" id={`id${todo.todo_id}`}>
        <div class="modal-dialog">
          <div class="modal-content">


            <div class="modal-header">
              <h4 class="modal-title">Edit Todo here</h4>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>


            <div class="modal-body">
                 <input 
                  value={description}
                  onChange={(e)=>setDescription(e.target.value)}
                  type="text" 
                  className="form-control" 
                  placeholder="Enter Desc" />
            </div>
           
            <div class="modal-footer">
              <button type="button" class="btn btn-warning" data-bs-dismiss="modal">Edit</button>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default EditTodo