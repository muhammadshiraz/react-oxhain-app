import React from 'react';
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CrossIco from '../../../Assets/Icons/Modal/CrossIcon.png';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 550,
    bgcolor: "#FFFFFF",
    boxShadow: 24,
    zIndex: "999999",
};

const Modal02 = ({ closeFn = () => null, open = false }) => {
  return (
    <Modal onClick={closeFn} open={open} className="relative">
      <div sx={style} className="modal--mask">
        <div className="modal-window">
          <header className="modal--header">
            <h1>Modal Two</h1>
          </header>
          <div className="modal--body">
            <p>Modal Two content will be rendered here.</p>
          </div>
          <footer className="modal--footer">
            <button type="button" onClick={closeFn}>
              Close
            </button>
          </footer>
        </div>
      </div>
    </Modal>
  );
};

export default Modal02;