import React, { useState } from 'react';

function HookCounterTwo(props) {
    const initState = 0
    const [count, setCount] = useState(initState)

    /*
    when updating state based on a previous state pass a function into
    the 'setState' function
    ex:
    setCount(prevState => prevState + 1)
    prevState can be called anything.
    */ 
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initState)}>Reset</button>
            <button onClick={() => setCount(prevState => prevState + 1)}>+</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>-</button>
        </div>
    );
}

export default HookCounterTwo;