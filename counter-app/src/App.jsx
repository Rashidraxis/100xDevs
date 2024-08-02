import { useState } from "react";

function App() {

  const [todo, setTodos] = useState([
    {
      title: "Go to gym",
      description: "Go to gym at 7 am",
      completed: false,
    },
    {
      title: "Go to gym 1",
      description: "Go to gym at 17 am",
      completed: false,
    },
  ]);

  function addTodo() {
    setTodos([...todo, {
      title: "Random",
      description: "Go to Random at 17 am",
      completed: false,
    }])
  }

  return (
    <div>
      <button onClick={addTodo}>Add todo</button>
    {
      todo.map(function (todo) {
        return (
          <Todo title={todo.title} description={todo.description}></Todo>
        )
      })
    }
    </div>
  )
}

function Todo(props) {

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default App
