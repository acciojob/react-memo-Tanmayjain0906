import React, { useState } from "react";

const Todos = () => {
  const [todo, setTodo] = useState([]);
  return (
    <div className="Todos">
      <h1>My todos</h1>
      <div className="todo-holder">
        {todo && todo.map((val,index) => <p key={index} id={"todo-"+ index}>{val}</p>)}
      </div>
      <br></br>
      <button id="add-todo-btn" onClick={() => setTodo([...todo, "New Todo"])}>Add Todo</button>
    </div>
  );
};

export default Todos;