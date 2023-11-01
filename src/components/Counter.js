import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>Count : {count}<button onClick={() => setCount(count+1)}>+</button></p>

            <h1>Expensive Calculation</h1>

            <p>{1000000000 + count}</p>
        </div>
    )
}

export default Counter;