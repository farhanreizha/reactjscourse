import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

const ModalPopup = ({ children, activator }) => {
  const [show, setShow] = useState(false);

  const content = show && (
    <Modal show={show} onHide={() => setShow(false)}>
      <div className="my-2 mx-4">{children}</div>
      <Modal.Footer>
        <Button variant="danger" onClick={() => setShow(false)}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <div>{activator({ setShow })}</div>
      {createPortal(
        <CSSTransition
          in={show}
          timeout={200}
          className="modal-transition"
          unmountOnExit
        >
          {() => <div>{content}</div>}
        </CSSTransition>,
        document.body
      )}
    </>
  );
};

export default ModalPopup;
