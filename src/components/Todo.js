import React, { useState } from "react";

const Todo = () => {
  const [todoList, setTodoList] = useState([]);


  return(
    <div>
        <h1>My todos</h1>
        {
            todoList.map((todo) => (
                <div>
                    {todo}
                    <br />
                    <br />
                </div>
            ))
        }
        <button onClick={() => setTodoList([...todoList, "New Todo"])}>Add Todo</button>
    </div>
  )
}

export default Todo;