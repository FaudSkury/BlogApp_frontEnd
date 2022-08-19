import React, { useRef, useEffect, useState } from "react";

import classes from "./Dropdown.module.css";

const Dropdown: React.FC<{ options: string[] }> = (props) => {
  const [activeElement, setActiveElement] = useState(0);
  const optionRefs = useRef<HTMLLIElement[]>([]);

  const addToRefs = (element: HTMLLIElement) => {
    if (element && !optionRefs.current?.includes(element)) {
      optionRefs.current!.push(element);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (event) => {
      const { key } = event;
      switch (key) {
        case "ArrowDown":
          setActiveElement((value) => {
            if (value > optionRefs.current.length) {
              return 0;
            }
            return value + 1;
          });
          break;
        case "ArrowUp":
          setActiveElement((value) => {
            if (value < 0) {
              return optionRefs.current.length - 1;
            }
            return value - 1;
          });
          break;
        // case "Enter":
        //   let focusedItem = optionRefs.current.filter((element) =>
        //     element.className.includes("focus")
        //   );
        //   if (focusedItem.length > 1) {
        //     focusedItem = [];
        //   }
        //   console.log(focusedItem[0]);
      }
    });
  }, []);

  return (
    <ul className={classes["dropdown-container"]}>
      {props.options.map((option: string, i) => {
        return (
          <li
            className={i === activeElement ? classes.focus : null}
            ref={addToRefs}
            onClick={() => {
              console.log(option);
            }}
            key={i}
          >
            {option}
          </li>
        );
      })}
    </ul>
  );
};

export default Dropdown;
