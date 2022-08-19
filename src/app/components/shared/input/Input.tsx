import React, { useState } from "react";

import classes from "./Input.module.css";

type InputOwnProps<E extends React.ElementType> = {
  name: string;
  type?: string;
  className: string;
  labeled?: boolean;
  onChange?: (value: string, id: string) => void;
  as?: E;
  rows?: string;
  cols?: string;
};
type InputProps<E extends React.ElementType> = InputOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof InputOwnProps<E>>;

const Input = <E extends React.ElementType = "input">({
  name,
  type,
  className,
  labeled,
  onChange,
  as,
}: InputProps<E>) => {
  const [enteredValue, setEnteredValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = event.target;
    setEnteredValue(value);
    if (onChange) {
      onChange(value, id);
    }
  };
  const Component = as || "input";
  return (
    <div className={classes[`${className}`]}>
      {labeled && <label htmlFor={name}>{name.toUpperCase()}</label>}
      <Component
        onChange={handleChange}
        value={enteredValue}
        id={name}
        type={type}
        placeholder={!labeled ? name.toUpperCase() : ""}
      />
    </div>
  );
};

export default Input;
