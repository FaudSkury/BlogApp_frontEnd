import { useNavigate } from "react-router-dom";

import Navigation from "../navigation/Navigation";

import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles["header-container"]}>
      <h1
        onClick={() => {
          navigate("/");
        }}
      >
        BLOG_APP
      </h1>

      <Navigation />
    </header>
  );
};

export default Header;
