import React from "react";
import Todo from "./Todo";
import Counter from "./Counter";
import Memo from "./Memo";

const App = () => {

    return(
        <div id='main'>
            <h1>React.useMemo</h1>
            <Todo />
            <hr />
            <Counter />
            <hr />
            <hr />
            <Memo />
        </div>
    )
}

export default App;

