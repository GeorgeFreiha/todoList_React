import React, { useState } from "react";

function ToDoItem(props) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <li
      onClick={handleClick}
      style={{ textDecoration: isClicked ? "line-through" : "none" }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
