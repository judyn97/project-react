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

  {/*Store completed items in new array*/}
  const completedItems = item.filter((todo) => todo.completed === true);

  {/*Add new item to array when button is clicked*/}
  const handleClick = () =>{
    {/*Check if same name already exist */}
    const checkSameItem = item.some((todo) => todo.text.toLowerCase() === input.toLowerCase());
    if(checkSameItem === true){
      alert("Task with same name already exist!");
      return;
    }
    const newItem: list = {id: Date.now(), text:input, completed: false};
    setItem([...item,newItem]);
  }

  {/*Toggle complete status when list is clicked*/}
  const toggleCompleted = (id: number) =>{
    setItem(
      item.map((todo) => {
        if(todo.id === id){
          return {...todo, completed: !todo.completed};
        }
        return todo;
      })
    )
  }

  
  return (
    <div className='container'>
        <h1>To Do List</h1>
        <input className="input-item" type='text' placeholder='Add item to the list..' onChange={(e) => setInput(e.currentTarget.value)}></input>
        <button className="add-button" onClick={handleClick}> Add </button>
        <ul className='container-todo'>
          {item.map((todo) => {
            return(
            <div className='list-container'>
              <li className='item-list' key={todo.id}  style={{textDecoration: todo.completed ? "line-through" : "none"}}>
                <input className='complete-button' type='checkbox' onChange={() => toggleCompleted(todo.id)}></input>
                {todo.text}
              </li>
            </div>)
          })}
        </ul>
        {item.length == 0 ? '' : 
          (item.length > 1 ? <p>{completedItems.length}/{item.length} items completed!</p> : 
            <p>{completedItems.length}/{item.length} item completed!</p>)}
    </div>
  )
}

export default App

{/*Remaining implementation:
1. Add delete todo list or mark as done or both
2. Make cannot display same item twice ?
3. Display total list at bottom ?
4. Style to make it responsive
*/}