import React, { useEffect, useState } from "react";

function HookMouseMove(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMouseMove = (e) => {
    console.log("logMouseMove");
    setX(e.clientX);
    setY(e.clientY);
  };
  /*
    Providing useEffect with an empty array will allow it to only run once on initial render
    and not on an subsequent re-renders
    ex:
    useEffect(() => {
      *run code once on initial render*  
    }, [])  <-- Empty array.
    */
  useEffect(() => {
    console.log("useEffect is called");
    window.addEventListener("mousemove", logMouseMove);

    return () => {
      //This code is executed when the current comp. unmounts.
      console.log("component HookMouseMove unmounted");
      window.removeEventListener("mousemove", logMouseMove);
    };
  }, []);
  return (
    <div>
      Hooks - postion of X: {x} and Y: {y}
    </div>
  );
}

export default HookMouseMove;
