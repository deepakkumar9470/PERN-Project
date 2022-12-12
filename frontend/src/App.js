import './App.css';

import AddTodo from './components/AddTodo'
import EditTodo from './components/EditTodo'
import ListTodos from './components/ListTodos'

function App() {
  return (
    <div className="App">
       <AddTodo/>
       <ListTodos/>
    </div>
  );
}

export default App;
