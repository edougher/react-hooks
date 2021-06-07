import React, { useState, useEffect } from 'react';

function HookCounterOne(props) {
/*
The useEffect hook allows you to perform side effects in functional components.

It is a CLOSE replacement for class component life-cycle methods, componentDidMount,
componentDidUpdate and componentWillUnmount.

useEffect will run after every render of the component.
With useEffect, passing in a second argument, an array of values, tells useEffect what piece of state
to watch for and depends on. For the example below it is [count] on ln:20. useEfect will only rerender if count changes.
*/
const [count, setCount] = useState(0)
const [name, setName] = useState('')

useEffect(() => {
    console.log('useEffect - updating document title');
    document.title = `You clicked button ${count} times`
}, [count])
    return (
        <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    );
}

export default HookCounterOne;