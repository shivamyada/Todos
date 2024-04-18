import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

import './App.css'
import List from './components/List';

function App() {
  const [text ,setText]=useState("");
  const[todolist, setTodolist]=useState([]);
  
const  addItem =()=>{
  const newTodoItem={
    id:uuidv4(),
    item:text,
    done:false,
  };
  setTodolist([...todolist,newTodoItem]);  // 
  setText('');
  


};
const handleDelete=(itemId)=>{

  const newTodo= todolist.filter((listItem)=>
  listItem.id !==itemId);
  setTodolist(newTodo);
}


console.log(todolist);
  return (
    <div className="App">
    <h1>To Do List</h1>
    <div className="adder">
      <input
        type="text"
        placeholder="Add Items to your list"
         value={text}
         onChange={(e) => setText(e.target.value)}
      />
      <span  onClick={addItem}>+</span>
     </div> 
     
      <List
        todolist={todolist}
        
         handleDelete={handleDelete}
      />
  
  </div> 
);
}
    
      
  

export default App;
