import React, { useState, useEffect } from 'react'
import axios from 'axios'

const AddTodo = () => {
  const [description, setDescription] = useState('')

  const addHandler = async (e) => {
    e.preventDefault()
    try {
        
        const res = await axios.post('http://localhost:5000/api/todo',{description})
        alert('Todo Added..') 
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className='container p-4'>

      <form>
        <div class="form-group">
          <label htmlFor="Description">Description</label>
          <input 
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            type="text" 
            className="form-control" 
            placeholder="Enter Desc" />
        </div>
        <button className='btn btn-success block my-4' onClick={addHandler}>Add</button>
      </form>

    </div>
  )
}

export default AddTodo