import { FormEvent, useEffect, useState } from "react";
import { authActions } from "../../store/auth-slice";
import { useAppDispatch } from "../../store/hooks";
import { useHttp } from "../../hooks/use-http";
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

  const { isLoading, error, sendRequest } = useHttp();

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

  let url: string;
  userIsLogginIn
    ? (url = "http://localhost:4000/auth/login")
    : (url = "http://localhost:4000/auth/signup");
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const requestData = sendRequest(
      {
        url: url,
        method: "POST",
        body: authInput,
      },
      (data) => {
        if (!error && !isLoading) {
          return dispatch(authActions.login(data));
        }
      }
    );

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
