import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return(
        <div>
            <p id="incr-cnt">Count : {count}<button onClick={() => setCount(count+1)} id="incr-cnt">+</button></p>

            <h1>Expensive Calculation</h1>

            <p id='calc'>{1000000000 + count}</p>
        </div>
    )
}

export default Counter;