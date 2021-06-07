import React, { useState } from 'react';
import HookMouseMove from './HookMouseMove'

function MouseContainer(props) {
    const [display, setDisplay] = useState(true)
    /*
    When 'display' is toggled off, or false, the HookMouseMove comp is unmounted.
    But in the that comp the addEventListener is still attached. So the useEffect needs to return
    a function that is executed when the comp unmounts
    ex
    useEffect(() => {
        **Code to execute here**

        return () => {
            **Code to execute when comp. unmounts here**
        }
    }, [])  
    */
    return (
        <div>
            <button onClick={() => setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouseMove />}
        </div>
    );
}

export default MouseContainer;