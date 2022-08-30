import { useState } from "react";
import { NavLink } from "react-router-dom";
import { authActions } from "../../../store/auth-slice";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";

import AuthForm from "../../auth/AuthForm";
import Button from "../button/Button";
import Modal from "../modal/Modal";

import styles from "./Navigation.module.css";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);

  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (auth.isLoggedIn) {
      dispatch(authActions.logout());
    } else {
      setShowModal(true);
    }
  };
  const handleHideModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <nav className={styles["nav-container"]}>
        <ul className={styles["nav-container_list"]}>
         
          {auth.isLoggedIn && (
            <li>
              <NavLink className="link" to="/write">
                Write
              </NavLink>
            </li>
          )}
          <Button onClick={handleClick} className="nav">
            {auth.isLoggedIn ? "Logout" : "Login"}
          </Button>
        </ul>
      </nav>
      {showModal && (
        <Modal
          handleModal={handleHideModal}
          children={<AuthForm modalHandler={handleHideModal} />}
        />
      )}
    </div>
  );
};

export default Navigation;
