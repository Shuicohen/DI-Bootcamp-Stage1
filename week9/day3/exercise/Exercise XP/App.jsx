import TodoList from './features/TodoList';
import AddTodo from './features/AddTodo';
import './App.css'

function App() {
  
  return (
    <div>
      <h2>Todo App with Redux</h2>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
