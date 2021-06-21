import React, { useState } from "react";

/*
  the setter function for the useState hook does not automatically merge
  the previous state with the new update like when using a class component
  and setState
*/
function HookCounterThree(props) {
  const [name, setName] = useState({ first: " ", last: " " });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.first}
          onChange={(e) => setName({ ...name, first: e.target.value })}
        />
        <input
          type="text"
          value={name.last}
          onChange={(e) => setName({ ...name, last: e.target.value })}
        />
        <h2>Your first name is: {name.first}</h2>
        <h2>Last name is: {name.last}</h2>
      </form>
    </div>
  );
}

export default HookCounterThree;
