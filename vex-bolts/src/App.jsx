import { useState } from "react"
import "./App.css"

export default function App (){
  const [thing1,setNewItem] = useState("")
  const [finds, found] = useState([])

  function submiting(act){
    act.preventDefault()
  }
  return (
    <>
    <form  onSubmit= {submiting} className="lasse">
    <div className="row">
      <label htmlFor="start">login</label>
      <input value= {thing1} onChange= {e=>setNewItem(e.target.value)}type="text" id="start"></input>
    </div>
          <button className="add">Find</button>
  </form>
  <h1 className="header">Home</h1>
  <ul className="list">
    <li>
      <label>
        <p>Box 1</p>
        <input type="checkbox"/>
      </label>
      <button className="delete">Remove</button>
      </li>
    <li>
      <label>
        <input type="checkbox"/>
        <p>Box 2</p>
      </label>
      <button className="delete">Remove</button>
    </li>
  </ul>
</>
  )
}
