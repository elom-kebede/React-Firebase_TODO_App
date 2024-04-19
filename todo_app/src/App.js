import './App.css';
import React, {useState} from 'react'

function App() {
  const[todos, setTodos]=useState(['Take dogs for a walk','Take the rubbish out', 'i wanna see u' ])
  const[input, setInput]=useState('')

  const addTodo =(event) => {
       event.preventDefault() // will stop the referesh
       setTodos([...todos, input]) 
       setInput('') // clear up the input after clicking add button   
    }

  return (
    <div className="App">

      <h1>Hello Friends</h1>
      <form action="">
          <input value={input} onChange={event=>setInput(event.target.value)} />
          <button type="submit" onClick={addTodo}>Add ToDo</button>
      </form>
      

      <ul>
        {todos.map(todo =>(
          <li>{todo}</li>
        ))}
       
      </ul>
    </div>
  );
}

export default App;
