import React, { useState } from "react";

export const MyComponent = () => {
  const [name, setName] = useState();
  const [age, setAge] = useState(0);
  const [employee, setEmployee] = useState(false);

  const updateName = () => {
    setName("Bombo");
  };
  const incrementAge = () => {
    setAge(age + 1);
  };
  const toggleStatus = () => {
    setEmployee(!employee);
  };

  return (
    <div>
      <p>Name: {name}</p>
      <button onClick={updateName}>Set Name</button>

      <p>Age: {age}</p>
      <button onClick={incrementAge}>Increnent Age</button>

      <p>Employee: {employee ? "kbx" : "wapi"}</p>
      <button onClick={toggleStatus}>Akazi</button>
    </div>
  );
};
