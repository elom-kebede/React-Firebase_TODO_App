import './App.css';
import React, {useEffect, useState} from 'react'
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import { db } from './firebase';
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';


function App() {
  const[todos, setTodos]=useState([ ])
  const[input, setInput]=useState('')

  // when the app loads, we need to listen to the database and fetch new todos as they get add/removed
  useEffect(()=> {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot=>{
      setTodos(snapshot.docs.map(doc =>doc.data().todo))
    })
  },[])

  const addTodo =(event) => {
       event.preventDefault() // will stop the referesh

       db.collection('todos').add({
        todo:input,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
       })

       setTodos([...todos, input]) 
       setInput('') // clear up the input after clicking add button   
    }

  return (
    <div className="App">

      <h1>Hello Friends</h1>
      <form action="">
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
           <Input value={input} onChange={event=>setInput(event.target.value)} />
        </FormControl>
          


          <Button type="submit" disabled={!input} onClick={addTodo} variant="contained" color='primary'>Add ToDo</Button>
      </form>
      

      <ul>
        {todos.map(todo =>(
          <Todo text={todo} />
        ))}
       
      </ul>
    </div>
  );
}

export default App;
