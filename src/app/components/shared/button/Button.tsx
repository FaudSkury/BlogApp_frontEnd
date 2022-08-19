import classes from "./Button.module.css";

const Button: React.FC<{
  onClick?: () => void;
  children: JSX.Element | string;
  className?: string;
}> = (props) => {
  return (
    <button
      className={`${classes.button} ${
        props.className ? classes[props.className] : null
      }`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
