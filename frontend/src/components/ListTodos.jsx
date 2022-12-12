import React, { useEffect, useState } from 'react'
import axios from 'axios'
import EditTodo from '../components/EditTodo'
const ListTodos = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const fetchTodos = async () => {

      try {
        const res = await axios.get('http://localhost:5000/api/todos')
        console.log(res)
        setTodos(res.data.allTodos.rows)
      } catch (error) {
        console.log(error)
      }

    }
    fetchTodos()
  }, [])

  const deleteTodo = async (id) =>{
    try {
      const res = await axios.delete(`http://localhost:5000/api/todo/${id}`)
      console.log(res)
      setTodos(todos.filter((val)=> val.todo_id !== id))
    } catch (error) {
      console.log(error)
    }

  }

  console.log(todos)
  return (
    <div className='p-5'>
      <h2>ListTodos</h2>

      <table class="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
         {
          todos?.map((val,i)=>(
            <tr key={i}>
              <td>{val.todo_id}</td>
              <td>{val.description}</td>
              <td><EditTodo todo={val}/></td>
              <td><button className='btn danger' onClick={()=>deleteTodo(val.todo_id)}>Delete</button></td>
          </tr>
          ))
         }

        </tbody>
      </table>
    </div>
  )
}

export default ListTodos