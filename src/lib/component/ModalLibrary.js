import React, { useCallback, useEffect } from 'react';

import './ModalLibrary.css';
/**
 * Modal
 * @param {*} props
 * @returns Modal component
 */

const Modal = (props) => {
	// function that closes the modal when 'escape' is pressed
	const keyPress = useCallback(
		(e) => {
			if (e.key === 'Escape' && props.showModal) {
				props.setShowModal(false);
			}
		},
		[props]
	);

	useEffect(() => {
		document.addEventListener('keydown', keyPress);
		return () => document.removeEventListener('keydown', keyPress);
	}, [keyPress]);

	return (
		<>
			{props.showModal ? (
				<section className='container-modal'>
					<div className={props.modalStyle}>
						<span className={props.textStyle}>{props.content}</span>
						<button
							className='modal-cross'
							aria-label='Close modal'
							onClick={() => props.setShowModal(false)}>
							X
						</button>
					</div>
				</section>
			) : null}
		</>
	);
};

export default Modal;
