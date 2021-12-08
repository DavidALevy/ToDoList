import React from "react"
import { useState } from 'react'
import "./App.css"


const ToDoList = () => {    
    const [items, setitems] = useState([])
    const [input, setInput] = useState("")

    const addHandler = () => {
      if(input==="")return;
        let storeditems = [...items]
        storeditems.push(input)
        setitems(storeditems) 
        setInput("");
    }
    const handleKeyDown = (event) => {
      if(input==="")return;
      else if (event.key === 'Enter') {
            let storeditems = [...items]
            storeditems.push(input)
            setitems(storeditems)
            setInput("");
        }}

    const removeHandler = (index) => {
        let storeditems = [...items]
        storeditems.splice(index,1)
        setitems(storeditems)
    }
    const clear=()=>{
        setitems([])              
    };
    
    return (
        <div>
            <h1>To Do List</h1>
            <header className="inputAndClear">                      
                <input type="text" id="input" value={input} placeholder="press <add to list> or press <enter> to submit"
                onChange={(event) => setInput(event.target.value)}                
                onKeyDown={handleKeyDown}         
                />
                <button className="addButton"onClick={ addHandler}>add to list</button>
                <div><button onClick={clear} className="removeAllButton">delete all</button></div>
            </header>

            {items.map((item, index) => { 
                return (
                <div key={index} class="listAndButton">                  
                <div class="list1">{item}</div>                
                 <button className="removeButton"onClick={() => removeHandler(index,1)}>delete</button>
                </div>
                  )
                })}     

                
        </div>        
    )     
    }
export default ToDoList
