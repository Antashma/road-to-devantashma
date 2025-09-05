import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [ todos ] = useState([
    {id: 0, task: "create todo", completed: true},
    {id: 1, task: "complete todo", completed: false},
    {id: 2, task: "test app", completed: false},
  ])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" data-testid="viteLogo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" data-testid="reactLogo" />
        </a>
      </div>
      <h1>Vite + React Todo App</h1>
      <p>Create your tasks and get them done!</p>
      <div className="card" >
        <section data-testid="todos">
          {
            todos.map(todo => (
              <p key={todo.id}>{todo.completed ? "✅" : ""}{todo.task}</p>
            ))
          }
        </section>

        <section data-testid="inputs">
          <input type="text" placeholder="Type in new task" role="textbox"/>
          <button role="button">Add Task</button>
        </section>
      </div>
    </>
  )
}

export default App
