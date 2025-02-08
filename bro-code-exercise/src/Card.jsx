import { useReducer,useState,useEffect,useRef,useLayoutEffect } from "react";
import axios from "axios";
import Student from "./student";
import React from 'react';
import Login from './login';
import User from './user';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    default:
      return state;
  }
};

function Card() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState("wapi");
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: false });
  const [data, setData] = useState('');
  const inputRef = useRef(null); 
  const divRef = useRef(null);
  const buttonRef=useRef(null);
  const [username,setUsername]=useState('');

  const check = () => {
    inputRef.current.value=('');
  }
  useLayoutEffect(() => {
    // console.log(divRef.current.value);
  },[])
useEffect(() => {
  divRef.current.value='chocola';
},[])

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      setData(res.data[10].email);
    });
  },[]);
  let onChange = (e) => {
    setInputValue(e.target.value);
  };

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="card">
      {counter}
      <button onClick={increment}>INC</button>
      <div>
        <br />
        <input placeholder="biracamo x...." onChange={onChange} />
        {inputValue}
      </div>
      <div>
        <h1>{state.count}</h1>
        <button
          onClick={() => {
            dispatch({ type: "increment" });
            dispatch({ type: "toggleShowText" });
          }}
        >
          BIG
        </button>
        {state.showText && <p>BANG</p>}
      </div>
      <br />
      <div>
        <h3>{data}</h3>
      </div>
      <br />
      <div>
        <input placeholder="karibu...." ref={inputRef}/>
        <button onClick={check}>Next</button>
      </div>
      <br />
      <div>
        <input value='Bombo' ref={divRef}/>
      </div>
      <br />
      <div>
        <button onClick={()=>{buttonRef.current.alterToggle()}}>Mombasa</button>
        <button onClick={()=>{buttonRef.current.alterToggle()}}>Nairobi</button>
        <Student ref={buttonRef}/>
        </div>
        <br/>
        <div>
          <Login/> <User/>
        </div>
    </div>
  );
}

export default Card;
