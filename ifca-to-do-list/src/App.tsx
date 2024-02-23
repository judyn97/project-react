import { useState } from 'react'
import './App.css'

interface list {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [item, setItem] = useState<list[]>([]);
  const [input, setInput] = useState("");

  {/*Add new item to array when button is clicked*/}
  const handleClick = () =>{
    const newItem: list = {id: Date.now(), text:input, completed: false};
    setItem([...item,newItem]);
  }
  return (
    <>
      <>
        <h1>To Do List</h1>
        <input className="input-item" type='text' placeholder='Add item to the list..' onChange={(e) => setInput(e.currentTarget.value)}></input>
        <button className="add-button" onClick={handleClick}> Add </button>
        <ul>
          {item.map((todo) => {
            return(<li key={todo.id}>{todo.text}</li>)
          })}
        </ul>
    </>
    </>
  )
}

export default App

{/*Remaining implementation:
1. Add delete todo list or mark as done or both
2. Make cannot display same item twice ?
3. Display total list at bottom ?
4. Style to make it responsive
*/}