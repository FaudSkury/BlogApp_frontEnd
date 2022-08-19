import Button from "../../../components/shared/button/Button";
import Input from "../../../components/shared/input/Input";
import classes from "./WriteBar.module.css";

const WriteBar = () => {
  return (
    <div style={{ flexBasis: "75%" }} className={classes["writeBar-container"]}>
      <form className={classes["writeBar-form__wrapper"]}>
        <Input name="title" type="text" className="write" labeled />
        <Input as="textarea" name="content" className="write" labeled />
        <Input name="tags" type="text" className="write" labeled />
        <Button className="write">Submit</Button>
      </form>
    </div>
  );
};

export default WriteBar;
