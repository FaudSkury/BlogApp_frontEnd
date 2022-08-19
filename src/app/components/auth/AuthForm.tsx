import { FormEvent, useEffect, useState } from "react";
import { authActions } from "../../store/auth-slice";
import { useAppDispatch } from "../../store/hooks";
import Button from "../shared/button/Button";

import Input from "../shared/input/Input";

import classes from "./AuthForm.module.css";

const AuthForm: React.FC<{ modalHandler: () => void }> = (props) => {
  const [authInput, setAuthInput] = useState<{
    email: string;
    password: string;
    confirm?: string;
  }>({
    email: "",
    password: "",
  });

  const [userIsLogginIn, setUserIsLoggingIn] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userIsLogginIn && authInput.confirm) {
      setAuthInput((values) => {
        const { email, password } = values;
        return { email, password };
      });
    }
  }, [userIsLogginIn, authInput.confirm]);

  const handleInput = (value: string, id: string) => {
    setAuthInput((values) => {
      return { ...values, [id]: value };
    });
  };

  const handleFormSwitch = () => {
    setUserIsLoggingIn(!userIsLogginIn);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(authInput);
    dispatch(authActions.login());
    props.modalHandler();
  };

  return (
    <form onSubmit={handleSubmit} className={classes["authForm-container"]}>
      <h2>{userIsLogginIn ? "Login" : "Sign Up"}</h2>
      <Input
        name="email"
        type="email"
        className="auth"
        onChange={handleInput}
        labeled
      />
      <Input
        name="password"
        type="password"
        className="auth"
        onChange={handleInput}
        labeled
      />
      {!userIsLogginIn && (
        <Input
          name="confirm"
          type="password"
          className="auth"
          onChange={handleInput}
          labeled
        />
      )}

      {
        <div className={classes["authForm-footer"]}>
          <Button className="auth">
            {userIsLogginIn ? "Login" : "Sign Up"}
          </Button>
          <p onClick={handleFormSwitch}>
            Switch to {userIsLogginIn ? "SignUp" : "Login"}
          </p>
        </div>
      }
    </form>
  );
};

export default AuthForm;
