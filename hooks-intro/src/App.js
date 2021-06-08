import React from 'react';
import ClassCounter from './components/ClassCounter';
import DataFetching from './components/DataFetching';
import HookCounter from './components/HookCounter';
import HookCounterFour from './components/HookCounterFour';
import HookCounterOne from './components/HookCounterOne';
import HookCounterThree from './components/HookCounterThree';
import HookCounterTwo from './components/HookCounterTwo';
import HookMouseMove from './components/HookMouseMove';
import IntervalHookCounter from './components/IntervalHookCounter';
import MouseContainer from './components/MouseContainer';



function App() {
    return (
        <div>
        {/* 
            <ClassCounter />
            <HookCounter />
            <HookCounterTwo />
            <HookCounterThree />
            <HookCounterFour />
        <HookCounterOne />
        */}
        {/* <HookMouseMove /> */}
        {/* <MouseContainer /> */}
        {/* <IntervalHookCounter /> */}
        <DataFetching />
        </div>
    )
}

export default App;