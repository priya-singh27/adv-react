import React from "react";

export default function Counter() {
  let ref = React.useRef(0);

    const handleClick = () => {
        ref.current += 2;
        console.log(ref.current)
    };

  return <button onClick={handleClick}>{ref.current} times clicked!</button>;
}

