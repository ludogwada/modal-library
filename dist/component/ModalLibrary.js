import React, { useCallback, useEffect } from 'react';
import './ModalLibrary.css';
/**
 * Modal
 * @param {*} props
 * @returns Modal component
 */

const Modal = props => {
  // function that closes the modal when 'escape' is pressed
  const keyPress = useCallback(e => {
    if (e.key === 'Escape' && props.showModal) {
      props.setShowModal(false);
    }
  }, [props]);
  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, props.showModal ? /*#__PURE__*/React.createElement("section", {
    className: "container-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: props.modalStyle
  }, /*#__PURE__*/React.createElement("span", {
    className: props.textStyle
  }, props.content), /*#__PURE__*/React.createElement("button", {
    className: "modal-cross",
    "aria-label": "Close modal",
    onClick: () => props.setShowModal(false)
  }, "X"))) : null);
};

export default Modal;