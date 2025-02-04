import React from "react";
import { useState } from "react";

export default function But() {
    return (
        <div>
            <h1>Button</h1>
            <MyButi />
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}
function MyButi(){
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
}
