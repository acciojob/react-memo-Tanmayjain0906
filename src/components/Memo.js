import React, { useState } from "react";

const Memo = () => {
  const [value, setVal] = useState("");

  const [skill, setSkill] = useState([]);
  //Function to handel submit
  function handelSubmit(e) {
    e.preventDefault();
    value != "" && setSkill([...skill, value.trim()]);
    setVal("");
  }

  return (
    <div className="Memo">
      <h1>React.memo</h1>
      <br></br>
      <form onSubmit={handelSubmit}>
        <input id="skill-input"
          type="text"
          value={value}
          onInput={(e) => {
            setVal(e.target.value);
          }}
        ></input>
        <button id="skill-btn" type="submit">Add Skill</button>
      </form>
      <br></br>
      <ul>{skill && skill.map((val, index) => <li key={index} id={"item-"+ val}>{val}</li>)}</ul>
    </div>
  );
};

export default Memo;