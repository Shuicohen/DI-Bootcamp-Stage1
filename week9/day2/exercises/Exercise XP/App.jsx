import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

import './App.css'

function App() {
 

  return (
    <Provider store={store}>
      <div>
        <h1>Todo list</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  )
}

export default App
