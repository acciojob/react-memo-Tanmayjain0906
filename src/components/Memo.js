import React, { useState } from "react";

const Memo = () => {
    const [memoList, setMemoList] = useState([]);
    const [inputValue, setInputValue] = useState("");

    function handleInput(event) {
        setInputValue(event.target.value);
    }

    function handleForm(event) {
        event.preventDefault();

        if (inputValue !== "") {
            setMemoList([...memoList, inputValue])
            setInputValue("");
        }
    }

    return (
        <div>
            <h1>React.memo</h1>

            <form onSubmit={handleForm}>
                <input type="text" value={inputValue} onChange={handleInput} id="skill-input"/>
                <button type="submit" id="skill-btn">Add Skill</button>

                {
                    <ul>
                        {
                            memoList.map((item) => (
                                <li>
                                    {item}
                                </li>
                            ))
                        }
                    </ul>
                }
            </form>
        </div>
    )
}

export default Memo;