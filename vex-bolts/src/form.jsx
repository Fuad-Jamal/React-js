import React, { useState } from "react";
import ReactDOM from "react-dom";

let array = [];

function Form(props) {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleClick = (t) => {
    t.preventDefault();
    let person={userName,email,password}
    array.push(person);
      console.log(array);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUserName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        UserName:
        <input name="username" type="text" onChange={handleChange} id="username" />
        Email:
        <input name="email" type="email" onChange={handleChange} id="email" />
        <br></br>
        Password:
        <input name="password" type="password" onChange={handleChange} id="password" />
        <br></br>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
ReactDOM.render(<Form />, document.getElementById("root"));
export default Form;
