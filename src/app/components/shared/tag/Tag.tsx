import { Link } from "react-router-dom";

import classes from "./Tag.module.css";

const Tag: React.FC<{ name: string; path: string }> = ({ name, path }) => {
  return (
    <Link className={`link ${classes.tag}`} to={path}>
      {name.toLowerCase()}
    </Link>
  );
};

export default Tag;
