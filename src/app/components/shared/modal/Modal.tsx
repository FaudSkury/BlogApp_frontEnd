import { Fragment } from "react";
import { createPortal } from "react-dom";

import classes from "./Modal.module.css";

const ModalCard: React.FC<{
  children: JSX.Element;
}> = (props) => {
  return <div className={classes["modalCard-container"]}>{props.children}</div>;
};
const ModalBackdrop: React.FC<{ handleModal: () => void }> = (props) => {
  return <div onClick={props.handleModal} className={classes.backdrop}></div>;
};

const Modal: React.FC<{ children: JSX.Element; handleModal: () => void }> = (
  props
) => {
  return (
    <Fragment>
      {createPortal(
        <ModalCard children={props.children} />,
        document.getElementById("modal")!
      )}
      {createPortal(
        <ModalBackdrop handleModal={props.handleModal} />,
        document.getElementById("backdrop")!
      )}
    </Fragment>
  );
};

export default Modal;
